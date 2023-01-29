const mongoose = require("mongoose");
const { getNewID } = require("../Helpers/newID.js");


const { adSchema } = require("./schema.js");
const Ad = mongoose.model("Ads", adSchema);

async function getAllAds(req, res) { 
    await Ad.find({})
      .select(['_id', 'imgURL', 'title',  'dateofbirth', 'breed', 'price'])
      .exec((err, pets) => {
        if (err) {
          res.status(500).json({ "message": err });
          return;
        }
        res.json({
          message: 'Success',
          data: pets
        })
      }) 
}

async function getMyAds(req, res) {}

async function addAd(req, res) {
  const _id = await getNewID(Ad);
  const props = req.body;
  const userId = req.user.id;
  const newAd = new Ad({ _id, ...props, userId });
  console.log(newAd);
  newAd.save(async (err, ad) => {    
    if (err) {
      res.status(400).json({ "message": "Error occurred", "err": err });
      return;
    }
    res.json({
      message: "Ad added",
      data: ad,         
    });                 
  });
}
  


async function removeAd(req, res) {}

async function updateAd(req, res) { }

async function makeFavorite(req, res) {}

async function searchAds(req, res) {}

module.exports = {
  getAllAds,
  getMyAds,
  addAd,
  removeAd,
  updateAd,
  makeFavorite,
  searchAds,
};