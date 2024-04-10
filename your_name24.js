// Initialize Leaflet map
var map = L.map('nymap').setView([40.56068599677129, -74.14733985093602], 13); // Set center to New York City and zoom level

// Add a tile layer to the map (for example, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker to the map for New York City
var marker = L.marker([40.68965691085725, -73.96537769031497]).addTo(map);

// Add a popup to the marker
marker.bindPopup("<b>Luigi's Pizza</b><br>This is a Leaflet map.").openPopup();
