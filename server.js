var express = require('express');
var path = require('path');


// Routes
var routers = require('./_api/index');

var app = express();
	
	app.use(express.static(__dirname + '/_public'));
	
	app.use('/api', routers);

var server = app.listen(3000, function() {
  console.log('Server start');
});