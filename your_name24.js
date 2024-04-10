// Initialize Leaflet map
var map = L.map('nymap').setView([40.681801312931455, -73.9571896025164], 13); // Set center to New York City and zoom level

// Add a tile layer to the map (for example, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker to the map for New York City
var marker = L.marker([40.56068599677129, -74.14733985093602]).addTo(map);

// Add a popup to the marker
marker.bindPopup(Great Kills Little League).openPopup();
