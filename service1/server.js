'use strict';

var express = require('express');
var kafka = require('kafka-node');
var app = express();
// let http = require('http').Server(app);
// let io = require('socket.io')(http);

const TOPIC_NAME = "Test";
const SERVER_NAME = "A";
const PORT_NUMBER = 8092;

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

// io.on('connection',(socket)=>{
//     console.log('User  A Connected');
//     socket.on('disconnect',function(){
//         console.log('User A disconnected');
//     });
// });

var Producer = kafka.Producer,
    client = new kafka.Client(),
    producer = new Producer(client);

producer.on('ready', function () {
    console.log('Producer is ready');
});

producer.on('error', function (err) {
    console.log('Producer is in error state');
    console.log(err);
})





var payloads;
var KeyedMessage = kafka.KeyedMessage ;
var stdin = process.openStdin();

stdin.addListener("data", function(d) {


    var messsage =  "Server "+SERVER_NAME+":- "+d.toString().trim();

    var km = new KeyedMessage(SERVER_NAME, messsage);
    payloads = [
                {topic: TOPIC_NAME, messages: km, partition: 0}
                ];
    producer.send(payloads, function (err, data) {
                // console.log(data);
            });

});

var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.Client(),
    consumer = new Consumer(client,
        [{ topic: TOPIC_NAME, offset: 0, partition:0}],
        {
            autoCommit: false
        }
    );






console.log("Server Running At:localhost:"+PORT_NUMBER);
var io = require('socket.io').listen(app.listen(PORT_NUMBER));

io.sockets.on("connection",function(socket) {
    console.log(PORT_NUMBER + " Connected")


    consumer.on('message', function (message) {
        io.sockets.emit(message.value);
        console.log(message.value);

        // io.emit('message',message.value);

    });

});






consumer.on('error', function (err) {
    console.log('Error:', err);
})

consumer.on('offsetOutOfRange', function (err) {
    console.log('offsetOutOfRange:', err);
})


