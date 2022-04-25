"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    static associate(models) {}
  }
  users.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        autoIncrement: true
      },
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
      photo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "users",
      timestamps: false,
    }
  );
  return users;
};
