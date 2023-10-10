"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Brands extends Model {
    static associate(models) {
      // Brands.hasMany(models.Users, { as: "BrandsID" });
    }
  }
  Brands.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Brands",
    }
  );
  return Brands;
};
