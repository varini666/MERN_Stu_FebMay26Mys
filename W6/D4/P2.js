// Creating a simple HTTP server

const http = require("http");

// createServer(): creates a HTTP server instance
// Accepts a callback with to important objects:
// 1.req: incoming request details
// 2.res: outgoing response control

const server = http.createServer(function(req,res){
    // writeHead() sets the response status code and headers
    res.writeHead(200,{"content-type":"text/plain"});
    // end() sends the response body & closes the response
    res.end("Hello from NodeJS HTTP server.");
});
// listen() binds the server to a port and starts accepting request
server.listen(3000,function(){   //3000 is a port number
    console.log("Server is running at http://localhost:3000");
})

// Port no
// 0-1023: system ports
// 1024-49151: "Registered ports"
// 27017: mongoDB
