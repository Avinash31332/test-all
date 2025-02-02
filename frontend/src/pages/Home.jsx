import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faHeartbeat,
  faUserMd,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import Test from "../components/Test";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Therapies from "./Therapies";
import TherapiesSlider from "../components/TherapiesSlider";

const Home = () => {
  return (
    // <div className="min-h-screen bg-green-50 text-gray-700">
    //   {/* Header Section */}
    //   <header className="bg-green-600 text-white py-6">
    //     <div className="container mx-auto flex justify-between items-center px-4">
    //       <h1 className="text-3xl font-bold">Naturopathy Clinic</h1>
    //       <nav>
    //         <a href="#therapies" className="mx-3 hover:underline">
    //           Therapies
    //         </a>
    //         <a href="#story" className="mx-3 hover:underline">
    //           My Story
    //         </a>
    //         <a href="#appointments" className="mx-3 hover:underline">
    //           Appointments
    //         </a>
    //       </nav>
    //     </div>
    //   </header>

    //   {/* Hero Section */}
    //   <section className="bg-green-500 text-white py-20">
    //     <div className="container mx-auto text-center px-4">
    //       <h2 className="text-4xl font-bold mb-4">Discover Holistic Healing</h2>
    //       <p className="text-lg mb-6">
    //         A journey towards wellness through natural therapies.
    //       </p>
    //       <a
    //         href="#appointments"
    //         className="bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-200"
    //       >
    //         Book an Appointment
    //       </a>
    //     </div>
    //   </section>

    //   {/* Therapies Section */}
    //   <section id="therapies" className="py-12">
    //     <div className="container mx-auto px-4">
    //       <h3 className="text-3xl font-bold mb-6 text-center">Our Therapies</h3>
    //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    //         <div className="bg-white shadow-md rounded-lg p-4 text-center">
    //           <FontAwesomeIcon
    //             icon={faLeaf}
    //             className="text-green-600 text-4xl mb-4"
    //           />
    //           <h4 className="font-semibold text-lg">Herbal Therapy</h4>
    //           <p className="text-sm text-gray-600">
    //             Natural remedies for a balanced lifestyle.
    //           </p>
    //         </div>
    //         <div className="bg-white shadow-md rounded-lg p-4 text-center">
    //           <FontAwesomeIcon
    //             icon={faHeartbeat}
    //             className="text-green-600 text-4xl mb-4"
    //           />
    //           <h4 className="font-semibold text-lg">Detox Therapy</h4>
    //           <p className="text-sm text-gray-600">
    //             Cleansing your body for optimal health.
    //           </p>
    //         </div>
    //         <div className="bg-white shadow-md rounded-lg p-4 text-center">
    //           <FontAwesomeIcon
    //             icon={faUserMd}
    //             className="text-green-600 text-4xl mb-4"
    //           />
    //           <h4 className="font-semibold text-lg">Yoga Sessions</h4>
    //           <p className="text-sm text-gray-600">
    //             Strengthen your body and mind through yoga.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* My Story Section */}
    //   <section id="story" className="bg-green-100 py-12">
    //     <div className="container mx-auto px-4 text-center">
    //       <h3 className="text-3xl font-bold mb-6">My Story</h3>
    //       <p className="text-gray-700">
    //         Welcome to my Naturopathy Clinic! I am a certified Naturopath, and
    //         my journey began when I discovered the power of natural healing.
    //         Here, I blend traditional wisdom with modern practices to bring you
    //         the best of holistic care.
    //       </p>
    //     </div>
    //   </section>

    //   {/* Appointment Section */}
    //   <section id="appointments" className="py-12">
    //     <div className="container mx-auto px-4 text-center">
    //       <h3 className="text-3xl font-bold mb-6">Book an Appointment</h3>
    //       <p className="text-gray-700 mb-4">
    //         Schedule a consultation to begin your healing journey.
    //       </p>
    //       <a
    //         href="#"
    //         className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700"
    //       >
    //         Book Now
    //       </a>
    //     </div>
    //   </section>

    //   {/* Footer */}
    //   <footer className="bg-green-600 text-white py-4">
    //     <div className="container mx-auto text-center">
    //       <p>&copy; 2025 Naturopathy Clinic. All rights reserved.</p>
    //     </div>
    //   </footer>
    // </div>
    <div>
      <HeroSection />
      <About />
      <hr />
      <TherapiesSlider />
      <hr className="my-8" />
      <About />
    </div>
  );
};

export default Home;
