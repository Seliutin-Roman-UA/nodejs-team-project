const express = require("express");
const router = express.Router();

// news by categories
router.post("/", () => {});

router.patch("/favorite/:id", () => {});
router.patch("/deleteFavorite/:id", () => {});
router.get("/users", () => {});
router.get("/users/favorite", () => {});
router.get("/:id", () => {});
router.get("/", () => {});
router.delete("/:id", () => {});

module.exports = router;
