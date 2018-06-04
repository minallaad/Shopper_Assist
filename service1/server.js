'use strict';

var express = require('express');
var kafka = require('kafka-node');
var Translate = require('@google-cloud/translate');
// const Storage = require('@google-cloud/storage');
var app = express();
// const Storage = require('@google-cloud/storage');

// Instantiates a client. Explicitly use service account credentials by
// specifying the private key file. All clients in google-cloud-node have this
// helper, see https://github.com/GoogleCloudPlatform/google-cloud-node/blob/master/docs/authentication.md
// const storage = new Storage({
//     keyFilename: '/home/abhinab/WebstormProjects/stock_chart/translate.json'
// });
//
// // Makes an authenticated API request.
// storage
//     .getBuckets()
//     .then((results) => {
//         const buckets = results[0];
//
//         console.log('Buckets:');
//         buckets.forEach((bucket) => {
//             console.log(bucket.name);
//         });
//     })
//     .catch((err) => {
//         console.error('ERROR:', err);
//     });

// const storage = new Storage();
//
// // Makes an authenticated API request.
// storage
//     .getBuckets()
//     .then((results) => {
//         const buckets = results[0];
//
//         console.log('Buckets:');
//         buckets.forEach((bucket) => {
//             console.log(bucket.name);
//         });
//     })
//     .catch((err) => {
//         console.error('ERROR:', err);
//     });

const projectId = 'boxwood-bliss-199003';

const translate = new Translate({
    projectId: projectId,
});


// The text to translate
// const text = 'Hello, world!';
// The target language
const target = 'mr';


// Translates some text into Russian
// translate
//     .translate(text, target)
//     .then(results => {
//         const translation = results[0];
//
//         console.log(`Text: ${text}`);
//         console.log(`Translation: ${translation}`);
//     })
//     .catch(err => {
//         console.error('ERROR:', err);
//     });




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



app.listen(8092,function(){
    console.log('Kafka producer running at 8092')
    console.log('Server-A');
})

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
var payloads;

//var KeyedMessage = kafka.KeyedMessage ;
var stdin = process.openStdin();

stdin.addListener("data", function(d) {


    var messsage =  d.toString().trim();
    // var translation = messsage;

    translate
        .translate(messsage, target)
        .then(results => {
            var translation = results[0];

            // var km = new KeyedMessage('A', messsage);
            payloads = [
                {topic: 'Sample', messages: translation, partition: 0}
            ];
            producer.send(payloads, function (err, data) {
                // console.log(data);
            });
        })
        .catch(err => {
            console.error('ERROR:', err);
        });
    //messsage = translation;

    // var transmess = translation.toString();
});

var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.Client(),
    consumer = new Consumer(client,
        [{ topic: 'Sample', offset: 0, partition:1}],
        {
            autoCommit: false
        }
    );




consumer.on('message', function (message) {
    console.log("Server B:-  "+message.value);
});

consumer.on('error', function (err) {
    console.log('Error:', err);
})

consumer.on('offsetOutOfRange', function (err) {
    console.log('offsetOutOfRange:', err);
})


