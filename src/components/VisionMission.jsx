import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaRegLightbulb, FaHandsHelping, FaGlobeAsia } from "react-icons/fa";

const VisionMission = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#F8F8F8] to-[#EAEAEA] py-10 overflow-hidden">
      {/* Subtle bamboo texture or gradient overlay */}
      <div className="absolute inset-0 bg-[url('/src/assets/images/bamboo-bg.png')] bg-cover bg-center opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#2B513B] font-[poppins]"
        >
          Our <span className="text-[#2BA44A]">Vision & Mission</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          Rooted in tradition and driven by innovation, Gautam Bamboo Chick Maker strives to redefine spaces
          with sustainable artistry — blending the timeless charm of bamboo craftsmanship with modern design elegance.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Vision */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white shadow-xl rounded-3xl p-8 relative border-t-8 border-[#2BA44A]"
          >
            <div className="absolute top-[-25px] left-6 bg-[#2BA44A] p-4 rounded-full shadow-md">
              <FaRegLightbulb className="text-white text-3xl" />
            </div>
            <h3 className="text-2xl font-semibold mt-6 text-[#1C1C1C] font-[poppins]">Our Vision</h3>
            <p className="text-gray-700 mt-4 leading-relaxed">
              To be India’s most trusted name in bamboo artistry — where nature meets modern luxury.
              Our vision is to create eco-conscious designs that inspire a sustainable lifestyle, bringing
              the warmth of natural bamboo into every space with elegance, authenticity, and innovation.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white shadow-xl rounded-3xl p-8 relative border-t-8 border-[#2B513B]"
          >
            <div className="absolute top-[-25px] left-6 bg-[#2B513B] p-4 rounded-full shadow-md">
              <FaHandsHelping className="text-white text-3xl" />
            </div>
            <h3 className="text-2xl font-semibold mt-6 text-[#1C1C1C] font-[poppins]">Our Mission</h3>
            <p className="text-gray-700 mt-4 leading-relaxed">
              To deliver handcrafted bamboo blinds and décor that embody quality, creativity, and sustainability.
              We aim to empower artisans, minimize environmental impact, and provide our clients with designs that
              harmonize nature’s serenity with contemporary aesthetics.
            </p>
          </motion.div>
        </div>

        {/* Additional decorative quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-16 text-center"
        >
          <h4 className="italic text-lg md:text-xl font-medium text-gray-600 max-w-2xl mx-auto">
            “Crafting bamboo dreams — one blind, one space, one story at a time.”
          </h4>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;
