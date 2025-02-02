import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Therapies from "./pages/Therapies";
import TherapyOperations from "./pages/TherapyOperations";
import Navbar from "./components/Navbar";
import CreateTherapy from "./pages/CreateTherapy";
import NewTest from "./pages/NewTest";
import EditData from "./pages/editData";
import UsesNaturopathy from "./components/UsesNaturopathy";
import AdminAppointments from "./pages/AdminAppointments";
import AppointmentOperations from "./pages/AppointmentOperations";
import CreateAppointment from "./pages/createAppointment";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/therapies" element={<Therapies />} />
        <Route path="/therapies/:id" element={<TherapyOperations />} />
        <Route path="/therapies/create" element={<CreateTherapy />} />
        <Route path="/therapies/test" element={<NewTest />} />
        <Route path="/edit" element={<EditData />} />
        <Route path="/uses" element={<UsesNaturopathy />} />
        <Route path="/admin/appointments" element={<AdminAppointments />} />
        <Route
          path="/admin/appointments-operations/:id"
          element={<AppointmentOperations />}
        />
        <Route path="/appointments/create" element={<CreateAppointment />} />
      </Routes>
    </>
  );
}

export default App;
