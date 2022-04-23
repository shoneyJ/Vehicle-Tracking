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
var port = process.env.PORT || 3000;
// Start the Server
http.listen(port, function () {
    console.log('Server Started. Listening on *:' + port);
});
// Express Middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
// Render Main HTML file
app.get('/', function (req, res) {
    res.sendFile('view/index.html', {
        root: __dirname
    });
});

//Serve a Publisher HTML
app.get('/publish', function (req, res) {
    res.sendFile('view/publisher.html', {
        root: __dirname
    });
});

