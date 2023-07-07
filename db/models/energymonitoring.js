"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class EnergyMonitoring extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EnergyMonitoring.init(
    {
      panel_name: DataTypes.STRING,
      energy: DataTypes.FLOAT,
      power: DataTypes.FLOAT,
      electric_current: DataTypes.FLOAT,
      voltage: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "EnergyMonitoring",
    }
  );
  return EnergyMonitoring;
};
