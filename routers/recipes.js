const { Router } = require("express");
const Recipe = require("../models").recipe;
const User = require("../models").user;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const recipes = await Recipe.findAll({
      include: User,
    });
    res.json(recipes);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
