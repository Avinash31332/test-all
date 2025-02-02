import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function NewTest() {
  const [therapies, setTherapies] = useState([]);
  const [search, setSearch] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const url = id
      ? `https://test-backend-0rtr.onrender.com/api/therapies/${id}`
      : `https://test-backend-0rtr.onrender.com/api/therapies`;

    axios
      .get(url)
      .then((res) => {
        setTherapies(id ? [res.data.data] : res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  const filterTherapies = therapies.filter(
    (therapy) =>
      therapy.name.toLowerCase().includes(search.toLowerCase()) ||
      therapy.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 overflow-x-hidden">
      <input
        type="text"
        placeholder="Search therapies..."
        className="mb-4 p-2 border rounded w-1/3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-2 gap-4">
        {filterTherapies.length > 0 ? (
          filterTherapies.map((therapy) => (
            <div
              key={therapy._id}
              className="flex bg-gray-100 h-[300px] rounded-lg"
            >
              {/* Left Section: Image */}
              <div className="w-1/2 bg-green-200">
                <img
                  src={therapy.image}
                  alt={therapy.name}
                  className="h-full w-full object-cover rounded-l"
                />
              </div>
              {/* Right Section: Details */}
              <div className="w-1/2 p-4 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-zinc-600">
                  {therapy.name}
                </h2>
                <p className="text-lg text-sm text-gray-700">
                  {therapy.description.length > 250
                    ? `${therapy.description.slice(0, 250)}...`
                    : therapy.description}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-2">
            No therapies found.
          </p>
        )}
      </div>
    </div>
  );
}

export default NewTest;
