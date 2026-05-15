// routes/pharmacyAuthRoutes.js

const express = require("express");

const router = express.Router();

const {

  registerPharmacy,

  loginPharmacy,

} = require(
  "../controllers/pharmacyAuthController"
);


// ======================================================
// REGISTER PHARMACY
// ======================================================

router.post(
  "/register",
  registerPharmacy
);


// ======================================================
// LOGIN PHARMACY
// ======================================================

router.post(
  "/login",
  loginPharmacy
);


// ======================================================
// EXPORT ROUTER
// ======================================================

module.exports = router;