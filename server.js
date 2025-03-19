require("dotenv").config();
console.log("Mongo URI:", process.env.MONGO_URI); // ✅ Debugging ke liye

const express = require("express");
const connectDB = require("./config/dbConfig");

const app = express();
app.use(express.json());

connectDB().then(() => {
  const portfolioRoute = require("./routes/portfolioRoute");
  app.use("/api/portfolio", portfolioRoute);

  const port = process.env.PORT || 5000;
  const path = require("path");

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client", "build")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "client/build/index.html"));
    });
  }

  app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
  });
});
