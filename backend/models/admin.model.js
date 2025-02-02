import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  name: String,
  pin: Number,
});

const admin = mongoose.model("admin", adminSchema);

export default admin;
