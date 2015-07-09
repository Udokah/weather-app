'use strict';

var express = require('express');
var app = express();
var config = { 'port': process.env.PORT || 1914 };

// Public files
app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile('./public/index.html');
});

var server = app.listen(config.port, function(){
  console.log('...the mistake of ' + config.port);
});