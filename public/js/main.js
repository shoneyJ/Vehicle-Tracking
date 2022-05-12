
  var baseMapLayer = new ol.layer.Tile({
    source: new ol.source.OSM()
  });
  //Construct the Map Object
  var map = new ol.Map({
    target: 'map',
    layers: [ baseMapLayer],
    view: new ol.View({
            center: ol.proj.fromLonLat([8.650953238482463,49.41391368555925]),
            zoom: 15 //Initial Zoom Level
          })
  });
  //Set up an  Style for the marker note the image used for marker
  var iconStyle = new ol.style.Style({
      image: new ol.style.Icon(/** @type {module:ol/style/Icon~Options} */ ({
        anchor: [0.5, 16],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: 'image/icon.png',
        size: [50, 50],
      }))
  });
  //Adding a marker on the map
  var marker = new ol.Feature({
    geometry: new ol.geom.Point(
      ol.proj.fromLonLat([8.650953238482463,49.41391368555925])
    )
  });
  marker.setStyle(iconStyle);
  var vectorSource = new ol.source.Vector({
    features: [marker]
  });
  var markerVectorLayer = new ol.layer.Vector({
    source: vectorSource,
  });
  // add style to Vector layer style map
  map.addLayer(markerVectorLayer);
  
  
  var updateCoordinate=function (corsd) { 
      // Structure of the input Item
      // {"Coordinate":{"Longitude":80.2244,"Latitude":12.97784}}    
      var featureToUpdate = marker;
      var coord = ol.proj.fromLonLat([item.Coordinate.Longitude, item.Coordinate.Latitude]);
      featureToUpdate.getGeometry().setCoordinates(coord);
  }

  var updateCoordinatenew=function (item) { 
    // Structure of the input Item
    // {"Coordinate":{"Longitude":80.2244,"Latitude":12.97784}}    
    var featureToUpdate = marker;
    var coord = ol.proj.fromLonLat([item.Coordinate.Longitude, item.Coordinate.Latitude]);
    featureToUpdate.getGeometry().setCoordinates(coord);
}
  // var io = require('socket.io').listen(3000);
  // io.on('connection', function (socket) {
  //   console.log('socket created');
  // });

fetch('/loc').then(response => response.json()).then(data => {
  console.log(data);
  var index = 0;
setInterval(function() {
  if(index<data.length){
  console.log(index);
  updateCoordinatenew(data[index]);
  index++;
  }
  },5000);
});

// define(function (require, exports, module) {

//   module.exports = {
//     changeLocation: myMap.updateCord,  
//   };

// });


// var longlats =
// [[80.24586,12.98598],
// [80.24537,12.98597],
// [80.24522,12.98596],
// [80.24522,12.98614],
// [80.24523,12.98626]];
// var count = 1;
// var item = {};
// item.id = marker.getId;
// item.Coordinate = {};
// setInterval(function() {
//   if (count < longlats.length){
//   item.Coordinate.Longitude = longlats[count][0];
//   item.Coordinate.Latitude = longlats[count][1];
//   count++;
//   updateCoordinate(item);
//   }
// }, 5000);
