// models/petCareProductModel.js

const mongoose =
  require("mongoose");



// ======================================================
// PET CARE PRODUCT SCHEMA
// ======================================================

const petCareProductSchema =
  new mongoose.Schema(

    {

      // ================= PRODUCT NAME =================

      name: {

        type: String,

        required: true,

        trim: true,

      },



      // ================= CATEGORY =================

      category: {

        type: String,

        required: true,

        trim: true,

      },



      // ================= DESCRIPTION =================

      description: {

        type: String,

        default: "",

      },



      // ================= PRICE =================

      price: {

        type: Number,

        required: true,

      },



      // ================= STOCK =================

      stock: {

        type: Number,

        default: 0,

      },



      // ================= IMAGE =================

      image: {

        type: String,

        default: "",

      },



      // ================= BRAND =================

      brand: {

        type: String,

        default: "",

      },



      // ================= PET TYPE =================

      petType: {

        type: String,

        default: "",

      },



      // ================= STATUS =================

      isAvailable: {

        type: Boolean,

        default: true,

      },

    },

    {

      timestamps: true,

    }

  );



module.exports =
  mongoose.model(

    "PetCareProduct",

    petCareProductSchema

  );