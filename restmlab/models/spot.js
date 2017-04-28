// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var productSchema = new mongoose.Schema({
  spot_name: String,
  spot_addr: String,
  spot_star: String
});

// Return model
module.exports = restful.model('Spots', productSchema);
