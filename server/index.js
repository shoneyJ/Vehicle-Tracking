var io = require('socket.io-client');

var longlats =[{
  startLocation:[49.411168813231946, 8.692504566634016],
  endLocation:[49.41690506946291, 8.691855129372094],
  speed:30}]

const socket = io('ws://localhost:3000');
var count = 1;
setInterval(function() {
 
  if (count < longlats.length){
    var item = {};
    item.Coordinate = {};
    item.Coordinate.Longitude = longlats[count][0];
    item.Coordinate.Latitude = longlats[count][1];
    count++;
    //updateCoordinate(item);
    socket.emit('lastKnownLocation', item);
  }
}, 5000);

