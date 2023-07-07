const express = require("express");
const mqtt = require("./services/mqtt.service");

const app = express();

const router = require("./routes");
const client = require("./services/mqtt.service");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

app.listen(3000, () => {
  client.on("connect", () => {
    console.log("Connected to MQTT broker");
  });
  console.log("Server is running on port 3000");
});
