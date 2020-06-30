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
    }
  }
  recipe.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      imageURL: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.TEXT, allowNull: false },
      ingredients: { type: DataTypes.TEXT, allowNull: false },
      method: { type: DataTypes.TEXT, allowNull: false },
      cookingTime: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "recipe",
    }
  );
  return recipe;
};
