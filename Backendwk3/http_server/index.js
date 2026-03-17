const express = require("express");
const path = require("path");

// create express server
const server = express();

// static files
server.use(express.static(path.join(__dirname, "public")));

// homepage handler
const Homepage = (req, res) => {
  res.send("<h1>This is my Homepage</h1>");
};

// about handler
const Aboutpage = (req, res) => {
  res.send("<h1>This is my Aboutpage</h1>");
};

// product
const productPage = (req, res) => {
  const product = [{ name: "Nido", price: "2GH" }];
  res.json(product);
};

// middleware
const HomepageMiddleware = (req, res, next) => {
  console.log("Homepage middleware running");
  next();
};

const AboutpageMiddleware = (req, res, next) => {
  console.log("Aboutpage middleware running");
  next();
};

const productPageMiddleware = (req, res, next) => {
  console.log("Product page middleware running");
  next();
};

// routes
server.get("/", HomepageMiddleware, Homepage);
server.get("/about", AboutpageMiddleware, Aboutpage);
server.get("/productPage", productPageMiddleware, productPage);

// Start server
server.listen(3000, () => console.log("Server is ready on port 3000"));
