"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("tags", [
      { title: "Vegan", createdAt: new Date(), updatedAt: new Date() },
      {
        title: "Vegetarian",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Breakfast",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Lunch",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Dinner",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Dairy free",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Gluten free",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("tags", null, {});
  },
};
