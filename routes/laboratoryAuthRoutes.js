// routes/laboratoryAuthRoutes.js

const express = require("express");

const router = express.Router();

const {

  registerLaboratory,

  loginLaboratory,

  getLaboratoryProfile,

} = require(
  "../controllers/laboratoryAuthController"
);

const {

  protect,

  laboratoryOnly,

} = require(
  "../middleware/authMiddleware"
);


// ======================================================
// REGISTER LABORATORY
// ======================================================

router.post(
  "/register",
  registerLaboratory
);


// ======================================================
// LOGIN LABORATORY
// ======================================================

router.post(
  "/login",
  loginLaboratory
);


// ======================================================
// GET LABORATORY PROFILE
// ======================================================

router.get(
  "/profile",
  protect,
  laboratoryOnly,
  getLaboratoryProfile
);


// ======================================================
// EXPORT ROUTER
// ======================================================

module.exports = router;