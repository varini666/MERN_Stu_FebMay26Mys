// JWT fundamentals: token generation & verification
const jwt = require("jsonwebtoken");

const secretKey = "monkey123";
// payload holds small non-sensitive data
const payload = {
    userID:101,
    role:"member"
};
// token creation
// jwt.sign() creates a signed jwt token
const token = jwt.sign(payload,secretKey,{expiresIn:"1h"});

console.log("Token generated successfully\n",token);

const tokenParts = token.split(".");
console.log("Header section:",tokenParts[0]);
console.log("Payload section:",tokenParts[1]);
console.log("Signature section:",tokenParts[2]);
console.log("JWT part count:",tokenParts.length);
// const newsecretKey = "donkey123";
try{
    // jwt.verify() checks trust, signature and expiration
    const verifiedPayload = jwt.verify(token,secretKey);
    // new secret key
    // const verifiedPayload = jwt.verify(token,newsecretKey);
    console.log("verified payload",verifiedPayload);
}
catch(error){
    console.log("verification failed",error.message);
}

const decodeWithoutVerification = jwt.decode(token);
console.log("Decoded token:",decodeWithoutVerification);