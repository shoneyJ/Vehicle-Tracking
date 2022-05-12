// import { createClient } from 'redis';
// const publisher = createClient();

// (async () => {

//   const article = {
//     vehicleid: '123456',
//     lat: '1542',
//     long: '123564',
//   };

//   await publisher.connect();

//   await publisher.publish('gps', JSON.stringify(article));
// })();

const io = require("socket.io")(1000);

// var longlats =
// [[80.24586,12.98598],
// [80.24537,12.98597],
// [80.24522,12.98596],
// [80.24522,12.98614],
// [80.24523,12.98626]];

// const socket = io({ transports: ['websocket'] });
// var count = 1;
// setInterval(function() {
//   console.log(count);
//   if (count < longlats.length){
//     var item = {};
//     item.Coordinate = {};
//     item.Coordinate.Longitude = longlats[count][0];
//     item.Coordinate.Latitude = longlats[count][1];
//     count++;
//     socket.emit('lastKnownLocation', item);
//   }
// }, 5000);


io.on('connection', function (socket) {
  console.log('socket created');

//   let previousId;
//   const safeJoin = currentId => {
//       socket.leave(previousId);
//       socket.join(currentId);
//       previousId = currentId;
//     };

//   socket.on('disconnect', function() {
//     console.log('Got disconnect!');
//  });

//  socket.on('lastKnownLocation', function (data) {
//           var location = JSON.stringify(data);
//          redisPublisher.publish('locationUpdate', location);
//    });

});