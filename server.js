var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));

// require('./server/config/mongoose.js');

// var routes = require('./server/config/routes.js');
// routes(app);

var server = app.listen(8000, function(){
	console.log('listening on 8000')
});