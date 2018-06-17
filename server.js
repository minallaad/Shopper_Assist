'use strict';

var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http),//.listen(server),
    //usernames format: username:socketId
    //rooms format : connection starter ID:Array of Socket ID of users in room
    //topicsassigned format: Topic name: Array of Socket ID of users
    //r2t format: Topic name : Connection Starter ID
    filledTopics = [],topics = ['Test0','Test1','Test2'],usernames = {}, topicassigned = {},topicsWUid = {},response = [],u2r = [];;

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
        socket.consent = true;
        socket.username = data;
        usernames[socket.username] = socket;
        console.log("On New user : " + Object.keys(usernames))
        Object.keys(topicsWUid).forEach(function (key) {
            var val = topicsWUid[key];
            if (val.includes(socket.username)) {
                console.log(socket.username + ' joined back to ' + key);
                topicassigned[key].push(socket);
                socket.join(key);
            }else{

            }

            //usernames.push(socket.username);
            //console.log(usernames);


        });
    });

    var producer = new kafka.Producer({
        connectionString: 'kafka://localhost:9092',
        clientId: 'no-kafka-client'
    });

    socket.on('Request',function (data,callback) {
        console.log("In Request Start : "+Object.keys(usernames));
        let temproom = data.users;
        var username = data.userName;
        var request = username +" wants to share";

        temproom.forEach(user => {
            usernames[user].emit('request-message',request,function(confirm){
            usernames[user].consent = confirm
                //console.log(usernames[user].consent);
                //console.log(response);
            });
        });


        //io.to('Temp-Room').emit('message',request);

    });


    socket.on('Room request',function (data,callback) {
        console.log("In Room request Start : "+Object.keys(usernames));
        //room = data.userName;
        let room = data.users;

        room.push(data.userName);
        console.log(room);
        let topicass = null;
        let socketArray = [];
        let nameArray = [];
        //topicassiged[topicass] = [];

        if(topics !== null || topics!==[]) {
            topicass = topics.pop();
            filledTopics.push(topicass);

            room.forEach(user => {
                // userlist.push(user);
                    if (user in usernames) {
                        console.log('Consent consent consent...');
                        if (user.consent) {

                            usernames[user].join(topicass);
                            socketArray.push(usernames[user]);
                            nameArray.push(user);
                            // topicassiged[topicass].push(usernames[user]);
                        }

                        else{
                            socket.emit('stop-sharing');
                            callback('You have no users left stop further processing here');
                        }
                    }
                    else
                    {
                        console.log('User is not Online Or Has Declined Invitation');
                        //callback('User is not Online Or Has Left');
                    }

            });

        } else {
            console.log('All Topic Filled Please try after sometime');

        }

        topicassigned[topicass] = socketArray;
        topicsWUid[topicass] = nameArray;
        //console.log(topicassigned);
        // TOPIC_NAME.push(room);
        //     shell.exec('~/Softwares/kafka_2.11-1.1.0/bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 2 --topic ' + TOPIC_NAME[TOPIC_NAME.length-1]);
        console.log("Room Job Completed");
        console.log("After Room request : ");
        console.log(topicassigned);
        console.log(filledTopics);



    });







    //alert(TOPIC_NAME);
    // app.post('/postData', function (req, res) {
    //     // res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1/*');
    //     res.send(req.body)
    // JSON.stringify
    socket.on('add-message',function (data,callback){
        console.log("In Add Message : ")
        console.log(topicassigned);
        console.log(filledTopics);
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

        //console.log(payloads);

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

        socket.on('stop-sharing', function(){


            Object.keys(topicassigned).forEach(function(key) {



                var val = topicassigned[key];
                var uidVal = topicsWUid[key];
                if(val.includes(socket)){
                    var index1 = val.indexOf(socket);
                    var index2 = uidVal.indexOf(socket.username);
                    if (index1 > -1 && index2 >-1) {
                        console.log('val before updation:'+val);
                        console.log('var before updation:'+uidVal);
                        val.splice(index1, 1);
                        uidVal.splice(index2, 1);
                        console.log('val after updation:'+val);
                        if(val === undefined || !val.length){
                            console.log('In delete of topicassigned');
                            delete topicassigned[key];
                            if(filledTopics.includes(key)) {
                                var ind = filledTopics.indexOf(key);
                                if (ind > -1) {
                                    filledTopics.splice(ind, 1);
                                    topics.push(key);
                                }
                            }
                        }else {
                            topicassigned[key] = val;
                        }

                        if(uidVal === undefined || !uidVal.length){
                            console.log('In delete of topicsWUID');
                            delete topicsWUid[key];
                            if(filledTopics.includes(key)) {
                                var ind = filledTopics.indexOf(key);
                                if (ind > -1) {
                                    filledTopics.splice(ind, 1);
                                    topics.push(key);
                                }
                            }
                        }else {
                            topicsWUid[key] = uidVal;
                        }
                    }
                }






                //}


            });


        });





    socket.on('disconnect', function(){
        console.log('DISCONNECT');



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





