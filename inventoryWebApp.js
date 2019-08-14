// Load the http module to create an http server.
const http = require('http');
const { upSertLocation } = require("./server/db/inventoryLocations");

// Configure our HTTP server to respond with Hello World to all requests.
const server = http.createServer(async (request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    const result = await upSertLocation({_id: 1, name: "isle2rack3", location: 2});
    console.log(result);
    response.end("Hello World\n");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");
