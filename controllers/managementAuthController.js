const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/LabPharmacyUser");

// ================= REGISTER =================

const registerUser = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      password,
      module,
    } = req.body;

    // Validation
    if (
      !fullName ||
      !email ||
      !phone ||
      !password ||
      !module
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Module validation
    if (
      module !== "laboratory" &&
      module !== "pharmacy"
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Module must be laboratory or pharmacy",
      });
    }

    // Check existing user
    const existingUser = await User.findOne({
      email,
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    // Create user
    const user = await User.create({
      fullName,
      email,
      phone,
      password: hashedPassword,
      module,
    });

    // Token
    const token = jwt.sign(
      {
        id: user._id,
        module: user.module,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "30d",
      }
    );

    res.status(201).json({
      success: true,
      message: "Registration successful",
      token,
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
        module: user.module,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= LOGIN =================

const loginUser = async (req, res) => {
  try {
    const {
      email,
      password,
      module,
    } = req.body;

    // Validation
    if (!email || !password || !module) {
      return res.status(400).json({
        success: false,
        message:
          "Email, password and module required",
      });
    }

    // Find user
    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Check module
    if (user.module !== module) {
      return res.status(400).json({
        success: false,
        message: "Invalid module access",
      });
    }

    // Password check
    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Generate token
    const token = jwt.sign(
      {
        id: user._id,
        module: user.module,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "30d",
      }
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
        module: user.module,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};