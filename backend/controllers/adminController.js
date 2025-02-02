import express from "express";
import mongoose from "mongoose";
import appointmentModel from "../models/appointment.model.js";

export const allAppointments = async (req, res) => {
  try {
    const allAppointments = await appointmentModel.find();
    if (!allAppointments) {
      return res.status(200).json({
        message: "No appointment requests found",
      });
    }
    return res.status(200).json({
      message: "success",
      count: allAppointments.length,
      data: allAppointments,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Error in fetching data",
      error: err,
    });
  }
};

export const singleAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await appointmentModel.findById(id);
    if (!appointment) {
      return res.status(400).json({
        message: "No appointment found with the id",
      });
    }
    return res.status(200).json(appointment);
  } catch (err) {
    return res.status(500).json({
      message: "Error in fetching data",
      error: err,
    });
  }
};

export const operationAppointment = async (req, res) => {
  try {
    const { date, time, therapies, status, emailType } = req.body;

    // Validate ObjectId
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ error: "Invalid appointment ID" });
    }

    // Validate date format
    if (date && !Date.parse(date)) {
      return res.status(400).json({ error: "Invalid date format" });
    }

    // Build updates dynamically
    const updates = { status: status };
    if (date) updates.date = date;
    if (time) updates.time = time;
    if (therapies) updates.therapies = therapies;
    if (emailType) updates.emailType = emailType;

    // Update the appointment
    const updatedAppointment = await appointmentModel.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true }
    );

    if (!updatedAppointment) {
      return res.status(404).json({ error: "Appointment not found" });
    }

    return res.status(200).json({
      message: "Appointment updated successfully",
      appointment: updatedAppointment,
    });
  } catch (error) {
    console.error(
      `Error updating appointment ${req.params.id}:`,
      error.message
    );
    res.status(500).json({
      error: "Error updating the appointment",
      details: error.message,
    });
  }
};
