// Load the http module to create an http server.
const http = require('http');
const appRouter = require('./server/routing/appRoutes');
const port = 8000;
//Create a server
const server = http.createServer(appRouter);
//Lets start our server
server.listen(port, function () {
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", port);
});
