// routes/labAvailabilityRoutes.js

const express = require("express");

const router = express.Router();


// ======================================================
// CONTROLLERS
// ======================================================

const {

  updateLabAvailability,

  getLabAvailability,

} = require(
  "../controllers/labAvailabilityController"
);


// ======================================================
// MIDDLEWARE
// ======================================================

const {

  protect,

  laboratoryOnly,

} = require(
  "../middleware/authMiddleware"
);


// ======================================================
// UPDATE LAB AVAILABILITY
// ======================================================

router.put(
  "/update",
  protect,
  laboratoryOnly,
  updateLabAvailability
);


// ======================================================
// GET LAB AVAILABILITY
// ======================================================

router.get(
  "/get",
  protect,
  laboratoryOnly,
  getLabAvailability
);


// ======================================================
// EXPORT ROUTER
// ======================================================

module.exports = router;