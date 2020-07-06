const Recipe = require("./models").recipe;
const User = require("./models").user;

const getUser = async () => {
  try {
    const user = await User.findByPk(1, {
      include: [{ model: Recipe, as: "userfavourites" }],
    });
    console.log(user.dataValues);
  } catch (e) {
    console.log(e);
  }
};

getUser();
