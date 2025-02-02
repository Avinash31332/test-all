import mongoose from "mongoose";

const dataSchema = mongoose.Schema({
  about: {
    aboutTitle: {
      type: String,
    },
    aboutDescription: {
      type: String,
    },
  },
});

const Data = mongoose.model("data", dataSchema);

export default Data;
