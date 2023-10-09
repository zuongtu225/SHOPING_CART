"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      // Role.hasMany(models.Users, { as: "roleID" });
    }
  }
  Role.init(
    {
      role: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Roles",
    }
  );
  return Role;
};
