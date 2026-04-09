// Handles req related to movie
const express = require("express");
const {authMiddleware} = require("../middleware/authMiddleware");
const {getHome,getAllMovies,getMovieById,addMovie,updateMovie,deleteMovie} = require("../controllers/movieController");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();
// send req to HomePage
router.get("/",getHome);
// send req to all Movies 
router.get("/movies",getAllMovies);
// send req to get movies based on id
router.get("/movies/:id",getMovieById);
// sends req to create new movie
router.post("/movies",authMiddleware,roleMiddleware("admin"),addMovie);
// sends req to update new movie details
router.put("/movies/:id",authMiddleware,roleMiddleware("admin"),updateMovie);
// sends req to delete new movie
router.delete("/movies/:id",authMiddleware,roleMiddleware("admin"),deleteMovie);

module.exports = router;




