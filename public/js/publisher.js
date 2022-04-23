var longlats =
[[80.24586,12.98598],
[80.24537,12.98597],
[80.24522,12.98596],
[80.24522,12.98614],
[80.24523,12.98626]];
const socket = io({ transports: ['websocket'] });
var count = 1;
setInterval(function() {
  console.log(count);
  if (count < 10000){
    var item = {};
    item.Coordinate = {};
    item.Coordinate.Longitude = longlats[count][0];
    item.Coordinate.Latitude = longlats[count][1];
    count++;
    socket.emit('lastKnownLocation', item);
  }
}, 5000);



var redis = require('redis');
var redisSubscriber = redis.createClient();
var redisPublisher = redis.createClient();
redisSubscriber.on('subscribe', function (channel, count) {
        console.log('client subscribed to ' + channel + ', ' + count + ' total subscriptions');
});
redisSubscriber.on('message', function (channel, message) {
    console.log('client channel ' + channel + ': ' + message);
    io.emit('locationUpdate', message);
});