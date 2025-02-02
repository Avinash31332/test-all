import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Therapies from "./Therapies";
import { useNavigate } from "react-router-dom";

function AppointmentOperations() {
  const [appointment, setAppointment] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [custom, setCustom] = useState("");
  const [emailType, setEmailType] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://test-backend-0rtr.onrender.com/api/admin/appointments/${id}`)
      .then((res) => {
        setAppointment(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch appointment details.");
        setLoading(false);
      });
  }, [id]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatTime = (timeString) => timeString?.replace(/['"]+/g, ""); // Removes escaped quotes

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedData = {
      ...appointment,
      emailType: emailType,
    };
    axios
      .put(`https://test-backend-0rtr.onrender.com/api/admin/appointments/${id}`, updatedData)
      .then((res) => {
        console.log(res.data.appointment);
        navigate("/admin/appointments");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <form onSubmit={(e) => handleUpdate(e)}>
      <div className="text-zinc-500 gap-[10px] flex flex-col m-2 p-4 border-2 border-zinc-200 rounded-xl w-[97%]">
        {/* User Details */}
        <div>
          <p className="text-zinc-600 font-medium text-lg">User Details</p>
          <div className="flex gap-[10px]">
            <label className="font-medium">Name:</label>
            <p>{appointment.name}</p>
          </div>
          <div className="flex gap-[10px]">
            <label className="font-medium">Age:</label>
            <p>{appointment.age}</p>
          </div>
        </div>
        <hr className="text-zinc-900" />

        {/* Contact Details */}
        <div>
          <p className="text-zinc-600 font-medium text-lg">Contact Details</p>
          <div className="flex gap-[10px]">
            <label className="font-medium">Phone:</label>
            <p>{appointment.phone}</p>
          </div>
          <div className="flex gap-[10px]">
            <label className="font-medium">Email:</label>
            <p>{appointment.email}</p>
          </div>
        </div>
        <hr />

        {/* Requested Timings */}
        <div>
          <p className="text-zinc-600 font-medium text-lg">Requested Timings</p>
          <div className="flex gap-[10px]">
            <label className="font-medium">Date:</label>
            {/* <p>{formatDate(appointment.date)}</p> */}
            <input
              type="date"
              className="rounded-lg border-2 m-4 text-medium p-4"
              value={
                appointment.date
                  ? new Date(appointment.date).toISOString().split("T")[0]
                  : ""
              }
              onChange={(e) =>
                setAppointment({ ...appointment, date: e.target.value })
              }
            />
          </div>
          <div className="flex gap-[10px]">
            <label className="font-medium">Time:</label>
            <p>{formatTime(appointment.time)}</p>
            <input
              type="time"
              className="rounded-lg border-2 m-4 text-medium p-4"
              value={appointment.time || ""}
              onChange={(e) =>
                setAppointment({ ...appointment, time: e.target.value })
              }
            />
          </div>
        </div>
        <hr />

        {/* Reason and Preferences */}
        <div>
          <p className="text-zinc-600 font-medium text-lg">
            Reason and Preferences
          </p>
          <div className="flex gap-[10px]">
            <label className="font-medium">Needed Therapies:</label>
            <div>
              {appointment.therapies &&
                appointment.therapies.map((therapy, index) => (
                  <p key={index}>{therapy}</p>
                ))}
            </div>
          </div>
          <div className="flex gap-[10px]">
            <label className="font-medium">Description:</label>
            <p>{appointment.reason}</p>
          </div>
        </div>
        <div>
          <p>Status : </p>
          <select
            value={appointment.status}
            className="m-2 p-4 bg-gray-100 border-2 border-gray-300 rounded-xl text-g"
            onChange={(e) =>
              setAppointment({ ...appointment, status: e.target.value })
            }
          >
            <option value="Pending">Pending</option>
            <option value="Rescheduled">Reschedule</option>
            <option value="Accepted">Accepted</option>
            <option value="Cancelled">Cancel</option>
          </select>
        </div>
      </div>
      {/* email */}
      <hr />
      {/* <div className="p-4">
        <p className="text-zinc-600 my-2 font-medium text-lg">
          Send Appointment status by Email :
        </p>
        <hr />
        <div className="p-4 flex flex-col gap-[30px] items-start">
          <div className="flex gap-[10px]">
            <input type="checkbox" name="emailType" value={"default"} />
            <label className="font-medium text-gray-600">Default</label>
          </div>
          <div className="w-[90%] flex flex-col gap-[10px] items-center">
            <label className="font-medium text-gray-500">
              Custom ( Don't select default for custom mail )
            </label>
            <textarea
              type="text"
              name="emailType"
              value={custom}
              onChange={(e) => setCustom(e.target.value)}
              className="bg-gray-100 min-h-8 max-h-32 p-4 rounded w-full"
            />
          </div>
        </div>
      </div> */}
      <div className="p-4">
        <p className="font-medium text-lg text-gray-600 m-2">Send Email</p>
        <div className="flex gap-[10px] text-lg">
          <input
            type="radio"
            name="emailType"
            onChange={(e) => setEmailType(e.target.value)}
            value="Yes"
          />
          <label className="text-gray-600">Yes</label>
        </div>
        <div className="flex gap-[10px] text-lg">
          <input
            type="radio"
            name="emailType"
            onChange={(e) => setEmailType(e.target.value)}
            value="No"
          />
          <label className="text-gray-600">No</label>
        </div>
      </div>
      <div className="p-4 flex items-center justify-center w-full h-32">
        <button className="text-xl bg-green-900 text-white p-4 px-8 rounded-xl border-2 border-green-900 hover:text-green-900 hover:bg-transparent">
          Submit
        </button>
      </div>
    </form>
  );
}

export default AppointmentOperations;
