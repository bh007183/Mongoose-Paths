const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BirdSchema = new Schema({
 

  name: {
    type: String,
    unique: true,
  },

  canFly: {
    type: Boolean,
    require: true
  }
});

const Birds = mongoose.model("Birds", BirdSchema);

module.exports = Birds;
