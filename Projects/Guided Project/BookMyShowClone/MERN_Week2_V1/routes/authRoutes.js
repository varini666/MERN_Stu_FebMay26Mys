// Routes created for login, logout & profiles
const express = require("express");
const {authMiddleware} = require("../middleware/authMiddleware");
const {loginUser,logoutUser,getProfile} = require("../controllers/authController");

const router = express.Router();

router.post("/login",loginUser);
router.post("/logout",logoutUser);
router.get("/profile",authMiddleware,loginUser);   //If the user as logged in then it will send to authMiddleware, if not redirect to loginUser

module.exports = router;