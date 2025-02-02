import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import Therapy from "../components/Therapy";

function Therapies() {
  const [therapies, setTherapies] = useState([]);
  const [search, setSearch] = useState("");
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 570);
  const [isMidScreen, setIsMidScreen] = useState(
    window.innerWidth >= 570 && window.innerWidth <= 960
  );

  //admin
  const [isAdmin, setAdmin] = useState(true);

  const { id } = useParams();

  // Handle screen resize to detect small screens
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 570);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleMidScreen = () =>
      setIsMidScreen(window.innerWidth >= 570 && window.innerWidth <= 960);
    window.addEventListener("resize", handleMidScreen);
  }, []);

  // Fetch therapies data
  useEffect(() => {
    const url = id
      ? `https://test-backend-0rtr.onrender.com/api/therapies/${id}`
      : `https://test-backend-0rtr.onrender.com/api/therapies`;

    axios
      .get(url)
      .then((res) => setTherapies(id ? [res.data.data] : res.data.data))
      .catch((err) => console.error(err.message));
  }, [id]);

  // Filter therapies based on search input
  const filteredTherapies = therapies.filter((therapy) =>
    therapy.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden">
      {/* Add Therapy Button */}
      {isAdmin ? (
        <Link to="/therapies/create">
          <button className="gotoBtn mb-4">Add Therapy</button>
        </Link>
      ) : (
        ""
      )}

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search therapies..."
        className="bg-zinc-200 w-[80%] p-2 rounded-lg my-4 focus:outline-2 focus:outline-offset-2 focus:outline-green-400 border-0
        transition-all ease-in-out duration-300
        "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Display Filtered Therapies */}
      <div className="p-4 flex flex-wrap justify-evenly">
        {filteredTherapies.map((therapy) => (
          <div
            key={therapy._id}
            className={`my-4 rounded-lg bg-gray-100 border border-gray-300 shadow-lg overflow-hidden ${
              isSmallScreen
                ? "h-[500px] w-[97%]"
                : isMidScreen
                ? "h-[500px] w-[97%] "
                : "h-[400px] flex w-[45%]"
            }`}
          >
            {/* Therapy Image */}
            <div
              className={`relative overflow-hidden flex items-center justify-center ${
                isSmallScreen
                  ? "w-full h-64"
                  : isMidScreen
                  ? "w-full h-[350px]"
                  : "w-1/2 h-full"
              }`}
            >
              {isAdmin ? (
                <Link to={`/therapies/${therapy._id}`}>
                  <button
                    className="right-[-5px] bottom-[-5px] m-2 px-4 py-1 bg-gray-700 text-xl text-gray-200
                rounded-lg absolute border-2 border-zinc-200"
                  >
                    <FontAwesomeIcon icon={faEllipsis} />
                  </button>
                </Link>
              ) : (
                ""
              )}

              <img
                src={therapy.image} // Use the correct `therapy.image` key
                alt={therapy.name}
                className="object-cover rounded-lg"
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            {/* Therapy Details */}
            <div
              className={`p-4 ${
                isSmallScreen
                  ? "w-full text-center"
                  : isMidScreen
                  ? "wfull text-center"
                  : "w-1/2 flex flex-col justify-center text-left"
              }`}
            >
              <div className="bg-gray-200 p-4 rounded-lg">
                <h1 className="text-2xl font-semibold mb-3 break-words">
                  {therapy.name}
                </h1>
                <p className="text-sm text-gray-700 break-words">
                  {therapy.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Therapies;
