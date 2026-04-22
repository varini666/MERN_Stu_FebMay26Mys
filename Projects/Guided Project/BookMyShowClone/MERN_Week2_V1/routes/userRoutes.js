// Fetching the bookings based on userId
const express = require("express");
const {authMiddleware} = require("../middleware/authMiddleware");
const {bookings} = require("../controllers/bookingController");
const getBookingsByUserId = require("../controllers/userController");

const router = express.Router();

// get bookings for a specific user id
router.get("/:userId/bookings",authMiddleware,getBookingsByUserId);   //here we have written the function directly without creating the userController that's why we have created the file separately in the controller now we have 4 controller and 4 router, previously we had 3 controller and 4 routes 

module.exports = router;