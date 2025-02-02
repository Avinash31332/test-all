import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

function AdminAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [filter, setFilter] = useState("All");
  const [smallScreen, setSmallScreen] = useState(window.innerWidth < 570);

  // Handle window resizing
  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth <= 570);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    axios
      .get("https://test-backend-0rtr.onrender.com/api/admin/appointments")
      .then((res) => {
        setAppointments(res.data.data || []);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="p-4">
      <p
        className={`${
          smallScreen ? "mt-32" : "mt-16"
        } p-4 text-xl font-medium text-zinc-700`}
      >
        Appointments
      </p>
      {/* Filter Dropdown and Status Indicators */}
      <div className="fixed left-0 top-[70px] w-full flex flex-wrap gap-4 items-center bg-gray-100 p-4 rounded-md">
        {/* Filter Dropdown */}
        <select
          className="p-2 px-4 outline-0 rounded-lg border"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Rescheduled">Re-Scheduled</option>
          <option value="Accepted">Accepted</option>
          <option value="Cancelled">Cancelled</option>
        </select>

        {/* Status Colors */}
        <div className="flex flex-wrap gap-2">
          <span className="rounded border p-2 bg-green-300 text-sm">
            Accepted
          </span>
          <span className="rounded border p-2 bg-orange-300 text-sm">
            Re-Scheduled
          </span>
          <span className="rounded border p-2 bg-yellow-200 text-sm">
            Pending
          </span>
          <span className="rounded border p-2 bg-red-300 text-sm">
            Cancelled
          </span>
        </div>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto mt-4">
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr className="bg-green-700 text-gray-200">
              <th className="border border-slate-600 rounded-md p-2">No</th>
              <th className="border border-slate-600 rounded-md p-2">Name</th>
              {!smallScreen && (
                <>
                  <th className="border border-slate-600 rounded-md p-2">
                    Status
                  </th>
                  <th className="border border-slate-600 rounded-md p-2">
                    Phone
                  </th>
                </>
              )}
              <th className="border border-slate-600 rounded-md p-2">
                Operations
              </th>
            </tr>
          </thead>
          <tbody>
            {(filter === "All"
              ? appointments
              : appointments.filter((a) => a.status === filter)
            ).map((appointment, index) => (
              <tr
                key={appointment._id}
                className={`h-8 ${
                  appointment.status === "Accepted"
                    ? "bg-green-300"
                    : appointment.status === "Rescheduled"
                    ? "bg-orange-300"
                    : appointment.status === "Cancelled"
                    ? "bg-red-300"
                    : "bg-yellow-200"
                }`}
              >
                <td className="border border-slate-700 rounded-md text-center p-2">
                  {index + 1}
                </td>
                <td className="border border-slate-700 rounded-md text-center p-2">
                  {appointment.name}
                </td>
                {!smallScreen && (
                  <>
                    <td className="border border-slate-700 rounded-md text-center p-2">
                      {appointment.status}
                    </td>
                    <td className="border border-slate-700 rounded-md text-center p-2">
                      {appointment.phone}
                    </td>
                  </>
                )}
                <td className="border bg-gray-200 hover:bg-gray-300 border-slate-700 rounded-md text-center p-2">
                  <Link
                    to={`/admin/appointments-operations/${appointment._id}`}
                  >
                    <FontAwesomeIcon
                      className="text-zinc-600"
                      icon={faEllipsis}
                    />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminAppointments;
