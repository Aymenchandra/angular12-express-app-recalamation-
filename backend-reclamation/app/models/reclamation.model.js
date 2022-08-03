const mongoose = require("mongoose");

const Reclamation = mongoose.model(
  "Reclamation",
  new mongoose.Schema({
    reclamation:String,
    id_user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps:true,
  })
);

module.exports = Reclamation;
