import express from "express";
import { beepError, beepSuccess } from "../controllers/esp32.controller.js";

const esp32Router = express.Router();

/* =========================================================
   TEST SUCCESS BEEP
========================================================= */
esp32Router.get("/success", async (req, res) => {
  await beepSuccess();

  return res.status(200).json({
    success: true,
    message: "Success beep sent to ESP32",
  });
});

/* =========================================================
   TEST ERROR BEEP
========================================================= */
esp32Router.get("/error", async (req, res) => {
  await beepError();

  return res.status(200).json({
    success: true,
    message: "Error beep sent to ESP32",
  });
});

export default esp32Router;