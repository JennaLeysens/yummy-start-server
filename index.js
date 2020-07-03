require("dotenv").config();
const express = require("express");
const corsMiddleWare = require("cors");
const { PORT } = require("./config/constants");
const authRouter = require("./routers/auth");
const authMiddleWare = require("./auth/middleware");
const recipeRouter = require("./routers/recipes");
const tagRouter = require("./routers/tags");
const app = express();

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);
app.use(corsMiddleWare());

if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}

app.use("/", authRouter);
app.use("/recipes", recipeRouter);
app.use("/tags", tagRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
