require("dotenv").config(); // To access .env variables
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/dbConfig");
const path = require("path");

const app = express();
app.use(express.json());

// Dynamic CORS Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'https://nikhil-portfolio-production.netlify.app'], // Add your frontend URLs here
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

connectDB().then(() => {
  const portfolioRoute = require("./routes/portfolioRoute");
  app.use("/api/portfolio", portfolioRoute);

  // Default Route for API status check
  app.get("/", (req, res) => {
    res.send("🚀 API is running! Go to /api/portfolio/get-portfolio-data to see data.");
  });

  // Serving static files in production
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client", "build"))); // Serve static files
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "client", "build", "index.html")); // Return index.html for any unmatched route
    });
  }

  // Set up port for the server
  const port = process.env.PORT || 5000;

  // Start the server
  app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
  });
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!'); // General error response
});
