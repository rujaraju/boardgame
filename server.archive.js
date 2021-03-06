'use strict';

var express = require('express')
var app = express()
var http = require('http')
var port = process.env.PORT || 8080;

app.use('/public', express.static(process.cwd() + '/public'));
app.use('/app', express.static(process.cwd() + '/app'));
app.use(express.static(process.cwd() + '/public'))

const server = http.createServer(app)

server.listen(port, function(){console.log("Server listening on port 8080")});