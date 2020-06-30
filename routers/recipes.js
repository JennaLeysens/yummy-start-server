const { Router } = require("express");
const Recipe = require("../models").recipe;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const recipes = await Recipe.findAll();
    res.json(recipes);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
