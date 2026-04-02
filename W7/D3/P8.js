// JWT flow with login, refresh-style logic and secure verification
const jwt = require("jsonwebtoken");
const express = require("express");

const app = express();
app.use(express.json());

const secretKey = "Mysecretkey";
const refreshSecretKey = "MyNewsecretkey";
// in-memory storage for refresh token
const refreshTokens = [];
function authenticateAccessToken(req,res,next){
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if(!token){
        return res.status(401).json({
            success:false,
            message:"Bearer token is missing."
        });
    }
    try{
        req.user = jwt.verify(token,secretKey,{
            algorithms:["HS256"],
            issuer:"jwt-example"
        });
        next();
    }
    catch(error){
        if(error.name === "TokenExpiredError"){
            return res.status(401).json({
                success:false,
                message:"Access token has expired"
            });
        }
        return res.status(401).json({
            success:false,
            message:"Access token is invalid"
        });
    }
}

app.post("/login",function(req,res){
    const {email,password} = req.body;
    if(email!=="email@email.com" || password!=="pass@123"){
        return res.status(401).json({
            success:false,
            message:"Invalid credentials"
        });
    }
    const accessToken = jwt.sign({
        userId:101,
        email:email,
        role:"member"
    },secretKey,{expiresIn:"1h",
        algorithm:"HS256",
        issuer:"jwt-example"}
        );

        const refreshToken = jwt.sign({
            userId:101,
            email:email
        },refreshSecretKey,{expiresIn:"10d",
            algorithm:"HS256",
            issuer:"jwt-example"}
        );
        refreshTokens.push(refreshToken);
        res.json({
            success:true,
            message:"Login successful",
            accessToken:accessToken,
            refreshToken:refreshToken
        });
});

app.post("/refresh",function(req,res){
    const {refreshToken} = req.body;
    if(!refreshToken || !refreshTokens.includes(refreshToken)){
        return res.status(401).json({
            success:false,
            message:"Refresh Token is missing or Invalid"
        });
    }
    try{
        const decoded = jwt.verify(refreshToken,refreshSecretKey,
            {
                algorithms:["HS256"],
                issuer:"jwt-example"
            }
        );
        const newAccessToken = jwt.sign({
            userId:decoded.userId,
            email:decoded.email,
            role:"member"
        },secretKey,{
            expiresIn:"15m",
            algorithm:"HS256",
            issuer:"jwt-example"

        });
        res.json({
            success:true,
            accessToken:newAccessToken
        });
    }
    catch(error){
        res.status(403).json({
            success:false,
            message:"Refresh token verification failed"
        });
    }
});
app.get("/me",authenticateAccessToken,function(req,res){
    res.json({
        success:true,
        message:"Protected user route",
        user:req.user
    });
});

app.listen(4000,function(){
    console.log("JWT demo server running @ http://localhost:4000");
});

// curl -X POST http://localhost:4000/login -H "Content-Type:application/json" -d "{\"email\":\"email@email.com\",\"password\":\"pass@123\"}"
// output = {"success":true,"message":"Login successful","accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMSwiZW1haWwiOiJlbWFpbEBlbWFpbC5jb20iLCJyb2xlIjoibWVtYmVyIiwiaWF0IjoxNzc1MTEzNDQ3LCJleHAiOjE3NzUxMTQwNDcsImlzcyI6Imp3dC1leGFtcGxlIn0.LU-wg20fR-yBEssiXTTN0VxUiEs_kNh8hCj9K3-ddRw","refreshToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMSwiZW1haWwiOiJlbWFpbEBlbWFpbC5jb20iLCJpYXQiOjE3NzUxMTM0NDcsImV4cCI6MTc3NTk3NzQ0NywiaXNzIjoiand0LWV4YW1wbGUifQ.uEL_TQUdbxNmpgw-TEENuO0MC6aTtFN5NNR_BIp2rYo"}
// copy refreshToken
// curl -X POST http://localhost:4000/refresh -H "Content-Type:application/json" -d "{\"refreshToken\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMSwiZW1haWwiOiJlbWFpbEBlbWFpbC5jb20iLCJpYXQiOjE3NzUxMTM0NDcsImV4cCI6MTc3NTk3NzQ0NywiaXNzIjoiand0LWV4YW1wbGUifQ.uEL_TQUdbxNmpgw-TEENuO0MC6aTtFN5NNR_BIp2rYo\"}"
// output = {"success":true,"accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMSwiZW1haWwiOiJlbWFpbEBlbWFpbC5jb20iLCJyb2xlIjoibWVtYmVyIiwiaWF0IjoxNzc1MTEzNDkyLCJleHAiOjE3NzUxMTQzOTIsImlzcyI6Imp3dC1leGFtcGxlIn0.5iTeCb-ZUe9Jg_54AS2wjB90Vm1bxw6H9C_RzGzjdv4"}
// copy accessToken
// curl http://localhost:4000/me -H "Authorization:Bearer "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMSwiZW1haWwiOiJlbWFpbEBlbWFpbC5jb20iLCJyb2xlIjoibWVtYmVyIiwiaWF0IjoxNzc1MTEzNDkyLCJleHAiOjE3NzUxMTQzOTIsImlzcyI6Imp3dC1leGFtcGxlIn0.5iTeCb-ZUe9Jg_54AS2wjB90Vm1bxw6H9C_RzGzjdv4"
//output = {"success":true,"message":"Protected user route","user":{"userId":101,"email":"email@email.com","role":"member","iat":1775113492,"exp":1775114392,"iss":"jwt-example"}}
