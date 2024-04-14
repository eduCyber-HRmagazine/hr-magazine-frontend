// Initialize the map centered on Cairo, Egypt
var map = L.map("map").setView([30.0444, 31.2357], 13);

// Add a tile layer
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 25,
}).addTo(map);


var marker = L.marker([30.0444, 31.2357]).addTo(map);


// //Define a custom icon with the desired color
// var customIcon = L.icon({
//     iconUrl: '../images/location-icon-black.svg', // Replace with the path to your SVG icon
//     iconSize: [80, 80], // Set the icon size
// });

// //Add a marker to Cairo, Egypt with the custom icon
// var marker = L.marker([30.0444, 31.2357], { icon: customIcon }).addTo(map);

// Add a popup to the marker
marker.bindPopup("<b>Welcome to Cairo, Egypt!</b><br>This is a beautiful city.").openPopup();


