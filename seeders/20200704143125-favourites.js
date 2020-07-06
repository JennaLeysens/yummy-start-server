"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("favourites", [
      { userId: 2, recipeId: 1, createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, recipeId: 2, createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, recipeId: 1, createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, recipeId: 3, createdAt: new Date(), updatedAt: new Date() },
      // { userId: 1, recipeId: 3, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("favourites", null, {});
  },
};
