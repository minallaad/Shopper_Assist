'use strict';

var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http),//.listen(server),
    //usernames format: username:socketId
    //rooms format : connection starter ID:Array of users in room
    usernames = {}, rooms = {};

var room;
var kafka = require('no-kafka');
const cors = require('cors');
var shell = require('shelljs');
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// let http = require('http').Server(app);
// let http = require('http').Server(app);
//let io = require('socket.io')(http);

var TOPIC_NAME = "Test";
var arr = [];
const SERVER_NAME = "A";
const PORT_NUMBER = 8092;


//Command to create topic

shell.exec('/home/minal/Downloads/kafka_2.11-1.1.0/bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 2 --topic ' + TOPIC_NAME);

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use(cors({
    // origin: 'http://*',
    credentials: true,
    origin: true
}));

//Socket Connection Initialize

io.sockets.on("connection",function(socket) {
    console.log("New Connection");

    socket.on('new user',function (data,callback) {
        socket.username = data;
        usernames[socket.username] = socket;
        //usernames.push(socket.username);
        //console.log(usernames);
        console.log(Object.keys(usernames));

    });

    socket.on('Room request',function (data,callback) {
        room = data.userName;
    data.users.forEach(user => {
        // userlist.push(user);
        if(user in usernames){
            usernames[user].join(data.userName.toString())

        }else {
            console.log('User is not Online Or Has Left');
            callback('User is not Online Or Has Left');
        }
    });
    var TOPIC_NAME = room;
        shell.exec('/home/minal/Downloads/kafka_2.11-1.1.0/bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 2 --topic ' + TOPIC_NAME);
    // console.log("Room");
    //     console.log(data);


        var producer = new kafka.Producer({
            connectionString: 'kafka://localhost:9092',
            clientId: 'no-kafka-client'
        });



        app.post('/postData', function (req, res) {
            // res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1/*');
            res.send(req.body)
            JSON.stringify
            var message = JSON.stringify(req.body);
            var payloads =
                {
                    topic: TOPIC_NAME,
                    partition: 0,
                    message: {
                        key: SERVER_NAME,
                        value: message
                    }
                }

                console.log(payloads);

            return producer.init().then(function () {
                return producer.send(payloads);
            })
                .then(function (result) {
                    /*
                    [ { topic: 'kafka-test-topic', partition: 0, offset: 353 } ]
                    */
                });
            // producer.send(payloads);
        });


        // var dataHandler = function (messageSet, topic) {
        //     messageSet.forEach(function (m) {
        //         console.log(topic, m.offset, m.message.value.toString('utf8'));
        //         //insert room io-emit logic here
        //         io.to(room).emit('message', m.message.value.toString('utf8'));
        //     });
        // };
        //
        // function topicSet() {
        //     var v1 = consumer.subscribe(TOPIC_NAME, 0, dataHandler);
        //     // var  consumer.subscribe('Sample', [0, 1], dataHandler);
        //     // var arr = []; //Creat function inside socket
        //     arr.push([v1]);
        //
        //     // return arr;
        // }



        
    });



    // var kafka = require('no-kafka'),
    //     Consumer = kafka.SimpleConsumer,
    //     // client = new kafka.Client(),
    //     consumer = new Consumer({
    //         connectionString: 'kafka://localhost:9092',
    //         clientId: 'no-kafka-client'
    //     });//Also inside socket
    //
    // var dataHandler = function (messageSet, topic) {
    //     messageSet.forEach(function (m) {
    //         console.log(topic, m.offset, m.message.value.toString('utf8'));
    //         //insert room io-emit logic here
    //         io.to(room).emit('message', m.message.value.toString('utf8'));
    //     });
    // };//Also in same function
    // return consumer.init().then(function () {
    //     // Subscribe partitons 0 and 1 in a topic:
    //     //Insert topic array loop and push logic here
    //     return consumer.subscribe(TOPIC_NAME, 0, dataHandler);


    http.listen(PORT_NUMBER, () => {
        console.log('started on port ' + PORT_NUMBER);
        var kafka = require('no-kafka'),
            Consumer = kafka.SimpleConsumer,
            // client = new kafka.Client(),
            consumer = new Consumer({
                connectionString: 'kafka://localhost:9092',
                clientId: 'no-kafka-client'
            });//Also inside socket

        var dataHandler = function (messageSet, topic) {
            messageSet.forEach(function (m) {
                console.log(topic, m.offset, m.message.value.toString('utf8'));
                //insert room io-emit logic here
                io.to(room).emit('message', m.message.value.toString('utf8'));
            });
        };//Also in same function
        return consumer.init().then(function () {
            // Subscribe partitons 0 and 1 in a topic:
            //Insert topic array loop and push logic here
            var v1 = consumer.subscribe(TOPIC_NAME, 0, dataHandler);
            // var v2= consumer.subscribe('Sample', [0, 1], dataHandler);
            var arr = []; //Creat function inside socket
            arr.push([v1]);//Get array and return
            // var arr = ();
            console.log("val:" + arr);
            return arr;

        });


    });



    socket.on('disconnect', function(){
        console.log(PORT_NUMBER + " Disconnected");
    });


});








