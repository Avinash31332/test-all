import express from "express";
import {
  allTherapies,
  getTherapy,
  createTherapy,
  updateTherapy,
  deleteTherapy,
} from "../controllers/therapyController.js";
import {
  allAppointments,
  singleAppointment,
  operationAppointment,
} from "../controllers/adminController.js";
// import adminModel from "../models/admin.model.js";
import dataModel from "../models/data.model.js";
const router = express.Router();

// router.get("/", async (req, res) => {
//   const admin = await adminModel.find();
//   res.status(200).json(admin);
// });

// router.post("/update/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { pin } = req.body;
//     const admin = await adminModel.findByIdAndUpdate(id, { pin: pin });
//     return res.status(200).json(admin);
//   } catch (err) {
//     res.status(500).json({
//       message: "Error in creating admin",
//       error: err,
//     });
//   }
// });

//appointments
router.get("/appointments", allAppointments);

router.get("/appointments/:id", singleAppointment);

router.put("/appointments/:id", operationAppointment);

//therapies
router.get("/therapies", allTherapies);

router.get("/therapies/:id", getTherapy);

router.post("/therapies", createTherapy);

router.put("/therapies/:id", updateTherapy);

router.delete("/therapies/:id", deleteTherapy);

//data editable routes
router.get("/data/about", async (req, res) => {
  try {
    const aboutData = await dataModel.find();
    return res.status(200).json(aboutData);
  } catch (err) {
    return res.status(500).json({
      message: "Error in fetching data",
      error: err,
    });
  }
});

router.get("/data/about/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const aboutData = await dataModel.findOne(id);
    return res.status(200).json(aboutData);
  } catch (err) {
    return res.status(500).json({
      message: "Error in fetching data",
      error: err,
    });
  }
});

router.post("/data/about", (req, res) => {
  return res.status(404).json({
    message: "No new data can be created",
  });
});

router.put("/data/about/679f546a3fbb85fd9efb4004", async (req, res) => {
  try {
    const { aboutTitle, aboutDescription } = req.body;
    const aboutData = await dataModel.findByIdAndUpdate(
      "67968600c96441fa12b9f6c7",
      {
        about: {
          aboutTitle,
          aboutDescription,
        },
      },
      { new: true }
    );
    if (!aboutData) {
      return res.status(404).json({ message: "Data not found" });
    }
    return res.status(200).json(aboutData);
  } catch (err) {
    return res.status(500).json({
      message: "Error in updating data",
      error: err,
    });
  }
});

export default router;
