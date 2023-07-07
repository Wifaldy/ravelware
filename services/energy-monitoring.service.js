const { EnergyMonitoring } = require("../db/models");

class EnergyMonitoringService {
  static async add(newEnergyMonitoring) {
    try {
      const objEnergyMonitoring = {
        panel_name: newEnergyMonitoring.panel_name,
        energy: newEnergyMonitoring.data.kWh,
        power: newEnergyMonitoring.data.kW,
        electric_current:
          newEnergyMonitoring.data.i[newEnergyMonitoring.data.i.length - 1],
        voltage:
          newEnergyMonitoring.data.v[newEnergyMonitoring.data.v.length - 1],
      };
      return await EnergyMonitoring.create({
        ...objEnergyMonitoring,
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = EnergyMonitoringService;
