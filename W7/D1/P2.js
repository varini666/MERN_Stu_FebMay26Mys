// Basic routing in Express
const express = require("express");

const app = express();

app.get("/",function(req,res){
    // res.send() sends a response body and ends the request automatically
    res.send("Home route in express server");
});

app.get("/about",function(req,res){
    // res.send() sends a response body and ends the request automatically
    res.send("About route in express server");
});

app.get("/product",function(req,res){
    // res.send() sends a response body and ends the request automatically
    res.send("Product route in express server");
});

app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});
