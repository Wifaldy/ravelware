const router = require("express").Router();
const EnergyMonitoringController = require("../controllers/energy.controller");

router.get("/", EnergyMonitoringController.getOnePanel);

router.get("/monthly", EnergyMonitoringController.getUsageMonthly);

module.exports = router;
