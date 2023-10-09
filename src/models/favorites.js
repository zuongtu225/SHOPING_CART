"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Favorites extends Model {
    static associate(models) {}
  }
  Favorites.init(
    {
      userID: DataTypes.INTEGER,
      productID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Favorites",
    }
  );
  return Favorites;
};
