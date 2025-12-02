const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// ======================
//  CONNECT MONGODB
// ======================
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mydatabase");
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

// ======================
//  INITIALIZE APP
// ======================
const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Connect MongoDB
connectDB();

// Routes
const whatsappRoutes = require("./router/whatsappRoutes");
const feedbackRoutes = require("./router/feedbackRoutes");

app.use("/api", feedbackRoutes);
app.use("/", whatsappRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
