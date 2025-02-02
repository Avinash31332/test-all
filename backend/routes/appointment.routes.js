import express from 'express'
import { createAppointment } from '../controllers/appointmentController.js';

const router= express.Router();


router.post("/book", createAppointment);

  

  export default router