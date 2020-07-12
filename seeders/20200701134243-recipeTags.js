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
      { recipeId: 2, tagId: 8, createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 4, tagId: 1, createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 4, tagId: 2, createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 4, tagId: 4, createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 4, tagId: 5, createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 5, tagId: 1, createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 5, tagId: 2, createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 5, tagId: 3, createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 5, tagId: 8, createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 5, tagId: 9, createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 6, tagId: 1, createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 6, tagId: 6, createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 6, tagId: 5, createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 7, tagId: 1, createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 7, tagId: 2, createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 7, tagId: 4, createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 7, tagId: 5, createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 7, tagId: 7, createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 8, tagId: 1, createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 8, tagId: 2, createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 8, tagId: 7, createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 8, tagId: 9, createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 9, tagId: 1, createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 9, tagId: 2, createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 8, tagId: 3, createdAt: new Date(), updatedAt: new Date() },
      { recipeId: 8, tagId: 6, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("recipeTags", null, {});
  },
};
