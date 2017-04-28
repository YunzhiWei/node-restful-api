// Dependencies
var express = require('express');

// Routes
var router = express.Router();

// Model
var Product = require('../models/product');
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');

var User = require('../models/user');
User.methods(['get', 'post']);
User.register(router, '/users');

// Return router
module.exports = router;
