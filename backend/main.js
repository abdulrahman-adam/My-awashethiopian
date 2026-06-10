import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

import connectDB, { sequelize } from "./configs/db.js";
import connectCloudinary from "./configs/cloudinary.js";

/* =========================
   LOAD ENV
========================= */
dotenv.config();
console.log("DEBUG: .env load check - PORT is", process.env.PORT);

/* =========================
   IMPORT CRON JOBS
========================= */
import "./cron/productExpirationCron.js";

/* =========================
   IMPORT MODELS
========================= */
import models from "./models/index.js";

/* =========================
   IMPORT ROUTES
========================= */
import userRouter from "./routes/userRoute.js";
import authRouter from "./routes/authRoute.js";
import categoryRouter from "./routes/categoryRoute.js";
import productRouter from "./routes/productRoute.js";
import returnRouter from "./routes/returnRoutes.js";
import saleRouter from "./routes/saleRoute.js";
import inventoryRouter from "./routes/inventoryRoute.js";
import reportRouter from "./routes/reportRoute.js";
import analyticsRouter from "./routes/analyticsRoute.js";
import esp32Router from "./routes/esp32.routes.js";

/* =========================
   EXPRESS APP
========================= */
const app = express();
const port = process.env.PORT || 5000;

/* =========================
   DATABASE CONNECTION
========================= */
try {
  await connectDB();
  console.log("✅ Database Connected");
} catch (error) {
  console.error("❌ Database Connection Failed:", error);
  process.exit(1);
}

/* =========================
   CLOUDINARY
========================= */
try {
  connectCloudinary();
  console.log("☁️ Cloudinary Connected");
} catch (error) {
  console.error("❌ Cloudinary Error:", error);
}

/* =========================
   INITIALIZE ASSOCIATIONS
========================= */

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

console.log("✅ Sequelize Associations Loaded");

/* =========================
   DATABASE SYNC
========================= */
try {
  // IMPORTANT:
  // Use alter only during development

  await sequelize.sync();

  console.log("✅ MySQL Tables Synchronized");
} catch (error) {
  console.error("❌ MySQL Sync Error:", error);
}

/* =========================
   CORS CONFIG
========================= */

const allowedOrigins = [
  "https://zooolna.com",
  "https://www.zooolna.com",
  "https://api.zooolna.com",
  "https://db.zooolna.com",
  "http://localhost:5173",
  "http://localhost:5174",
];

const corsOptions = {
  origin: (origin, callback) => {
    const allowed = [
      "https://zooolna.com",
      "https://www.zooolna.com",
      "http://localhost:5173",
      "http://localhost:5174",
    ];

    if (!origin) return callback(null, true);

    if (allowed.includes(origin)) {
      return callback(null, true);
    }

    console.log("🚫 Blocked by CORS:", origin);

    // 🔥 IMPORTANT: allow request but reject properly
    return callback(null, true); // TEMP DEBUG FIX
  },

  credentials: true,
};


app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

/* =========================
   MIDDLEWARES
========================= */

app.use(cookieParser());

app.use(
  express.json({
    limit: "100mb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "100mb",
  })
);

/* =========================
   ROUTES
========================= */

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/category", categoryRouter);
app.use("/api/products", productRouter);
app.use("/api/returns", returnRouter);
app.use("/api/sales", saleRouter);
app.use("/api/inventory", inventoryRouter);
app.use("/api/reports", reportRouter);
app.use("/api/analytics", analyticsRouter);
app.use("/api/esp32", esp32Router);

/* =========================
   HEALTH CHECK
========================= */

app.get("/", (req, res) => {
  res.send("API IS WORKING NOW");
});

/* =========================
   GLOBAL ERROR HANDLER
========================= */

app.use((err, req, res, next) => {
  console.error("🔥 Server Error:", err);

  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

/* =========================
   START SERVER
========================= */

app.listen(port,"0.0.0.0", () => {
  console.log(
    `🚀 Server running on http://localhost:${port}`
  );
});

/* =========================
   RUN SEED
========================= */

// docker exec -it munidm_backend npm run seed:admin