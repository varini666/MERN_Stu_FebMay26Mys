// Routing
// npm init -y
// npm install express
// "/" base url
// "/api/users"
const express = require("express")
const app = express();

// "/api/users" /create /delete /update /:id

// Router objects help organize route Groups

const apiRouter = express.Router();

apiRouter.get("/users",function(req,res){
    res.json({
        route:"/api/users",
        message:"users route inside api route"
    });
});

apiRouter.get("/orders",function(req,res){
    res.json({
        route:"/api/orders",
        message:"users route inside api route"
    });
});
// Mount the route under the /api base path
app.use("/api",apiRouter)

app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});