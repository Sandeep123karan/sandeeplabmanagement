const DiagnosticTest = require(
  "../models/DiagnosticTest"
);

// ================= CREATE TEST =================

const createDiagnosticTest = async (
  req,
  res
) => {
  try {
    const {
      testName,
      category,
      price,
      description,
      image,
    } = req.body;

    // Validation
    if (
      !testName ||
      !category ||
      !price ||
      !description
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Create
    const test = await DiagnosticTest.create({
      testName,
      category,
      price,
      description,
      image,
    });

    res.status(201).json({
      success: true,
      message:
        "Diagnostic test created successfully",
      data: test,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= GET ALL TESTS =================

const getAllDiagnosticTests = async (
  req,
  res
) => {
  try {
    const tests =
      await DiagnosticTest.find().sort({
        createdAt: -1,
      });

    res.status(200).json({
      success: true,
      count: tests.length,
      data: tests,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= GET SINGLE TEST =================

const getSingleDiagnosticTest = async (
  req,
  res
) => {
  try {
    const test = await DiagnosticTest.findById(
      req.params.id
    );

    if (!test) {
      return res.status(404).json({
        success: false,
        message: "Diagnostic test not found",
      });
    }

    res.status(200).json({
      success: true,
      data: test,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= UPDATE TEST =================

const updateDiagnosticTest = async (
  req,
  res
) => {
  try {
    const test = await DiagnosticTest.findById(
      req.params.id
    );

    if (!test) {
      return res.status(404).json({
        success: false,
        message: "Diagnostic test not found",
      });
    }

    const updatedTest =
      await DiagnosticTest.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

    res.status(200).json({
      success: true,
      message:
        "Diagnostic test updated successfully",
      data: updatedTest,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= DELETE TEST =================

const deleteDiagnosticTest = async (
  req,
  res
) => {
  try {
    const test = await DiagnosticTest.findById(
      req.params.id
    );

    if (!test) {
      return res.status(404).json({
        success: false,
        message: "Diagnostic test not found",
      });
    }

    await DiagnosticTest.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message:
        "Diagnostic test deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createDiagnosticTest,
  getAllDiagnosticTests,
  getSingleDiagnosticTest,
  updateDiagnosticTest,
  deleteDiagnosticTest,
};