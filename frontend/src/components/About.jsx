import React, { useState, useEffect } from "react";
import GotoButton from "./GotoButton";
import axios from "axios";
import { useParams } from "react-router-dom";
function About() {
  const [data, setData] = useState({});
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [small, setSmall] = useState(window.innerWidth <= 650);
  const windowDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    setSmall(window.innerWidth <= 650);
  };

  const { id } = useParams();

  useEffect(() => {
    window.addEventListener("resize", windowDimensions);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", windowDimensions);
    };
  }, []);

  useEffect(() => {
    axios.get(`https://test-backend-0rtr.onrender.com/api/admin/data/about`).then((res) => {
      setData(res.data[0].about);
    });
  }, []);
  return (
    <div
      className={`
        ${
          small
            ? "about-container py-16 p-7 flex-col text-center text-lg justify-center"
            : "h-[100vh] about-container p-7 flex items-center text-center text-xl py-[60px]"
        }`}
    >
      <div
        className={
          small
            ? "w-full"
            : "flex flex-col items-start px-4 w-1/2 justify-center"
        }
      >
        <p className="uppercase">About</p>
        <h1
          className={` font-sans 
          ${
            small
              ? "text-2xl font-medium"
              : "text-4xl font-medium italic text-zinc-700"
          }`}
        >
          {data.aboutTitle}
        </h1>
      </div>
      <p
        className={
          small
            ? "py-2"
            : `px-8 leading-[40px] w-1/2 font-medium text-2xl text-gray-700`
        }
      >
        {data.aboutDescription}
        <br />
        {small ? "" : <GotoButton title="Know More" />}
      </p>
      {small ? <GotoButton title="Know More" /> : ""}
    </div>
  );
}

export default About;
