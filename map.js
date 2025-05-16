// Import Mapbox as ESM
import mapboxgl from 'https://cdn.jsdelivr.net/npm/mapbox-gl@2.15.0/+esm';

// Set your Mapbox access token here
mapboxgl.accessToken = 'pk.YOUR_MAPBOX_ACCESS_TOKEN';

// Log to confirm
console.log('Mapbox GL JS loaded:', mapboxgl);

// Initialize the map
const map = new mapboxgl.Map({
  container: 'map', // div id
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [-71.09415, 42.36027], // [longitude, latitude] - centered near MIT
  zoom: 12,
  minZoom: 5,
  maxZoom: 18
});
