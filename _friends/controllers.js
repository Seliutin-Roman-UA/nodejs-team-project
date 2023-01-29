const mongoose = require("mongoose");


const { friendSchema } = require("./schema.js");
const friend = mongoose.model("Friends", friendSchema);

async function getFriends(req, res) {
  friend.find();
}

async function addFriends(req, res) {}

async function removeFriends(req, res) {}

async function updateFriends(req, res) {}

module.exports = {

  getFriends,
  addFriends,
  removeFriends,
  updateFriends,

};