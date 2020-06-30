require("dotenv").config();
const express = require("express");
const recipeRouter = require("./routers/recipes");

const PORT = 4000;
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("recipes", recipeRouter);

app.listen(PORT, () => console.log("Listening on port"`${PORT}`));
