const mongoose = require('mongoose');

const newSchema = new mongoose.Schema({
  tytle: {
    type: String,
    required: true,
  },
  text: String,
  imgURL: String,
  data: {
    type: Date,
    default: new Date(),
  },
});
 
module.exports = {
  newSchema,
};