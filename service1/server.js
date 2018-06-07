'use strict';

var express = require('express');
var kafka = require('no-kafka');
var app = express();
const cors = require('cors');
var shell = require('shelljs');


let http = require('http').Server(app);
// let http = require('http').Server(app);
let io = require('socket.io')(http);

const TOPIC_NAME = "Test";
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
    origin: 'http://localhost:4200',
    credentials: true
}));

//Producer
    var producer = new kafka.Producer({
        connectionString: 'kafka://localhost:9092',
        clientId: 'no-kafka-client'
    });

app.post('/postData', function (req, res) {
    // res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1/*');
    res.send(req.body)
    console.log(req.body);
    var message = req.body;
    var payloads =
        {
            topic: TOPIC_NAME,
            partition: 0,
            message: {
                key:SERVER_NAME,
                value:message
            }
        }

    return producer.init().then(function(){
        return producer.send(payloads);
    })
        .then(function (result) {
            /*
            [ { topic: 'kafka-test-topic', partition: 0, offset: 353 } ]
            */
        });
    // producer.send(payloads);
})
//Producer Input segment

// var stdin = process.openStdin();
//
// stdin.addListener("data", function(d) {
//
//
//     var message =  "Server "+SERVER_NAME+":- "+d.toString().trim();
//
//     // var km = new KeyedMessage(SERVER_NAME, messsage);
//     var payloads =
//                 {
//                     topic: TOPIC_NAME,
//                         partition: 0,
//                         message: {
//                             key:SERVER_NAME,
//                             value:message
//                         }
//                     }
//
//     return producer.init().then(function(){
//         return producer.send(payloads);
//     })
//         .then(function (result) {
//             /*
//             [ { topic: 'kafka-test-topic', partition: 0, offset: 353 } ]
//             */
//         });
//     // producer.send(payloads);
//
// });



//Socket Connection Initialize

io.sockets.on("connection",function(socket) {
    console.log(PORT_NUMBER + " Connected")

    socket.on('disconnect', function(){
        console.log(PORT_NUMBER + " Disconnected");
    });


});

//Consumer Message Adding System

http.listen(PORT_NUMBER,() =>{
    console.log('started on port '+PORT_NUMBER);
    var kafka = require('no-kafka'),
        Consumer = kafka.SimpleConsumer,
        // client = new kafka.Client(),
        consumer = new Consumer({
            connectionString: 'kafka://localhost:9092',
            clientId: 'no-kafka-client'
        });

    var dataHandler = function (messageSet, topic) {
        messageSet.forEach(function (m) {
            console.log(topic, m.offset, m.message.value.toString('utf8'));
            io.emit('message', m.message.value.toString('utf8'));
        });
    };
    return consumer.init().then(function () {
        // Subscribe partitons 0 and 1 in a topic:
        var v1= consumer.subscribe(TOPIC_NAME, 0, dataHandler);
        // var v2= consumer.subscribe('Sample', [0, 1], dataHandler);
        var arr=[];
        arr.push([v1]);
        console.log("val:"+arr);
        return arr;

    });


});
