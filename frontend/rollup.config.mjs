import fs from 'fs';
import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';

const dev = process.env.ROLLUP_WATCH === 'true';
const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
const leafletCss = fs.readFileSync('./node_modules/leaflet/dist/leaflet.css', 'utf-8');

export default {
  input: 'src/meshcore-bbs-panel.ts',
  output: {
    // Bundle ships flat at the integration root — see panel.py for the
    // matching StaticPathConfig that serves this file.
    file: '../custom_components/meshcore_bbs/meshcore-bbs-panel.js',
    format: 'es',
    sourcemap: dev,
    // Output plugins run after Rollup has assembled the bundle, in order.
    plugins: [
      // Down-level the ENTIRE merged bundle — the TS-compiled src/ plus the
      // bundled Lit runtime from node_modules (Lit 3 is published as ES2021,
      // so it carries logical-assignment operators like ??= / ||= / &&=) —
      // to the browserslist floor declared in package.json. This is what lets
      // the panel parse on older Android System WebViews / iOS WKWebViews
      // instead of throwing a SyntaxError and rendering blank. Run as an
      // OUTPUT plugin (after bundling) rather than an input transform so the
      // Lit code in node_modules is covered without enumerating package paths
      // in an include allowlist. allowAllFormats lets Babel operate on the
      // assembled ES-module bundle; bugfixes minimizes the transformed output.
      // preset-env reads the target floor from package.json's browserslist
      // key (no explicit targets passed here).
      getBabelOutputPlugin({
        presets: [['@babel/preset-env', { bugfixes: true }]],
        allowAllFormats: true,
      }),
      // terser runs LAST (after Babel) so it minifies the already
      // down-leveled code. comments: /^!/ preserves the /*! ... */ version
      // banner above; everything else is still stripped. Skipped in dev
      // (watch) builds.
      ...(dev
        ? []
        : [
            terser({
              compress: {
                drop_console: false,
                passes: 2,
              },
              format: {
                comments: /^!/,
                // Version banner, prepended AFTER minification. It can't be a
                // rollup `output.banner`: the Babel output plugin runs over the
                // assembled bundle first and drops the leading detached banner
                // comment. terser's preamble is emitted literally even when
                // comments are otherwise stripped, so it always survives. Lets
                // `grep <version> meshcore-bbs-panel.js` confirm the version
                // deployed to the HA host. dev/watch builds skip terser and
                // carry no banner; they are never deployed.
                preamble: `/*! meshcore-bbs-panel v${pkg.version} */`,
              },
            }),
          ]),
    ],
  },
  plugins: [
    // Inline the package version so the panel can show which bundle the
    // browser is actually running (Settings → BBS), next to the version
    // the backend reports — a mismatch means a stale cached bundle.
    {
      name: 'panel-version',
      transform(code, id) {
        if (!id.split(path.sep).join('/').endsWith('/src/constants.ts')) return null;
        return { code: code.replace('__PANEL_VERSION__', pkg.version), map: null };
      },
    },
    // Inline Leaflet's stylesheet into the map component: the map renders
    // inside a shadow root, where document-level CSS doesn't apply.
    {
      name: 'leaflet-css',
      transform(code, id) {
        if (!id.split(path.sep).join('/').endsWith('/src/components/location-map.ts')) return null;
        return { code: code.replace("'__LEAFLET_CSS__'", JSON.stringify(leafletCss)), map: null };
      },
    },
    resolve(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: false,
      sourceMap: dev,
      include: ['src/**/*.ts'],
      // @rollup/plugin-typescript v12 requires the TS `outDir` to resolve
      // inside the rollup output file's directory. The bundle is emitted to
      // ../custom_components/meshcore_bbs/, so point outDir there (overrides
      // tsconfig's ./dist). rollup writes the actual bundle; nothing is
      // emitted loose because declaration is off.
      outDir: '../custom_components/meshcore_bbs',
    }),
  ],
};
