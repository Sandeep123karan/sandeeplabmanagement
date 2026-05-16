// models/labAvailabilityModel.js

const mongoose = require("mongoose");


// ======================================================
// LAB AVAILABILITY SCHEMA
// ======================================================

const labAvailabilitySchema =
  new mongoose.Schema(

    {

      // ==========================================
      // LABORATORY ID
      // ==========================================

      laboratoryId: {

        type:
          mongoose.Schema.Types.ObjectId,

        ref: "LaboratoryUser",

        required: true,

        unique: true,

      },


      // ==========================================
      // ONLINE / OFFLINE
      // ==========================================

      is_online: {

        type: Boolean,

        default: false,

      },

    },

    {

      timestamps: true,

    }

  );


// ======================================================
// SAFE EXPORT MODEL
// ======================================================

const LabAvailability =
  mongoose.models.LabAvailability ||

  mongoose.model(
    "LabAvailability",
    labAvailabilitySchema
  );

module.exports = LabAvailability;