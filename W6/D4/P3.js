// Inspecting request details in an HTTP server 

const http = require("http");

const server = http.createServer(function(req,res){
    // writeHead() sets the response status code and headers
    res.writeHead(200,{"content-type":"text/plain"});
    // end() sends the response body & closes the response
    // req.method tells the HTTP method, GET & POST
    res.end("Method: "+req.method+"\nURL:"+req.url);
});

server.listen(3001,function(){   //3000 is a port number
    console.log("Server is running at http://localhost:3001");
});