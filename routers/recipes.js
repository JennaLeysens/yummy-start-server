const { Router } = require("express");
const Recipe = require("../models").recipe;
const User = require("../models").user;
const Tag = require("../models").tag;
const Favourite = require("../models").favourite;
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
    if (!recipe) {
      return res.status(401).send({
        message: "Recipe not found",
      });
    }
    res.json(recipe);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.patch("/like/:id", async (req, res, next) => {
  const id = req.params.id;
  const recipe = await Recipe.findByPk(id);
  const likes = recipe.likes;
  await recipe.update({ likes: likes + 1 });

  return res.status(200).send({ recipe });
});

module.exports = router;
