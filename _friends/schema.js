const mongoose = require('mongoose');

const friendSchema = new mongoose.Schema({
  logo: Buffer,
  workingHours: String,
  adress: String,
  email: String,
  phone: String,
  
  
});


module.exports = {
  friendSchema,
};