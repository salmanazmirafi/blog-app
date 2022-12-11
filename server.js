import express from "express";
const app = express();
import dotenv from "dotenv";
import mongoose from "mongoose";

//Security Middleware Import
import cors from "cors";
import morgan from "morgan";

// Route Middleware Impost
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import postRoutes from "./routes/post.js";

// Env Config
dotenv.config();
app.use(express.json());

//Security Middleware Implement
app.use(cors());
app.use(morgan("common"));

// Routes
app.use("/api/v1", authRoutes);
app.use("/api/v1/", userRoutes);
app.use("/api/v1/posts", postRoutes);

// Mongo DB Database Connection 🔂
mongoose.set("strictQuery", true);
mongoose.connect(process.env.DATABASE_URI, () => {
  console.log("Database Connection 🔂 Success");
});

// Server Connection 🔂
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT} 🔥`));

//Undefined Route
app.get("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "Not found" });
});
