const { Router } = require("express");
const Tag = require("../models").tag;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const tags = await Tag.findAll();
    res.json(tags);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
