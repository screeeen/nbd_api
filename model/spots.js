var mongoose = require("mongoose");
var Spot = mongoose.Spot;
const Schema = mongoose.Schema;

var spotSchema = new Schema({
  id: { type: Number },
  name: { type: String },
  description: { type: String },
  location: { type: String },
  spotType: {
    type: String,
    enum: [
      "ledge",
      "bank",
      "transition",
      "handrail",
      "stairs",
      "lowToHigh",
      "drop",
      "wallride",
    ],
  },
  year: { type: Date },
});

var Spot = mongoose.model("Spot", spotSchema);

module.exports = Spot;
