const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Recipe = require("../models/").recipe;
const Favourite = require("../models/").favourite;
const RecipeTag = require("../models/").recipeTag;
const { SALT_ROUNDS } = require("../config/constants");
const { reset } = require("nodemon");

const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({
        message: "Please provide both an emai address and a password",
      });
    }

    const user = await User.findOne({
      where: { email },
      include: [{ model: Recipe }, { model: Favourite, as: "userFavourites" }],
    });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({
        message: "User with that email not found or password incorrect",
      });
    }

    delete user.dataValues["password"];
    const token = toJWT({ userId: user.id });
    return res.status(200).send({ token, ...user.dataValues });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    return res
      .status(400)
      .send("Please provide a name, an email address and a password");
  }

  try {
    const newUser = await User.create({
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      name,
    });

    delete newUser.dataValues["password"];

    const token = toJWT({ userId: newUser.id });

    res.status(201).json({ token, ...newUser.dataValues });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/", authMiddleware, async (req, res, next) => {
  try {
    const user = req.user;
    console.log(user);
    const {
      title,
      imageURL,
      description,
      ingredients,
      method,
      cookingTime,
      servings,
    } = req.body;
    console.log(req.body);
    console.log("user?", user.id);
    const newRecipe = await Recipe.create({
      title,
      imageURL,
      description,
      ingredients: [ingredients],
      method,
      cookingTime,
      servings,
      userId: user.id,
      likes: 0,
    });
    const { tagIds } = req.body;
    const newRecipeTag = await RecipeTag.bulkCreate(
      tagIds.map((tagId) => {
        return { recipeId: newRecipe.id, tagId };
      })
    );
    if (
      !title ||
      !imageURL ||
      !description ||
      !ingredients ||
      !method ||
      !cookingTime
    ) {
      return res.status(400).send("Please provide all the required elements");
    }
    res.status(201).send({ message: "Recipe added", newRecipe, newRecipeTag });
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.post("/newfav", authMiddleware, async (req, res, next) => {
  try {
    const user = req.user;
    const { recipeId } = req.body;
    console.log("????", typeof req.body);
    const newFavourite = await Favourite.create({
      userId: user.id,
      recipeId,
    });
    console.log(newFavourite);
    if (!recipeId) {
      return res.status(400).send("Please provide all the required elements");
    }
    res.status(201).send({ message: "Favourite added", newFavourite });
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.delete("/favourite/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const favourite = await Favourite.findByPk(id);
    const deleteFav = await favourite.destroy();
    res.status(201).send({ message: "Favourite DELETED", favourite });
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.get("/me", authMiddleware, async (req, res) => {
  const userFavourites = await Favourite.findAll({
    where: { userId: req.user.id },
    include: [User],
  });
  delete req.user.dataValues["password"];
  res.status(200).send({ ...req.user.dataValues, userFavourites });
});

module.exports = router;
