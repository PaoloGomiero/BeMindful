require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/api/status", (req, res) => {
  res.json({
    status: "ok",
    message: "BeMindful backend is running",
    environment: process.env.NODE_ENV || "development"
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});