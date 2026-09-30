// Leaflet 1.9 ships an ES-module build without a "module" entry in its
// package.json; import it by path and reuse @types/leaflet's typings.
declare module 'leaflet/dist/leaflet-src.esm.js' {
  export * from 'leaflet';
}
