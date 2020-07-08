"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("recipeTags", [
      { recipeId: 1, tagId: 1, createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 1, tagId: 2, createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 1, tagId: 5, createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 2, tagId: 1, createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 2, tagId: 3, createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 3, tagId: 2, createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 3, tagId: 4, createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 3, tagId: 6, createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 2, tagId: 6, createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 1, tagId: 6, createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 3, tagId: 7, createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 2, tagId: 7, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("recipeTags", null, {});
  },
};
