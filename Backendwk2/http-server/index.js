const express = require("express");
const server = express();

// Homepage route
server.get("/", (req, res) => {
  res.send("<h1>WELCOME TO THE HOMEPAGE</h1>");
});

// About route
server.get("/about", (req, res) => {
  res.send("<h2>WELCOME TO ABOUT PAGE</h2>");
});

// 404 handler (must be last)
server.use((req, res) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

server.listen(2000, "127.0.0.1", () => {
  console.log("My server is listening to requests on port 2000");
});
