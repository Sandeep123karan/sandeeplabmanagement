const PetOrder =
  require(
    "../models/petOrderModel"
  );



// ======================================================
// GET MY PHARMACY ORDERS
// ======================================================

exports.getMyPharmacyOrders =
  async (req, res) => {

    try {

      const orders =
        await PetOrder.find({

          pharmacyId:
            req.user.id,

        })

          .populate(

            "user",

            "name email phone"

          )

          .sort({

            createdAt: -1,

          });



      res.status(200).json({

        success: true,

        count:
          orders.length,

        data:
          orders,

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



// ======================================================
// GET SINGLE ORDER
// ======================================================

exports.getSinglePharmacyOrder =
  async (req, res) => {

    try {

      const order =
        await PetOrder.findOne({

          _id:
            req.params.id,

          pharmacyId:
            req.user.id,

        }).populate(

          "user",

          "name email phone"

        );



      if (!order) {

        return res.status(404).json({

          success: false,

          message:
            "Order not found",

        });

      }



      res.status(200).json({

        success: true,

        data:
          order,

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