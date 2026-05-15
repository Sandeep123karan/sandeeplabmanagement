// models/labBookingModel.js

const mongoose = require("mongoose");

const labBookingSchema =
  new mongoose.Schema(
    {
      // =====================================
      // USER
      // =====================================

      user: {
        type:
          mongoose.Schema.Types.ObjectId,

        ref: "User",

        required: true,
      },

      // =====================================
      // TEST DETAILS
      // =====================================

      testName: {
        type: String,
        required: true,
      },

      price: {
        type: Number,
        required: true,
      },

      // =====================================
      // STATUS
      // =====================================

      status: {
        type: String,

        enum: [
          "Pending",
          "Confirmed",
          "Processing",
          "Completed",
          "Cancelled",
        ],

        default: "Pending",
      },

      // =====================================
      // SAMPLE COLLECTION
      // =====================================

      sampleCollectionType: {
        type: String,

        enum: [
          "Home",
          "Lab Visit",
        ],

        default: "Home",
      },

      // =====================================
      // DATE
      // =====================================

      scheduledDate: {
        type: Date,
      },

      // =====================================
      // REPORT
      // =====================================

      reportUrl: {
        type: String,
        default: "",
      },

      // =====================================
      // PAYMENT
      // =====================================

      paymentMethod: {
        type: String,

        enum: [
          "COD",
          "ONLINE",
        ],

        default: "ONLINE",
      },

      paymentStatus: {
        type: String,

        enum: [
          "PENDING",
          "PAID",
          "FAILED",
        ],

        default: "PENDING",
      },

      // =====================================
      // RAZORPAY
      // =====================================

      razorpayOrderId: {
        type: String,
        default: "",
      },

      razorpayPaymentId: {
        type: String,
        default: "",
      },

      razorpaySignature: {
        type: String,
        default: "",
      },

      // =====================================
      // COMPLETED
      // =====================================

      isCompleted: {
        type: Boolean,
        default: false,
      },
    },

    {
      timestamps: true,
    }
  );

module.exports = mongoose.model(
  "LabBooking",
  labBookingSchema
);