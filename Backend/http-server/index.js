const http = require("http");

// This function runs whenever the server receives a request
// requestObject contains request details like URL and method
// responseObject is used to send data back to the browser
const handleAllRequests = (requestObject, responseObject) => {
  console.log("Hi, my server just received a request");
  console.log(requestObject);

  // Get the requested URL from the browser
  const url = requestObject.url;

  // Route handling: check which page the user is visiting
  if (url === "/") {
    // Homepage route
    responseObject.write("<h1>WELCOME TO THE HOMEPAGE</h1>");
  } else if (url === "/login") {
    // Login page route
    responseObject.write("WELCOME TO LOGIN PAGE");
  } else {
    // If route is not found
    responseObject.write("PAGE NOT FOUND");
  }

  // End the response and send data back to browser
  responseObject.end();
};

// Create the HTTP server and assign request handler function
const server = http.createServer(handleAllRequests);

// Start server on port 3000 and localhost
server.listen(3000, "127.0.0.1", () => {
  console.log("My server is listening to requests on port 3000");
});
