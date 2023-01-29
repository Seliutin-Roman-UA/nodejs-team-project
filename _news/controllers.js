const mongoose = require("mongoose");


const { newSchema } = require("./schema.js");
const friend = mongoose.model("News", newSchema);

async function getNews(req, res) {
  friend.find();
}

async function addNews(req, res) {}

async function removeNews(req, res) {}

async function updateNews(req, res) { }

async function searchNews(req, res) {}

module.exports = {
  getNews,
  addNews,
  removeNews,
  updateNews,
  searchNews,
};