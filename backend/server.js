import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import scholarRoutes from "./routes/scholarRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", scholarRoutes);
app.get("/", (req, res) => {
  res.send("GMU-CSE Web app working Good....");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
