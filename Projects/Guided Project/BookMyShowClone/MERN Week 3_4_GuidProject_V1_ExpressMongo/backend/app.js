const express = require('express');
const authRoutes = require("./route/auth.routes"); 
const app = express();
app.use(express.json());
app.use("/api/auth",authRoutes);

// Base URL

app.get("/",(req,res)=>{
    res.status(200).json({
    success:true,
    message:"Movie booking API is running..."
});
});
module.exports = app;