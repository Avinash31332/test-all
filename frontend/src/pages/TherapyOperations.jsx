import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function TherapyOperations() {
  const [therapy, setTherapy] = useState({});
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(""); // Image state to hold file information
  const [small, setSmall] = useState(window.innerWidth <= 650);

  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const setDimensions = () => setSmall(window.innerWidth <= 650);
    window.addEventListener("resize", setDimensions);
    return () => {
      window.removeEventListener("resize", setDimensions);
    };
  }, []);

  useEffect(() => {
    axios
      .get(`https://test-backend-0rtr.onrender.com/api/therapies/${id}`)
      .then((res) => {
        const { name, description, image } = res.data.data;
        setTherapy(res.data.data);
        setName(name);
        setDescription(description);
        setImage(image);
        // console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   setImage(file);
  // };

  const handleUpdate = (e) => {
    e.preventDefault();
    const data = {
      name,
      description,
      image,
    };

    axios
      .put(`https://test-backend-0rtr.onrender.com/api/admin/therapies/${id}`, data)
      .then(() => {
        navigate("/therapies");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = () => {
    const ok = window.confirm("Do you want to delete?");
    if (ok) {
      axios
        .delete(`http://localhost:3000/api/admin/therapies/${id}`)
        .then(() => {
          navigate("/therapies");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-100">
      <form
        onSubmit={handleUpdate}
        className="flex justify-center items-center w-full"
      >
        <div
          className={`my-16 flex flex-col items-center justify-center  border-2 border-gray-200 rounded-xl shadow-lg shadow-zinc-200 ${
            small ? "w-full max-w-md p-4" : "w-2/4 lg:w-1/4 md:max-w-lg p-8"
          }`}
        >
          <label className="text-lg font-medium text-zinc-400">
            Name of Therapy
          </label>
          <input
            className="w-full p-2 m-2 bg-zinc-200 rounded-lg"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Therapy Name"
            required
          />
          <label className="flex text-lg font-medium text-zinc-400">
            Description (
            <label className="flex text-lg font-medium text-zinc-400">
              <p
                className={
                  description.length <= 150
                    ? "text-green-600"
                    : description.length <= 200
                    ? "text-yellow-500"
                    : description.length < 250
                    ? "text-red-400"
                    : "text-red-600"
                }
              >
                {description.length}
              </p>
              /250)
            </label>
          </label>
          <textarea
            className="w-full min-h-16 max-h-32 p-2 m-2 bg-zinc-200 rounded-lg"
            type="text"
            value={description}
            maxLength={250}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Therapy Description"
            required
          />
          <label className="text-lg font-medium text-zinc-400">
            Image Link
          </label>
          <textarea
            className="w-full p-2 min-h-8 max-h-16 m-2 bg-zinc-200 rounded-lg"
            type="text"
            value={image}
            maxLength={250}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image URL"
            required
          />
          <button type="submit" className="gotoBtn">
            Submit
          </button>
        </div>
      </form>
      <button
        className="text-white text-lg py-2 px-16 bg-red-600 rounded"
        onClick={(e) => handleDelete()}
      >
        Delete
      </button>
    </div>
  );
}

export default TherapyOperations;
