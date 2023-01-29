const express = require("express");
const adsControl = require("./controllers.js");
const { checkUser } = require("../middleware/usermiddleware.js");

const router = express.Router();

router.get("/", adsControl.getAllAds); // 

router.get("/my", checkUser, adsControl.getMyAds); // 

router.post("/add", checkUser, adsControl.addAd); // 

router.delete("/remove/:id", checkUser, adsControl.removeAd); // 

router.patch("/update/:id", checkUser, adsControl.updateAd); //

router.patch("/favorite/:id", checkUser, adsControl.makeFavorite); //

router.get("/search", adsControl.searchAds); // 

module.exports = router;
