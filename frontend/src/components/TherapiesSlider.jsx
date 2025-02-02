import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Therapy from "./Therapy";
import { Link } from "react-router-dom";

const TherapiesSlider = () => {
  //screen size
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 650);

  const [therapies, setTherapies] = useState([]);
  const [visibleDots, setVisibleDots] = useState(5);
  const [currentSlide, setCurrentSlide] = useState(0);

  //small screen size
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 650);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch data from the API
  useEffect(() => {
    axios
      .get("https://test-backend-0rtr.onrender.com/api/therapies")
      .then((res) => {
        setTherapies(res.data.data); // Assuming `res.data` contains an array of therapies
      })
      .catch((err) => {
        console.error("Error fetching therapies:", err);
      });
  }, []);

  // Update visible dots after a slide change
  useEffect(() => {
    if (
      currentSlide >= visibleDots - 1 &&
      currentSlide + 1 >= therapies.length
    ) {
      setVisibleDots(visibleDots + 5);
    }
  }, [currentSlide, visibleDots, therapies.length]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false, // Vertical slider
    verticalSwiping: false,
    autoplay: true, // Automatic slide change
    autoplaySpeed: 3000, // Slide every 3 seconds
    dotsClass: "slick-dots custom-dots", // Custom dots class
    beforeChange: (current, next) => setCurrentSlide(next), // Track the slide change
  };

  return (
    <div className="p-4">
      <div className="flex items-center w-[95%] justify-between">
        <h2
          className={`text-zinc-800  font-bold  mb-4 ${
            isSmallScreen ? "mx-2 text-xl" : "mx-16 text-3xl"
          }`}
        >
          Our Therapies
        </h2>
        <Link to={"/therapies"}>
          <button className="gotoBtn">Show All</button>
        </Link>
      </div>
      <Slider {...settings} className="h-[500px]">
        {therapies.map((therapy) => (
          <Therapy key={therapy._id} therapy={therapy} />
        ))}
      </Slider>
    </div>
  );
};

export default TherapiesSlider;
