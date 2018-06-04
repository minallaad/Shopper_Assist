'use strict';

var express = require('express');
var kafka = require('kafka-node');
var app = express();

const TOPIC_NAME = "Test";
const SERVER_NAME = "B";
const PORT_NUMBER = 8091;

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

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



app.listen(PORT_NUMBER,function(){
    console.log('Kafka producer running at: '+PORT_NUMBER);
    console.log(SERVER_NAME);
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




consumer.on('message', function (message) {
    console.log(message.value);
});

consumer.on('error', function (err) {
    console.log('Error:', err);
})

consumer.on('offsetOutOfRange', function (err) {
    console.log('offsetOutOfRange:', err);
})


