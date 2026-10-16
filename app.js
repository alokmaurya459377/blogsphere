require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT;
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("BlogSphere API is running...");
});

app.listen(PORT, () => {
  console.log(`BlogSphere is runing on PORT ${PORT}`);
});
