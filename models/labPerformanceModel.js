const mongoose = require("mongoose");


// ======================================================
// TOP TEST SCHEMA
// ======================================================

const performedTestSchema =
  new mongoose.Schema({

    test_name: {
      type: String,
      default: "",
    },

    total_tests_done: {
      type: String,
      default: "",
    },

    progress: {
      type: Number,
      default: 0,
    },

  });


// ======================================================
// LAB PERFORMANCE SCHEMA
// ======================================================

const labPerformanceSchema =
  new mongoose.Schema(

    {

      avg_tat: {
        type: String,
        default: "",
      },

      accuracy: {
        type: String,
        default: "",
      },

      patient_satisfaction: {
        type: Number,
        default: 0,
      },

      patient_rating: {
        type: Number,
        default: 0,
      },

      top_tests: [
        performedTestSchema
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
  "LabPerformance",
  labPerformanceSchema
);