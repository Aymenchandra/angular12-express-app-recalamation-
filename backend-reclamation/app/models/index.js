const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.reclamation = require("./reclamation.model")
db.trash = require("./trash.model")


module.exports = db;