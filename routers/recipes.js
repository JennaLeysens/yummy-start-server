const { Router } = require("express");
const Recipe = require("../models").recipe;
const User = require("../models").user;
const Tag = require("../models").tag;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const recipes = await Recipe.findAll({
      include: [User, Tag],
    });
    res.json(recipes);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const recipe = await Recipe.findByPk(id, {
      include: [User, Tag],
    });
    res.json(recipe);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
