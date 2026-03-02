const http = require("http");

// This function runs whenever the server receives a request
const handleAllRequests = (requestObject, responseObject) => {
  const url = requestObject.url;

  console.log("Request received for:", url);

  // HOME ROUTE
  if (url === "/") {
    responseObject.writeHead(200, { "Content-Type": "text/plain" });
    responseObject.end("Welcome to my server");
  }

  // ABOUT ROUTE
  else if (url === "/about") {
    responseObject.writeHead(200, { "Content-Type": "text/plain" });
    responseObject.end("About us");
  }

  // CONTACT ROUTE
  else if (url === "/contact") {
    responseObject.writeHead(200, { "Content-Type": "text/plain" });
    responseObject.end("Contact us");
  }

  // TIME ROUTE
  else if (url === "/time") {
    responseObject.writeHead(200, { "Content-Type": "text/plain" });
    responseObject.end(new Date().toString());
  }

  // API ROUTE (JSON RESPONSE)
  else if (url === "/api/student") {
    responseObject.writeHead(200, { "Content-Type": "application/json" });

    const student = {
      id: 1,
      name: "Haruna",
      course: "Backend Development",
    };

    responseObject.end(JSON.stringify(student));
  }

  // UNKNOWN ROUTE
  else {
    responseObject.writeHead(404, { "Content-Type": "text/plain" });
    responseObject.end("404 - Page Not Found");
  }
};

// Create the server
const server = http.createServer(handleAllRequests);

// Start server
server.listen(4000, "127.0.0.1", () => {
  console.log("My server is listening to requests on port 4000");
});
