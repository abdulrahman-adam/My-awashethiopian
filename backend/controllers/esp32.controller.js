import axios from "axios";
import { ESP32_BASE_URL } from "../configs/esp32.config";

/* =========================
   SUCCESS BEEP
========================= */
export const beepSuccess = async () => {
  try {
    await axios.get(`${ESP32_BASE_URL}/success`);
    console.log("ESP32: SUCCESS beep sent");
  } catch (err) {
    console.log("ESP32 not reachable (success)");
  }
};

/* =========================
   ERROR BEEP
========================= */
export const beepError = async () => {
  try {
    await axios.get(`${ESP32_BASE_URL}/error`);
    console.log("ESP32: ERROR beep sent");
  } catch (err) {
    console.log("ESP32 not reachable (error)");
  }
};