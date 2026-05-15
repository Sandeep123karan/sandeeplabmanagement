// models/labTestOrderModel.js

const mongoose = require("mongoose");

const labTestOrderSchema =
  new mongoose.Schema(

    {

      // ==================================================
      // USER
      // ==================================================

      user: {

        type:
          mongoose.Schema.Types.ObjectId,

        ref: "User",

        required: true,

      },


      // ==================================================
      // TEST DETAILS
      // ==================================================

      testName: {

        type: String,

        required: true,

        trim: true,

      },

      price: {

        type: Number,

        required: true,

      },


      // ==================================================
      // BOOKING STATUS
      // ==================================================

      status: {

        type: String,

        enum: [

          "Pending",

          "Confirmed",

          "Cancelled",

          "Sample Collected",

          "Processing",

          "Completed",

        ],

        default: "Pending",

      },


      // ==================================================
      // SAMPLE COLLECTION
      // ==================================================

      sampleCollectionType: {

        type: String,

        enum: [

          "Home",

          "Lab Visit",

        ],

        default: "Home",

      },


      // ==================================================
      // SCHEDULE DATE
      // ==================================================

      scheduledDate: {

        type: Date,

        required: true,

      },


      // ==================================================
      // REPORT
      // ==================================================

      reportUrl: {

        type: String,

        default: "",

      },


      // ==================================================
      // PAYMENT
      // ==================================================

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


      // ==================================================
      // RAZORPAY
      // ==================================================

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


      // ==================================================
      // COMPLETION
      // ==================================================

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
  "LabTestOrder",
  labTestOrderSchema
);