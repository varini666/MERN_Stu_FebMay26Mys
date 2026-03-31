// Route parameters and query parameters
// Route parameters: capture dynamic values from the path
// Query parameters: provide optional values

const express = require("express")

const app = express();

app.get("/product/:id",function(req,res){
    res.json({
        routeParameter: req.params.id,//router and queryParameters are user-defined
        queryParameters: req.query
    });
});

app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});