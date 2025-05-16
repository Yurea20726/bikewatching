// Import Mapbox as ESM
import mapboxgl from 'https://cdn.jsdelivr.net/npm/mapbox-gl@2.15.0/+esm';

// ✅ 使用你提供的新 token
mapboxgl.accessToken = 'pk.eyJ1IjoiY2hsMzE4IiwiYSI6ImNtYXF0OG4zajAzbXcycW9zZ2llc3l3am0ifQ.xkL6-6l0ERjFfhGWcmz4ag';

// Console 檢查
console.log('Mapbox GL JS loaded:', mapboxgl);

// 建立地圖
const map = new mapboxgl.Map({
  container: 'map', // 要綁定的 div id
  style: 'mapbox://styles/mapbox/streets-v12', // 預設樣式
  center: [-71.09415, 42.36027], // 波士頓 Cambridge 中心點
  zoom: 12,
  minZoom: 5,
  maxZoom: 18
});
