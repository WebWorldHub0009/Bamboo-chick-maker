// src/components/WhatWeDo.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaHome, FaTools, FaRecycle } from "react-icons/fa";
import { Link } from "react-router-dom";

// Images
import bambooWork from "../assets/home/sbg.jpg";
import img1 from "../assets/service/bj.jpg";
import img2 from "../assets/service/bfo.jpg";
import img3 from "../assets/service/rollb.jpg";

const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  darkGreen: "#00733B",
  orangeGold: "#F4A300",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
};

const WhatWeDo = () => {
  return (
    <section className="relative  py-8 px-6 md:px-16 overflow-hidden">
      {/* Subtle Background Grid Pattern */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path
              d="M80 0 L0 0 0 80"
              fill="none"
              stroke="#D9D9D9"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Section Branding */}
      <p
        className="uppercase tracking-widest font-semibold text-center text-sm md:text-base mb-1 relative z-10"
        style={{ color: colors.darkGreen, fontFamily: "Italiana, serif" }}
      >
         Bamboo Chick Maker
      </p>

      {/* Main Heading */}
      <h2
        className=" font-[Poppins] text-4xl md:text-5xl text-center font-bold mb-7 leading-tight relative z-10"
        style={{ color: colors.blackPure }}
      >
        Crafting <span style={{ color: colors.leafGreen }}>Nature</span> Into{" "}
        <span style={{ color: colors.orangeGold }}>Design</span>
      </h2>

      {/* 3 Feature Cards */}
      <div className="grid md:grid-cols-3 gap-12 items-start relative z-10">
        {/* Card 1 - Eco Bamboo Blinds */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="  overflow-hidden flex flex-col items-center hover:border-[#2BA44A]/60 transition-all duration-500"
        >
          <img
            src={img1}
            alt="Eco Bamboo Blinds"
            className="w-full h-[55vh] object-cover"
          />
          <div className="p-6 text-center">
            <FaLeaf className="text-[#2BA44A] text-3xl mx-auto mb-3" />
            <h3
              className="text-xl font-bold mb-2"
              style={{ color: colors.darkGreen }}
            >
              Eco Bamboo Blinds
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Our handmade bamboo blinds merge nature’s charm with modern design.
              UV-resistant, elegant, and built to last — they’re perfect for both
              indoor and outdoor spaces.
            </p>
          </div>
        </motion.div>

        {/* Card 2 - Sustainable Interiors */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="overflow-hidden flex flex-col items-center  hover:border-[#F4A300]/60 transition-all duration-500"
        >
          <img
            src={img2}
            alt="Sustainable Interiors"
            className="w-full h-[52vh] object-cover"
          />
          <div className="p-6 text-center">
            <FaHome className="text-[#F4A300] text-3xl mx-auto mb-3" />
            <h3
              className="text-xl font-bold mb-2"
              style={{ color: colors.orangeGold }}
            >
              Sustainable Interiors
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Transform your home or workspace with eco-smart bamboo decor —
              blending beauty, sustainability, and comfort in perfect harmony.
            </p>
          </div>
        </motion.div>

        {/* Card 3 - Custom Creations */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className=" overflow-hidden flex flex-col items-center  hover:border-[#234A8A]/60 transition-all duration-500"
        >
          <img
            src={img3}
            alt="Custom Bamboo Designs"
            className="w-full h-[55vh] object-cover"
          />
          <div className="p-6 text-center">
            <FaTools className="text-[#234A8A] text-3xl mx-auto mb-3" />
            <h3
              className="text-xl font-bold mb-2"
              style={{ color: colors.deepBlue }}
            >
              Custom Bamboo Designs
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Whether you need tailored blinds, wall panels, or outdoor setups,
              our artisans craft bespoke pieces designed exclusively for your space.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
     <div className="flex justify-center mt-5">
  <Link
    to="/contact"
    className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-3 font-semibold text-white bg-[#2BA44A] shadow-lg transition-all duration-300 hover:bg-[#00733B]"
  >
    <span className="absolute inset-0 bg-gradient-to-r from-[#2BA44A] via-[#32CD32] to-[#00733B] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
    <span className="relative z-10 flex items-center gap-2 text-sm md:text-base">
      Explore More 
      <span className="transform group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
    </span>
  </Link>
</div>

    </section>
  );
};

export default WhatWeDo;
