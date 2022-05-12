// // const redisClient = require('redis').createClient();
// import { createClient } from 'redis';

// (async () => {
//   const client = createClient();

//   client.on('error', (err) => console.log('Redis Client Error', err));

//   await client.connect();

//   await client.set('key', 'value');
//   const value = await client.get('key');
//   console.log(value);
// })();


// import { MongoClient } from "mongodb";
// // Connection URI
// const uri =
//   "mongodb://localhost:27017/?maxPoolSize=20&w=majority";
// // Create a new MongoClient
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     // Connect the client to the server
//     await client.connect();
//     // Establish and verify connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Connected successfully to server");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);



var express =require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);

var io = require('socket.io')(http);
var port = process.env.PORT || 1000;
var redis = require('redis');
// const { mympa  } = require('./public/js/main');

// let {updateCoordinate} =  import('./public/js/main.js');
// Start the Server
http.listen(port, function () {
    console.log('Server Started. Listening on *:' + port);
});
// Express Middleware
app.use(express.static('public'));
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

var redisClient = redis.createClient();
var redisPublisher = redis.createClient();

app.get('/loc', async (req, res) => {
    await redisClient.connect();
    const posStack = [];
    let len = 0;
    const response = await redisClient.keys('*');    
    len = response.length;
    for (let x = 0; x < response.length; x++) {
        const position = JSON.parse(await redisClient.get(response[x]));

        posStack.push(position);
        console.log(posStack);
    }
    res.json(posStack);
    redisClient.disconnect();
})

// redisSubscriber.on('subscribe', function (channel, count) {
//         console.log('client subscribed to ' + channel + ', ' + count + ' total subscriptions');
// });

// redisSubscriber.on('message', function (channel, message) {
//     console.log('client channel ' + channel + ': ' + message);
//     io.emit('locationUpdate', message);
// });

// io.on('connection', function (socket) {
//     console.log('socket created');
  
//     let previousId;
//     const safeJoin = currentId => {
//         socket.leave(previousId);
//         socket.join(currentId);
//         previousId = currentId;
//       };
  
//     socket.on('disconnect', function() {
//       console.log('Got disconnect!');
//    });
  
//    socket.on('lastKnownLocation', function (data) {
//             var location = JSON.stringify(data);
//             console.log("inside  function ",location); 
//             // publish(location);

//      });
  
//   });

// async function publish (data){
//     await redisPublisher.connect().catch(error => {});
//     await redisPublisher.publish('locationUpdate', data); 
// }

// async function subscribe(){
//     await redisSubscriber.connect().catch(error => {});

//     await redisSubscriber.subscribe('locationUpdate',(cordinate)=>{
//         console.log("subscribes data ",cordinate);
//         // updateCoordinate(JSON.parse(cordinate));
//     });

// }
  // Render Main HTML file
// app.get('/', async function (req, res) {
   
//    subscribe();
//     res.sendFile('view/index.html', {
//         root: __dirname
//     });
// });

//Serve a Publisher HTML
// app.get('/publish', function (req, res) {
//     res.sendFile('view/publisher.html', {
//         root: __dirname
//     });
// });
