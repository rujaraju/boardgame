'use strict';

var express = require('express')
var app = express()
var http = require('http')
var port = process.env.PORT || 8080
var WebSocket = require('ws')

app.use('/public', express.static(process.cwd() + '/public'));
app.use('/app', express.static(process.cwd() + '/app'));
app.use(express.static(process.cwd() + '/public'))

const server = http.createServer(app)

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log("anything")
    //connection is up, let's add a simple simple event
    ws.on('message', (message) => {

        //log the received message and send it back to the client
        console.log('received: %s', message);
        ws.send(`Hello, you sent -> ${message}`);
    });

    //send immediatly a feedback to the incoming connection    
    ws.send('Hi there, I am a WebSocket server');
});

server.listen(port, function(){console.log("Server listening on port 8080")});