// Dependencies
var express = require('express');

// Routes
var router = express.Router();

// Model
var Product = require('../models/product');
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');

var Spot = require('../models/spot');
Spot.methods(['get']);
Spot.register(router, '/spots');

// Return router
module.exports = router;
