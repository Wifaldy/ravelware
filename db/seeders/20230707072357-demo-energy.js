"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const currentDate = new Date();
    currentDate.setUTCHours(currentDate.getUTCHours() + 7);
    currentDate.setDate(currentDate.getDate() - 1);
    currentDate.setHours(23, 59, 0, 0);

    const lastMonthDate = new Date();
    lastMonthDate.setUTCHours(lastMonthDate.getUTCHours() + 7);
    lastMonthDate.setDate(lastMonthDate.getDate() - 30);
    lastMonthDate.setHours(23, 59, 0, 0);

    await queryInterface.bulkInsert(
      "EnergyMonitorings",
      [
        {
          panel_name: "PANEL LANTAI 1",
          power: 1500,
          energy: 1000,
          electric_current: 54100,
          voltage: 27500,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          panel_name: "PANEL LANTAI 2",
          power: 1700,
          energy: 1000,
          electric_current: 54100,
          voltage: 27500,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          panel_name: "PANEL LANTAI 3",
          power: 1700,
          energy: 1000,
          electric_current: 54000,
          voltage: 27500,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          panel_name: "PANEL LANTAI 1",
          power: 1000,
          energy: 500,
          electric_current: 50000,
          voltage: 25000,
          createdAt: lastMonthDate,
          updatedAt: lastMonthDate,
        },
        {
          panel_name: "PANEL LANTAI 2",
          power: 1000,
          energy: 500,
          electric_current: 50000,
          voltage: 20000,
          createdAt: lastMonthDate,
          updatedAt: lastMonthDate,
        },
        {
          panel_name: "PANEL LANTAI 3",
          power: 1000,
          energy: 500,
          electric_current: 50000,
          voltage: 20000,
          createdAt: lastMonthDate,
          updatedAt: lastMonthDate,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("EnergyMonitorings", null, {
      truncate: true,
      restartIdentity: true,
    });
  },
};
