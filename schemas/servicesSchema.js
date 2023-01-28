const { Schema, model, SchemaTypes } = require("mongoose");

const service = new Schema({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  url: {
    type: String,
  },
  timeDay: {
    type: Array,
  },
  address: {
    type: String,
  },
  addressUrl: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});

const Service = model("service", service);

module.exports = Service;
