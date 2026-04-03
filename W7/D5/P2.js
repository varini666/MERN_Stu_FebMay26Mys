// Managing sessions with express-session

const express = require("express");
const session = require("express-session");

const app = express();

app.use(session({
    secret:"Mysecretkey",
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:60*60*1000
    }
}));
// creating API
app.get("/login",function(req,res){
    // After signin we get this details about users
    req.session.user = {
        id:201,
        username:"varini",
        role:"student"
    };
    res.send("Session details stored after login");
});

app.get("/profile",function(req,res){
    if(!req.session.user){
        return res.status(401).json({
            success:false,
            message:"No active session found"
        });
    }
    res.json({
        success:true,
        sessionUser:req.session.user
    });
});

app.listen(4000,function(){
    console.log("Express-session demo server running @ http://localhost:4000");
});


// we can add or skip the JWT token it depends on the developer
//we are not doing it bcz we are concentration on server-side