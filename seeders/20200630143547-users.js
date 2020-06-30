"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Jenna",
          email: "j@j.com",
          password: "j",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "dummy",
          email: "a@a.com",
          password: "a",
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
