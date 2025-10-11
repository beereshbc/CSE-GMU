import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"], // Your React app URLs
    credentials: true,
  })
);

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Scholar API Server is running" });
});

// API endpoint to get scholar data
app.get("/api/scholar/:authorId", async (req, res) => {
  try {
    const { authorId } = req.params;
    const apiKey =
      process.env.SERPAPI_KEY ||
      "9b7d440dd92a051f71fe40d040cb201f834236767a54c74e26938af7b213159b";

    const response = await axios.get(
      `https://serpapi.com/search.json?engine=google_scholar_author&author_id=${authorId}&api_key=${apiKey}`
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching scholar data:", error.message);
    res.status(500).json({
      error: "Failed to fetch scholar data",
      details: error.message,
    });
  }
});

// API endpoint to get scholar data with pagination
app.get("/api/scholar/:authorId/articles", async (req, res) => {
  try {
    const { authorId } = req.params;
    const { start = 0 } = req.query;
    const apiKey =
      process.env.SERPAPI_KEY ||
      "9b7d440dd92a051f71fe40d040cb201f834236767a54c74e26938af7b213159b";

    const response = await axios.get(
      `https://serpapi.com/search.json?engine=google_scholar_author&author_id=${authorId}&start=${start}&api_key=${apiKey}`
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching scholar articles:", error.message);
    res.status(500).json({
      error: "Failed to fetch scholar articles",
      details: error.message,
    });
  }
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
