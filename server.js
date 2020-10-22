'use strict';

var express = require('express')
var app = express()

app.use('/public', express.static(process.cwd() + '/public'));
app.use('/app', express.static(process.cwd() + '/app'));
app.use(express.static(process.cwd() + '/public'))

app.listen(8080, function(){console.log("Server listening on port 8080")});