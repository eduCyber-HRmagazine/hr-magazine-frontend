// Initialize the map centered on Cairo, Egypt
var map = L.map("map").setView([30.0444, 31.2357], 13);

// Add a tile layer
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 25,
}).addTo(map);


// var marker = L.marker([30.0444, 31.2357]).addTo(map);


//Define a custom icon with the desired color
var redIcon = L.icon({
    iconUrl: '../assets/images/location-icon-darkred.svg', // Replace with the path to your SVG icon
    iconSize: [40, 40], // Set the icon size
    iconAnchor:   [25, 40], // point of the icon which will correspond to marker's location
    popupAnchor:  [-9, -30] // point from which the popup should open relative to the iconAnchor
})

//Add a marker to Cairo, Egypt with the custom icon
var marker = L.marker([30.0444, 31.2357], {icon: redIcon}).addTo(map);


//// Add a popup to the marker
marker.bindPopup("<b>Welcome to Cairo, Egypt!</b><br>This is a beautiful city.").openPopup();


