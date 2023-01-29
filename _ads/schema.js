const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
  _id: Number,
  category: Number,
  imgURL: String,
  userId: {
    type: String,
    required: true,
  },
  title: String,
  petname: String,
  dateofbirth: Date,
  breed: String,
  sex: {
    type: String,
    enum: ['male', 'femail']
  },
  location: String,
  price: {
    type: Number,
    default: 0,
  },
  comments: String

});


module.exports = {
  adSchema,
};