//Producer
// var producer = new kafka.Producer({
//     connectionString: 'kafka://localhost:9092',
//     clientId: 'no-kafka-client'
// });
//
// // function postToTopicList() {
//     app.post('/postData', function (req, res) {
//         // res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1/*');
//         res.send(req.body)
//         JSON.stringify
//         var message = JSON.stringify(req.body);
//         var payloads =
//             {
//                 topic: TOPIC_NAME,
//                 partition: 0,
//                 message: {
//                     key: SERVER_NAME,
//                     value: message
//                 }
//             }
//
//         return producer.init().then(function () {
//             return producer.send(payloads);
//         })
//             .then(function (result) {
//                 /*
//                 [ { topic: 'kafka-test-topic', partition: 0, offset: 353 } ]
//                 */
//             });
//         // producer.send(payloads);
//     });
// }


function postToTopicMessages() {
    app.post('/postMessage', function (req, res) {
        // res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1/*');
        res.send(req.body)

        var message = req.body;
        var payloads =
            {
                topic: TOPIC_NAME,
                partition: 0,
                message: {
                    key: SERVER_NAME,
                    value: message.toString('utf8')
                }
            }

        return producer.init().then(function () {
            return producer.send(payloads);
        })
            .then(function (result) {
                /*
                [ { topic: 'kafka-test-topic', partition: 0, offset: 353 } ]
                */
            });
        // producer.send(payloads);
    });
}

//Consumer Message Adding System

// function getTopicList () {
//     http.listen(PORT_NUMBER, () => {
//         console.log('started on port ' + PORT_NUMBER);
//         var kafka = require('no-kafka'),
//             Consumer = kafka.SimpleConsumer,
//             // client = new kafka.Client(),
//             consumer = new Consumer({
//                 connectionString: 'kafka://localhost:9092',
//                 clientId: 'no-kafka-client'
//             });//Also inside socket
//
//         var dataHandler = function (messageSet, topic) {
//             messageSet.forEach(function (m) {
//                 console.log(topic, m.offset, m.message.value.toString('utf8'));
//                 //insert room io-emit logic here
//                 io.to(room).emit('message', m.message.value.toString('utf8'));
//             });
//         };//Also in same function
//         return consumer.init().then(function () {
//             // Subscribe partitons 0 and 1 in a topic:
//             //Insert topic array loop and push logic here
//             var v1 = consumer.subscribe(TOPIC_NAME, 0, dataHandler);
//             // var v2= consumer.subscribe('Sample', [0, 1], dataHandler);
//             var arr = []; //Creat function inside socket
//             arr.push([v1]);//Get array and return
//             var arr = ();
//             console.log("val:" + arr);
//             return arr;
//
//         });
//
//
//     });

// }