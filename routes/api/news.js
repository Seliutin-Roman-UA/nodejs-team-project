const express = require("express");
const getNews = require("../../controllers/newsController");
const router = express.Router();

const error = require("../../helpers/error");

router.get("/", error(getNews));

module.exports = router;
