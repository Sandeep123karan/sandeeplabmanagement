// routes/bookingLabRoutes.js

const express = require("express");

const router = express.Router();

const {

  getAllBookings,

  getSingleBooking,

  acceptBooking,

  rejectBooking,

  completeBooking,

} = require(
  "../controllers/bookingLabController"
);

const {

  protect,

  laboratoryOnly,

} = require(
  "../middleware/authMiddleware"
);


// ======================================================
// GET ALL BOOKINGS
// ======================================================

router.get(
  "/all",
  protect,
  laboratoryOnly,
  getAllBookings
);


// ======================================================
// GET SINGLE BOOKING
// ======================================================

router.get(
  "/:id",
  protect,
  laboratoryOnly,
  getSingleBooking
);


// ======================================================
// ACCEPT BOOKING
// ======================================================

router.put(
  "/accept/:id",
  protect,
  laboratoryOnly,
  acceptBooking
);


// ======================================================
// REJECT BOOKING
// ======================================================

router.put(
  "/reject/:id",
  protect,
  laboratoryOnly,
  rejectBooking
);


// ======================================================
// COMPLETE BOOKING
// ======================================================

router.put(
  "/complete/:id",
  protect,
  laboratoryOnly,
  completeBooking
);


module.exports = router;