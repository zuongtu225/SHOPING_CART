"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Addresses extends Model {
    static associate(models) {}
  }
  Addresses.init(
    {
      userID: DataTypes.INTEGER,
      address: DataTypes.STRING,
      phoneNumber: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Addresses",
    }
  );
  return Addresses;
};
