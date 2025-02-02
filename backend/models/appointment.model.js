import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  age: { type: Number, required: true },
  therapies: { type: [String] }, // Array of selected therapies
  date: { type: Date, required: true },
  time: { type: String, required: true },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rescheduled", "Cancelled"],
    default: "Pending",
  },
  description: { type: String },
  emailType: { type: String },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;
