const express = require("express");
const router = express.Router();

router.post("/register");
router.post("/login");
router.post("/refresh");
router.get("/current");
router.get("/logout");

module.exports = router;
