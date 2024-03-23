require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to database!");
    app.listen(PORT, () => {
      console.log("Server is runnin on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
