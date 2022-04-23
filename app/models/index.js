const dbConfig = require("../config/config.db.js");
const mongoose = require("mongoose"); // Mongoose is an object modelling tool used by mongodb
// javascript object has one format {key: value}
// database will have another format
// javascript object should be converted to database object's format
// this is done by mongoose

mongoose.Promise = global.Promise;
const db = {}; // creates a variable of type javascript object
db.mongoose = mongoose;
db.url = dbConfig.url;
db.products = require("./product.model.js")(mongoose);

module.exports = db;
