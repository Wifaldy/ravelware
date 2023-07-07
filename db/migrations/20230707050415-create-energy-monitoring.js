"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("EnergyMonitorings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      panel_name: {
        type: Sequelize.STRING,
      },
      energy: {
        type: Sequelize.FLOAT,
      },
      power: {
        type: Sequelize.FLOAT,
      },
      electric_current: {
        type: Sequelize.FLOAT,
      },
      voltage: {
        type: Sequelize.FLOAT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("EnergyMonitorings");
  },
};
