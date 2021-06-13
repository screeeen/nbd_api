var mongoose = require("mongoose");
var Spot = mongoose.Spot;
const Schema = mongoose.Schema;

var spotSchema = new Schema({
  id: { type: Number },
  location: { type: String, default: "secret/Unknown", set: capitalize },
  name: { type: String, required: true },
  description: { type: String },
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
  tricksRef: [{ type: Schema.Types.ObjectId, ref: "Trick" }],
  tricks: [{}],
});

function capitalize(val) {
  if (typeof val !== "string") {
    val = "";
  }
  return val.charAt(0).toUpperCase() + val.substring(1);
}

var Spot = mongoose.model("Spot", spotSchema);

module.exports = Spot;
