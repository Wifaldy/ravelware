const { EnergyMonitoring, sequelize } = require("../db/models");
const { Op } = require("sequelize");

class EnergyMonitoringController {
  static async getOnePanel(req, res) {
    try {
      const name = req.query.name;
      const prevDate = new Date();
      prevDate.setDate(prevDate.getDate());
      prevDate.setHours(7, 0, 0, 0);
      console.log(prevDate);
      if (name) {
        const oneEnergyMonitoring = await EnergyMonitoring.findOne({
          attributes: {
            exclude: ["id", "updatedAt"],
          },
          where: { panel_name: name },
          order: [["createdAt", "DESC"]],
        });
        const prevUsageEnergy = await EnergyMonitoring.findOne({
          where: {
            panel_name: name,
            createdAt: {
              [Op.lte]: prevDate,
            },
          },
          order: [["createdAt", "DESC"]],
        });
        const todayUsageEnergy =
          oneEnergyMonitoring.energy - prevUsageEnergy.energy;
        const costEnergy = todayUsageEnergy * 1500;
        oneEnergyMonitoring.dataValues.createdAt.setUTCHours(
          oneEnergyMonitoring.dataValues.createdAt.getUTCHours() + 7
        );
        return res
          .status(200)
          .json({ oneEnergyMonitoring, todayUsageEnergy, costEnergy });
      }
      throw new Error("Panel name is required");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getUsageMonthly(req, res) {
    try {
      const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const energyMonitoring = await EnergyMonitoring.findAll({
        attributes: {
          exclude: [
            "id",
            "power",
            "electric_current",
            "voltage",
            "energy",
            "updatedAt",
            "panel_name",
          ],
        },
        attributes: [
          [sequelize.fn("SUM", sequelize.col("energy")), "total_energy"],
          [
            sequelize.fn("DATE_TRUNC", "month", sequelize.col("createdAt")),
            "month",
          ],
          [sequelize.literal('SUM("energy") * 1500'), "total_cost"],
        ],
        group: [
          sequelize.fn("DATE_TRUNC", "month", sequelize.col("createdAt")),
        ],
      });
      energyMonitoring.forEach((element) => {
        element.dataValues.month = month[element.dataValues.month.getMonth()];
      });
      res.status(200).json({ energyMonitoring });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = EnergyMonitoringController;
