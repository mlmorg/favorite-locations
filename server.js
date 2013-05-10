var express = require('express');
var mongoose = require('mongoose');

// Create express app
var app = express();

// Load environment configuration
var config = require('./config/' + app.get('env'));
config.root = __dirname + '/';

// Load DB
mongoose.connect(process.env.MONGOHQ_URL || config.db);

// Load express configuration
require('./config/express')(app, config);

// Load the routes
require('./config/routes')(app, config);

// Start the app
var port = process.env.PORT || config.port || 3000;
app.listen(port);
console.log('Listening on port ' + port);

exports = module.exports = app;
