const { Schema, model } = require("mongoose");

const serviceSchema = new Schema({
  servise: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: String, require: true },
  provider: { type: String, require: true },
});

//create a model or a collection
const Service = new model("Service", serviceSchema);
module.exports = Service;
