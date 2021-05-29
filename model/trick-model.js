const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trickSchema = new Schema({
  name: String,
  skater: String, //[{ type: Schema.Types.ObjectId, ref: "Skater" }],
  year: { type: Date },
  referenceURL: {
    type: String,
    required: "URL can't be empty",
    unique: true,
  },

  //   players: [{type: Schema.Types.ObjectId,ref:'Player'}],
  //   games:[{type: Schema.Types.ObjectId,ref:'Game'}]
});

trickSchema.path("referenceURL").validate((val) => {
  urlRegex =
    /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
  return urlRegex.test(val);
}, "Invalid URL.");

const Trick = mongoose.model("Trick", trickSchema);

module.exports = Trick;
