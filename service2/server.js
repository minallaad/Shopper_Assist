'use strict';

var express = require('express');
var kafka = require('kafka-node');
var Translate = require('@google-cloud/translate');
var app = express();



const projectId = 'boxwood-bliss-199003';

const translate = new Translate({
    projectId: projectId,
});

const target = 'mr';

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


// app.get('/',function(req,res){
//     res.json({greeting:'Kafka Producer'})
// });

app.listen(8091,function(){
    console.log('Kafka producer running at 8091')
    console.log('Server-B');
})

var payloads;
var i = 0;


// function requestFunc() {
//     request('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=IZE8AOULCZXCVHZ5', function (error, response, body) {
//         if (!error && response.statusCode == 200) {
//             var info = JSON.parse(body["Meta Data"])
//         }
//         // console.log(info);
//         var time = JSON.stringify(info);
//         console.log(time);
//         payloads = [
//             {topic: 'Sample', messages: time, partition: 0}
//         ];
//         producer.send(payloads, function (err, data) {
//             // console.log(data);
//         });
//
//     })
// }
//
// setInterval(requestFunc,11000);


var stdin = process.openStdin();

stdin.addListener("data", function(d) {

    var messsage =  d.toString().trim();

    translate
        .translate(messsage, target)
        .then(results => {
            var translation = results[0];
            payloads = [
                {topic: 'Sample', messages: translation, partition: 1}
            ];
            producer.send(payloads, function (err, data) {
                // console.log(data);
            });

        })
        .catch(err => {
            console.error('ERROR:', err);
        });



});

var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.Client(),
    consumer = new Consumer(client,
        [{ topic: 'Sample', offset: 0 , partition:0}],
        {
            autoCommit: false
        }
    );



consumer.on('message', function (message) {
    console.log("Server A:-  "+message.value);
});

consumer.on('error', function (err) {
    console.log('Error:', err);
})

consumer.on('offsetOutOfRange', function (err) {
    console.log('offsetOutOfRange:', err);
})


