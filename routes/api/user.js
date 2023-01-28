const express = require("express");
const router = express.Router();

router.get("/", () => {});
router.patch("/", () => {});
router.post("/pets", () => {});
router.delete("/pets/:id", () => {});

module.exports = router;
