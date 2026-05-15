const mongoose = require("mongoose");


// ======================================================
// LAB REPORT SCHEMA
// ======================================================

const labReportSchema =
  new mongoose.Schema(

    {

      patient: {
        type: String,
        required: true,
      },

      test: {
        type: String,
        required: true,
      },

      doctor: {
        type: String,
        required: true,
      },

      status: {
        type: String,

        enum: [
          "Pending",
          "Completed",
          "Processing",
        ],

        default: "Pending",
      },


      // PATIENT DETAILS
      age: {
        type: String,
        default: "",
      },

      gender: {
        type: String,
        default: "",
      },


      // REPORT DETAILS
      reportId: {
        type: String,
        default: "",
      },

      sampleId: {
        type: String,
        default: "",
      },

      testValues: {
        type: String,
        default: "",
      },

      referenceRange: {
        type: String,
        default: "",
      },

      remarks: {
        type: String,
        default: "",
      },

      testDate: {
        type: String,
        default: "",
      },


      // ATTACHMENTS
      attachments: [
        {
          type: String,
        }
      ],

    },

    {
      timestamps: true,
    }

  );


// ======================================================
// EXPORT MODEL
// ======================================================

module.exports = mongoose.model(
  "LabReport",
  labReportSchema
);