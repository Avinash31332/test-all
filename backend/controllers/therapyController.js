import TherapiesModel from "../models/therapies.model.js";

export const allTherapies = async (req, res) => {
  try {
    const therapies = await TherapiesModel.find();
    return res.status(200).json({
      count: therapies.length,
      data: therapies,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Cannot fetch data of therapies",
      error: err,
    });
  }
};

export const getTherapy = async (req, res) => {
  try {
    const { id } = req.params;
    const therapy = await TherapiesModel.findById(id); // Use findById
    if (!therapy) {
      return res.status(404).json({
        message: "Therapy not found",
      });
    }
    return res.status(200).json({ data: therapy });
  } catch (err) {
    return res.status(500).json({
      message: "Error in fetching data",
      error: err,
    });
  }
};

export const createTherapy = async (req, res) => {
  try {
    const { name, description, image } = req.body;
    if (!name || !description || !image) {
      return res.status(400).json({
        message: "Please provide all the fields",
      });
    }
    const newTherapy = await TherapiesModel.create({
      name: name,
      description: description,
      image: image,
    });
    return res.status(201).json({
      newTherapy,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error in creating a new therapy",
      error: err,
    });
  }
};

export const updateTherapy = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, image } = req.body;
    if (!name || !description || !image) {
      // Use OR to check for missing fields
      return res.status(400).json({
        message: "Please provide all the fields",
      });
    }
    const updateTherapy = await TherapiesModel.findByIdAndUpdate(
      id,
      {
        // Use findByIdAndUpdate with ID
        name,
        description,
        image,
      },
      { new: true }
    );

    if (!updateTherapy) {
      return res.status(404).json({
        message: "No therapy found",
      });
    }
    return res.status(200).json({ updateTherapy });
  } catch (err) {
    return res.status(500).json({
      message: "Error in updating therapy",
      error: err,
    });
  }
};

export const deleteTherapy = async (req, res) => {
  try {
    const { id } = req.params;
    const therapy = await TherapiesModel.findByIdAndDelete(id);
    if (!therapy) {
      return res.status(404).json({
        message: "Therapy not found",
      });
    }
    return res.status(200).json({
      message: "Therapy deleted successfully",
    });
  } catch (err) {
    return res.status(500).json({
      message: "Error in deleting therapy",
      error: err,
    });
  }
};
