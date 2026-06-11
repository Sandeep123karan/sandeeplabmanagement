const Billing =
  require("../models/billingModel");

const Appointment =
  require("../models/appointmentModel");


/* =====================================
   CREATE BILL
===================================== */

exports.createBill =
  async (req, res) => {

    try {

      const {

        appointmentId,

        consultationFee,

        registrationFee,

        otherCharges,

        discount,

      } = req.body;


      // =========================
      // VALIDATION
      // =========================

      if (
        !appointmentId
      ) {

        return res.status(400).json({

          success: false,

          message:
            "Appointment ID required",

        });

      }

      if (
        !consultationFee
      ) {

        return res.status(400).json({

          success: false,

          message:
            "Consultation fee required",

        });

      }


      // =========================
      // FIND APPOINTMENT
      // =========================

      const appointment =
        await Appointment.findOne({

          _id:
            appointmentId,

          receptionId:
            req.user.id,

        });

      if (!appointment) {

        return res.status(404).json({

          success: false,

          message:
            "Appointment not found",

        });

      }


      // =========================
      // TOTAL CALCULATION
      // =========================

      const totalAmount =

        Number(
          consultationFee || 0
        )

        +

        Number(
          registrationFee || 0
        )

        +

        Number(
          otherCharges || 0
        )

        -

        Number(
          discount || 0
        );


      // =========================
      // CREATE BILL
      // =========================

      const bill =
        await Billing.create({

          appointmentId,

          receptionId:
            req.user.id,

          patientName:
            appointment.patientName,

          patientPhone:
            appointment.patientPhone,

          consultationFee,

          registrationFee,

          otherCharges,

          discount,

          totalAmount,
          paymentStatus: "Paid",

        });


      // =========================
      // RESPONSE
      // =========================

      res.status(201).json({

        success: true,

        message:
          "Bill created successfully",

        bill,

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message:
          error.message,

      });

    }

  };


/* =====================================
   GET ALL BILLS
===================================== */

exports.getAllBills =
  async (req, res) => {

    try {

      const bills =
        await Billing.find({

          receptionId:
            req.user.id,

        })

        .sort({

          createdAt: -1,

        });

      res.status(200).json({

        success: true,

        total:
          bills.length,

        bills,

      });

    } catch (error) {

      res.status(500).json({

        success: false,

        message:
          error.message,

      });

    }

  };