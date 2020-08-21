const { Router } = require("express");
const Favourite = require("../models").favourite;
const User = require("../models").user;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const favourites = await Favourite.findAll({ include: [User] });
    res.json(favourites);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
