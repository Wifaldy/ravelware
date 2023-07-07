require("dotenv").config();

const mqtt = require("mqtt");
const options = {
  host: process.env.MQTT_host,
  port: process.env.MQTT_port,
  protocol: process.env.MQTT_protocol,
  username: process.env.MQTT_username,
  password: process.env.MQTT_password,
};

const EnergyMonitoringService = require("../services/energy-monitoring.service");

const topics = [
  "DATA/PM/PANEL_LANTAI_1",
  "DATA/PM/PANEL_LANTAI_2",
  "DATA/PM/PANEL_LANTAI_3",
];

const client = mqtt.connect(options);

client.on("connect", () => {
  client.subscribe(topics);
});

client.on("message", (topic, message) => {
  const data = JSON.parse(message.toString());
  if (topic === "DATA/PM/PANEL_LANTAI_1") {
    EnergyMonitoringService.add({ ...data, panel_name: "PANEL LANTAI 1" });
  } else if (topic === "DATA/PM/PANEL_LANTAI_2") {
    EnergyMonitoringService.add({ ...data, panel_name: "PANEL LANTAI 2" });
  } else if (topic === "DATA/PM/PANEL_LANTAI_3") {
    EnergyMonitoringService.add({ ...data, panel_name: "PANEL LANTAI 3" });
  }
});

client.on("error", (err) => {
  console.log(err);
});

module.exports = client;
