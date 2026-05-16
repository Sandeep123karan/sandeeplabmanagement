const mongoose = require("mongoose");


// ======================================================
// PHARMACY SCHEDULE SCHEMA
// ======================================================

const pharmacyScheduleSchema =
  new mongoose.Schema(

    {

      // ==========================================
      // LOGIN PHARMACY
      // ==========================================

      pharmacy: {

        type:
          mongoose.Schema.Types.ObjectId,

        ref: "PharmacyUser",

        required: true,

      },


      // ==========================================
      // DAY
      // ==========================================

      day: {

        type: String,

        required: true,

      },


      // ==========================================
      // OPEN STATUS
      // ==========================================

      isOpen: {

        type: Boolean,

        default: true,

      },


      // ==========================================
      // OPENING TIME
      // ==========================================

      openingTime: {

        type: String,

        default: "",

      },


      // ==========================================
      // CLOSING TIME
      // ==========================================

      closingTime: {

        type: String,

        default: "",

      },


      // ==========================================
      // HOLIDAY
      // ==========================================

      isHoliday: {

        type: Boolean,

        default: false,

      },


      // ==========================================
      // HOLIDAY TITLE
      // ==========================================

      holidayTitle: {

        type: String,

        default: "",

      },


      // ==========================================
      // HOLIDAY DATE
      // ==========================================

      holidayDate: {

        type: Date,

      },

    },

    {

      timestamps: true,

    }

  );


// ======================================================
// EXPORT MODEL
// ======================================================

module.exports = mongoose.model(

  "PharmacySchedule",

  pharmacyScheduleSchema

);