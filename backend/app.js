import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./config/db.js";
import appointmentRouter from "./routes/appointment.routes.js";
import adminRouter from "./routes/admin.routes.js";
import therapiesRouter from "./routes/therapies.routes.js";
dotenv.config();
db();
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(
//   cors({
//     origin: "http://localhost:5173", // Frontend URL
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

app.get("/", (req, res) => {
  res.send("This is homepage");
});

app.use("/api/appointments", appointmentRouter);
app.use("/api/admin", adminRouter);
app.use("/api/therapies", therapiesRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
