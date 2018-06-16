'use strict';

var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http),//.listen(server),
    //usernames format: username:socketId
    //rooms format : connection starter ID:Array of Socket ID of users in room
    //topicsassigned format: Topic name: Array of Socket ID of users
    //r2t format: Topic name : Connection Starter ID
    filledTopics = [],topics = ['Test0','Test1','Test2'],usernames = {}, topicassigned = {};

let TOTAL_TOPICS = ['Test0','Test1','Test2'];
var room;
var kafka = require('no-kafka');
const cors = require('cors');
var shell = require('shelljs');
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// let http = require('http').Server(app);
// let http = require('http').Server(app);
//let io = require('socket.io')(http);


// const SERVER_NAME = "A";
const PORT_NUMBER = 8092;


//Command to create topic



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
TOTAL_TOPICS.forEach(topic => {
    shell.exec('~/Softwares/kafka_2.11-1.1.0/bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 2 --topic ' + topic);
});


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
        //room = data.userName;
        let room = data.users;
        room.push(data.userName);
        console.log(room);
        let topicass = null;
        let socketArray = [];
        //topicassiged[topicass] = [];
    room.forEach(user => {
        // userlist.push(user);
        if(topics !== null || topics!==[]) {
            topicass = topics.pop();
            if (user in usernames) {
                usernames[user].join(topicass);
                filledTopics.push(topicass);
                socketArray.push(usernames[user]);
                // topicassiged[topicass].push(usernames[user]);
            }
            else
                {
                    console.log('All Topics Filled');
                }


            } else {
                console.log('User is not Online Or Has Left');
                callback('User is not Online Or Has Left');
            }


    });
        topicassigned[topicass] = socketArray;
        //console.log(topicassigned);
    // TOPIC_NAME.push(room);
    //     shell.exec('~/Softwares/kafka_2.11-1.1.0/bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 2 --topic ' + TOPIC_NAME[TOPIC_NAME.length-1]);
    console.log("Room Job Completed");
        console.log(data);



    });


    var producer = new kafka.Producer({
        connectionString: 'kafka://localhost:9092',
        clientId: 'no-kafka-client'
    });




    //alert(TOPIC_NAME);
            // app.post('/postData', function (req, res) {
            //     // res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1/*');
            //     res.send(req.body)
                // JSON.stringify
            socket.on('add-message',function (data,callback){
                let TOPIC_NAME = null;
                Object.keys(topicassigned).forEach(function(key) {
                    var val = topicassigned[key];
                    if (val.includes(socket)) {
                        // console.log(topicassigned);
                        // console.log(key);
                        TOPIC_NAME = key;
                    }
                    else {
                        console.log('Sorry Some Error has occured');
                    }
                    //return TOPIC_NAME
                });
                console.log(TOPIC_NAME);
                var message = JSON.stringify(data);
                console.log(message);
                var payloads =
                    {
                        topic: TOPIC_NAME,
                        partition: 0,
                        message: {
                            //key: SERVER_NAME,
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











    socket.on('disconnect', function(){
        console.log('DISCONNECT');
        Object.keys(topicassigned).forEach(function(key) {
            var val = topicassigned[key];
            if(val.includes(socket)){
                var index = val.indexOf(socket);
                if (index > -1) {
                    console.log('val before updation:'+val);
                    val.splice(index, 1);
                    console.log('val after updation:'+val);
                    if(val === undefined || !val.length){
                        console.log('In delete');
                        delete topicassigned[key];
                    }else {
                        topicassigned[key] = val;
                    }
                }
            }



                if(filledTopics.includes(key)) {
                    var ind = filledTopics.indexOf(key);
                    if (ind > -1) {
                        filledTopics.splice(index, 1);
                        topics.push(key);
                    }
                }


            //}


        });





        // Object.keys(rooms).forEach(function(key) {
        //     var users = rooms[key];
        //     if(users.includes(socket.username)){
        //         var index = users.indexOf(socket);
        //         if (index > -1) {
        //             users.splice(index, 1);
        //             rooms[key] = users;
        //         }
        //     }
        // });



        if(!socket.username) return;
        delete usernames[socket.username];
        console.log(filledTopics);
        console.log(topics);
        console.log(usernames);
        console.log(topicassigned);

    });
});
// var producer = new kafka.Producer({
//     connectionString: 'kafka://localhost:9092',
//     clientId: 'no-kafka-client'
// });
//
// app.post('/postData', function (req, res) {
//     // res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1/*');
//     res.send(req.body)
//     JSON.stringify
//     var message = JSON.stringify(req.body);
//     var payloads =
//         {
//             topic: TOPIC_NAME[TOPIC_NAME.length-1],
//             partition: 0,
//             message: {
//                 key: SERVER_NAME,
//                 value: message
//             }
//         }
//
//     console.log(payloads);
//
//     return producer.init().then(function () {
//         return producer.send(payloads);
//     })
//         .then(function (result) {
//             /*
//             [ { topic: 'kafka-test-topic', partition: 0, offset: 353 } ]
//             */
//         });
//     // producer.send(payloads);
// });



http.listen(PORT_NUMBER, () => {
    console.log('started on port ' + PORT_NUMBER);

    var kafka = require('no-kafka'),
        Consumer = kafka.SimpleConsumer,
        // client = new kafka.Client(),
        consumer = new Consumer({
            connectionString: 'kafka://localhost:9092',
            clientId: 'no-kafka-client'
        });

    var dataHandler = function (messageSet, tp) {
        messageSet.forEach(function (m) {
            console.log(usernames);
            console.log(tp, m.offset, m.message.value.toString('utf8'));

            io.to(tp).emit('message', m.message.value.toString('utf8'));
        });
    };//Also in same function
    return consumer.init().then(function () {
        // Subscribe partitons 0 and 1 in a topic:
        //console.log(TOPIC_NAME)
        var arr = [];
        TOTAL_TOPICS.forEach(topic => {
            var v1 = consumer.subscribe(topic, 0, dataHandler);
            // var v2= consumer.subscribe('Sample', [0, 1], dataHandler);

            arr.push([v1]);
        })


    console.log("val:" + arr);
    return arr;




    });


});





