import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    therapies: "",
    reason: "",
    date: "",
    time: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, age, therapies, reason, date, time } = formData;

    if (!name || !email || !phone || !age || !date || !time) {
      alert("Please fill in all required fields.");
      return;
    }

    const formattedData = {
      ...formData,
      phone: parseInt(phone) || "",
      age: parseInt(age) || "",
      therapies: therapies ? therapies.split(",").map((t) => t.trim()) : [],
    };

    axios
      .post("https://test-backend-0rtr.onrender.com/api/appointments/book", formattedData)
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="m-2 flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Book Appointment
        </h2>
        {Object.keys(formData).map((field) => (
          <div key={field} className="mb-3">
            <label className="block text-sm font-medium text-gray-700 capitalize">
              {field}
            </label>
            <input
              type={field === "date" || field === "time" ? field : "text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
              required={field !== "therapies" && field !== "description"}
            />
          </div>
        ))}
        <div className="w-full flex justify-center">
          <button type="submit" className="gotoBtn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAppointment;
