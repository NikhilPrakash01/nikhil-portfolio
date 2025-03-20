require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/dbConfig");

const app = express();
app.use(express.json());

// ✅ CORS Middleware (Allow Frontend Requests)
app.use(cors({
  origin: ["https://nikhil-portfolio-production.up.railway.app"], // ✅ Allowed frontend URLs
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

connectDB().then(() => {
  const portfolioRoute = require("./routes/portfolioRoute");
  app.use("/api/portfolio", portfolioRoute);

  // ✅ Default Route to Prevent "Not Found" on root URL
  app.get("/", (req, res) => {
  res.send("🚀 API is running! Go to /api/portfolio/get-portfolio-data to see data.");
});

  const port = process.env.PORT || 5000;
  const path = require("path");

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client", "build")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    });
  }

  app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
  });
});
