const express = require("express");
const router = express.Router();
// const Restaurant = require('../models/Restaurant');

const restaurantController = require("../controllers/restaurantController");

router.get("/restaurants", restaurantController.getRestaurantsNearLocation);

module.exports = router;
