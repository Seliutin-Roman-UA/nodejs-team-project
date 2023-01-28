const express = require("express");
const servicesSidebar = require("../../controllers/servicesController");
const router = express.Router();

const error = require("../../helpers/error");

router.get("/", error(servicesSidebar));

module.exports = router;
