"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Jenna",
          email: "j@j.com",
          password: bcrypt.hashSync("j", SALT_ROUNDS),
          imageurl:
            "https://avatars3.githubusercontent.com/u/65011803?s=400&u=68637815e4c324065364d53d31260cf3c6e2bb6a&v=4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jean-Louis",
          email: "a@a.com",
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
