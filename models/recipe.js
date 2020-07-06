"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      recipe.belongsTo(models.user);
      recipe.belongsToMany(models.tag, {
        through: "recipeTags",
        foreignKey: "recipeId",
      });
      recipe.belongsToMany(models.user, {
        through: "favourites",
        foreignKey: "recipeId",
        as: "userfavourites",
      });
    }
  }
  recipe.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      imageURL: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.TEXT, allowNull: false },
      ingredients: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      method: { type: DataTypes.TEXT, allowNull: false },
      cookingTime: {
        type: DataTypes.ENUM,
        values: ["15", "30", "45", "60", "90", "120"],
        allowNull: false,
      },
      likes: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "recipe",
    }
  );
  return recipe;
};
