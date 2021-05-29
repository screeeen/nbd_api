const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const skaterSchema = new Schema({
  name: String,
  tricks: [{ type: Schema.Types.ObjectId, ref: "Trick" }],
});

const Skater = mongoose.model("Skater", skaterSchema);

module.exports = Skater;
