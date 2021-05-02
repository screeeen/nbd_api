var mongoose = require("mongoose");
var Spot = mongoose.Spot;
const Schema = mongoose.Schema;

var spotSchema = new Schema({
  id: { type: Number },
  name: { type: String, required: true },
  description: { type: String },
  location: { type: String, default: "secret/Unknown", set: capitalize },
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
      "hubba",
    ],
    // set: capitalize,
  },
  year: { type: Date },
});

function capitalize(val) {
  if (typeof val !== "string") {
    val = "";
  }
  return val.charAt(0).toUpperCase() + val.substring(1);
}

var Spot = mongoose.model("Spot", spotSchema);

module.exports = Spot;
