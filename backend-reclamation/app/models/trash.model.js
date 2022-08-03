const mongoose = require("mongoose");

const Trash = mongoose.model(
  "Trash",
  new mongoose.Schema({
    code:String,
    remplissage:String,
    longitude:String,
    latitude:String,
})
);

module.exports = Trash;
