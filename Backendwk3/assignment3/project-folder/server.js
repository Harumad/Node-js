const express = require("express");
const path = require("path");

const app = express();
const port = 3100;

// Middleware to read JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logger middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// About route
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

// ✅ FIX: Add GET route for form page
app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "form.html"));
});

// Form submission
app.post("/form", (req, res) => {
  const { name, email } = req.body;

  res.send(`
    <h1>Form submitted</h1>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <a href="/">Go Home</a>
  `);
});

// DELETE route
app.delete("/delete", (req, res) => {
  res.json({
    message: "Delete successful",
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
