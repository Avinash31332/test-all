import React from "react";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className="w-[99.7%] hero-section w-screen h-screen relative flex items-center bg-gradient-to-r from-green-400 to-green-600 text-white py-16">
      <div className="container mx-auto px-6 md:px-12 lg:flex lg:items-center">
        {/* Content Section */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl leading-tight">
            Embrace the Healing Power of Nature
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl">
            Discover natural therapies tailored to your wellness journey.
            Experience holistic healing for a healthier, happier you.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to={"/therapies"}>
              <button className="px-6 py-3 bg-white text-green-600 font-semibold rounded-full shadow-md hover:bg-gray-100 transition duration-300 text-center">
                Explore Therapies
              </button>
            </Link>
            <Link to={"/admin/appointments"}>
              <button className="px-6 py-3 border border-white rounded-full text-white hover:bg-green-500 transition duration-300 text-center">
                Book Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
