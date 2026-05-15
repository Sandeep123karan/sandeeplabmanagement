const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// ======================================================
// LABORATORY AUTH ROUTES
// ======================================================

app.use(
  "/api/laboratory-auth",
  require(
    "./routes/laboratoryAuthRoutes"
  )
);
// ======================================================
// PHARMACY AUTH ROUTES
// ======================================================

app.use(
  "/api/pharmacy-auth",
  require(
    "./routes/pharmacyAuthRoutes"
  )
);
app.use(
  "/api/diagnostic-test",
  require("./routes/diagnosticTestRoutes")
);
const labManagementRoutes = require(
  "./routes/labManagementRoutes"
);

app.use(
  "/api/lab-management",
  labManagementRoutes
);app.use(
  "/api/lab-booking-management",
  require(
    "./routes/labBookingManagementRoutes"
  )
);
// ======================================================
// LAB PERFORMANCE ROUTES
// ======================================================

app.use(
  "/api/lab-performance",
  require(
    "./routes/labPerformanceRoutes"
  )
);
// ======================================================
// LAB REPORT ROUTES
// ======================================================

app.use(
  "/api/lab-reports",
  require(
    "./routes/labReportRoutes"
  )
);
app.use(
  "/api/schedules",
  require("./routes/scheduleRoutes")
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});