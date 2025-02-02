import express from "express";
import appointmentModel from "../models/appointment.model.js";

export const createAppointment = async (req, res) => {
  try {
    const { name, email, phone, age, therapies, date, time, description } =
      req.body;

    if (!name || !email || !phone || !age || !therapies || !date || !time) {
      return res.status(404).json({
        message: "Please provide all the fields",
      });
    }
    const newAppointment = new appointmentModel({
      name,
      email,
      phone,
      age,
      therapies,
      date,
      time,
      description,
    });

    await newAppointment.save();
    return res.status(201).json({
      message: "Appointment booked successfully",
      appointment: newAppointment,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error booking the appointment", details: error.message });
  }
};
