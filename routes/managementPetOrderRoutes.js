const express =
  require("express");

const router =
  express.Router();

const {

  getMyPharmacyOrders,

  getSinglePharmacyOrder,

} = require(
  "../controllers/managementPetOrderController"
);

const {

  protect,

  pharmacyOnly,

} = require(
  "../middleware/authMiddleware"
);



// ======================================================
// GET ALL MY ORDERS
// ======================================================

router.get(

  "/all",

  protect,

  pharmacyOnly,

  getMyPharmacyOrders

);



// ======================================================
// GET SINGLE ORDER
// ======================================================

router.get(

  "/:id",

  protect,

  pharmacyOnly,

  getSinglePharmacyOrder

);



module.exports =
  router;