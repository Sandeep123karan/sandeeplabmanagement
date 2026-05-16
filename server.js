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
// server.js

const labAvailabilityRoutes =
require("./routes/labAvailabilityRoutes");


// ROUTES
app.use(
  "/api/lab-availability",
  labAvailabilityRoutes
);
// ======================================================
// PHARMACY ORDER ROUTES
// ======================================================

app.use(
  "/api/pharmacy-orders",
  require(
    "./routes/pharmacyOrderRoutes"
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
app.use(
  "/api/pharmacy-settings",
  require(
    "./routes/pharmacySettingsRoutes"
  )
);
// server.js

const bookingLabRoutes =
require(
  "./routes/bookingLabRoutes"
);

app.use(
  "/api/booking-lab",
  bookingLabRoutes
);
// ======================================================
// PHARMACY PRODUCT ROUTES
// ======================================================

app.use(
  "/api/pharmacy-products",
  require(
    "./routes/pharmacyProductRoutes"
  )
);
app.use(
  "/api/pickup-orders",
  require(
    "./routes/pickupOrderRoutes"
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