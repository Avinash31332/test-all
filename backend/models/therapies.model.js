import mongoose from "mongoose";

const therapiesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Therapies = mongoose.model("Therapies", therapiesSchema);

export default Therapies;
