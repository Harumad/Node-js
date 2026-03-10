// Import express
const express = require("express");

// Create an Express application
const app = express();

// Set the port number
const PORT = 4000;

// Route 1: Home
app.get("/", (req, res) => {
  res.send("Welcome to Express server");
});

// Route 2: About
app.get("/about", (req, res) => {
  res.send("About this application");
});

// Route 3: Contact
app.get("/contact", (req, res) => {
  res.send("Contact page");
});

// Route 4: Products (returns list of products)
app.get("/products", (req, res) => {
  const products = ["Laptop", "Phone", "Headphones", "Keyboard", "Mouse"];

  res.send(products);
});

// Route 5: API User (returns a user object)
app.get("/api/user", (req, res) => {
  const user = {
    name: "Mohammed",
    role: "Student",
  };

  res.send(user);
});

// Start the server
app.listen(PORT, () => {
  console.log("Server is running on port 4000");
});
