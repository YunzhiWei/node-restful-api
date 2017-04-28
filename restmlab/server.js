// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParse = require('body-parser');

// MongoDB
// http://localhost:3000/api/spots?limit=2
mongoose.connect('mongodb://resortplace:cncn@ds133418.mlab.com:33418/resortplace');

// Express
var app = express();
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());

// Routes
app.use('/api', require('./routes/api'));

// Start server
app.listen(3000);
console.log('API is running on port 3000');
