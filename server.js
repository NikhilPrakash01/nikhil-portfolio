require("dotenv").config();
const express = require("express");
const connectDB = require("./config/dbConfig");
const cors = require("cors"); // ✅ CORS Import Karo
const path = require("path");

console.log("Mongo URI:", process.env.MONGO_URI); // ✅ Debugging ke liye

const app = express();
app.use(express.json());

// ✅ CORS Middleware Enable Karo
app.use(cors({
  origin: "https://ornate-starburst-9643a5.netlify.app", // ✅ Netlify frontend ka URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

connectDB().then(() => {
  const portfolioRoute = require("./routes/portfolioRoute");
  app.use("/api/portfolio", portfolioRoute);

  const port = process.env.PORT || 5000;

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
