var mongoose = require("mongoose");
var Spot = mongoose.Spot;

var spotSchema = new Schema({
  id: { type: Number },
  name: { type: String ,
  description: { type: String },
  location: { type: String },
  spotType: {
    type: String,
  enum: ['ledge','bank','transition','handrail','stairs','lowToHigh','drop'],
  },
  year: {type: Date},
});

var Spot = mongoose.model("Spot", spotSchema);

module.exports = Spot;
