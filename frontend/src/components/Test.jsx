import React from "react";

function test() {
  return <div className="w-[250px] h-[250px] bg-blue-500 m-[5px]"></div>;
}

export default test;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// function TherapyOperations() {
//   const [therapy, setTherapy] = useState({});
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState(""); // Image state to hold file information
//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get(`http://localhost:3000/api/therapies/${id}`)
//       .then((res) => {
//         const { name, description, image } = res.data.data;
//         setTherapy(res.data.data);
//         setName(name);
//         setDescription(description);
//         setImage(image);
//         console.log(res.data.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [id]);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("description", description);
//     formData.append("image", image);

//     axios
//       .put(`http://localhost:3000/api/admin/therapies/${id}`, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       })
//       .then(() => {
//         navigate("/therapies");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div>
//       <h1>Therapy Operations</h1>
//       <p>Name: {name}</p>
//       <p>Id: {therapy._id}</p>
//       <p>Description: {description}</p>
//       <p>Image: {image ? image.name : "No image selected"}</p>{" "}
//       {/* Display filename if image is selected */}
//       <form onSubmit={handleSubmit}>
//         <input
//           className="border-2 m-2 p-4 border-zinc-500"
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           className="border-2 m-2 p-4 border-zinc-500"
//           type="text"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <input
//           className="border-2 m-2 p-4 border-zinc-500"
//           type="file"
//           onChange={handleImageChange} // Handle file input separately
//         />
//         <button type="submit" className="gotoBtn">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default TherapyOperations;
