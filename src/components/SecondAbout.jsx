import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaAward, FaUsers } from "react-icons/fa";
import bgImg from "../assets/home/sbg1.jpg";

const colors = {
  green: "#2BA44A",
  darkGreen: "#1E5C33",
  beige: "#F9F8F3",
  black: "#1C1C1C",
  white: "#FFFFFF",
};

const SecondSection = () => {
  return (
    <section className="w-full flex flex-col md:flex-row min-h-[90vh] overflow-hidden bg-[#F9F8F3]">
      {/* LEFT CONTENT */}
      <div className="flex-1 flex items-center justify-center p-10 md:p-20 relative z-10">
        <div className="max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-3 leading-snug font-[Poppins]"
          >
            Sustainable <span className="text-[#2BA44A]">Bamboo</span> Solutions
            for Modern Living
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-700 text-lg leading-relaxed mb-4 font-[Poppins]"
          >
            At <span className="font-semibold text-[#2BA44A]"> Bamboo Chick Maker</span>,
            we blend age-old craftsmanship with modern design to deliver elegant,
            eco-friendly bamboo blinds and interiors. Every creation reflects precision,
            sustainability, and the warmth of natural living.
          </motion.p>

          <div className="flex flex-wrap gap-4">
            <button
              className="px-8 py-3 rounded-full font-medium bg-[#2BA44A] text-white hover:bg-[#22863A] transition-all"
            >
              Explore Our Work
            </button>
            <button
              className="px-8 py-3 rounded-full font-medium border border-[#2BA44A] text-[#2BA44A] hover:bg-[#E9F6EE] transition-all"
            >
              Get in Touch
            </button>
          </div>

          <div className="mt-10">
            <p className="text-sm text-gray-600">
              Crafting comfort, style, and sustainability for homes and businesses.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE SECTION */}
      <div className="flex-1 relative">
        <img
          src={bgImg}
          alt="Bamboo blinds making"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent"></div>

        {/* Floating Stats */}
        <div className="absolute top-1/4 right-6 md:right-16 flex flex-col gap-6 text-white">
          {/* Stars */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3 flex items-center gap-3"
          >
            <FaStar className="text-yellow-400 text-2xl" />
            <div>
              <p className="font-semibold text-lg">4.8+ Stars</p>
              <p className="text-sm text-gray-200">from 1000+ clients</p>
            </div>
          </motion.div>

          {/* Rating */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3 flex items-center gap-3"
          >
            <FaAward className="text-[#F4A300] text-2xl" />
            <div>
              <p className="font-semibold text-lg">A+ Craftsmanship</p>
              <p className="text-sm text-gray-200">Premium quality bamboo work</p>
            </div>
          </motion.div>

          {/* Customers */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3 flex items-center gap-3"
          >
            <FaUsers className="text-[#2BA44A] text-2xl" />
            <div>
              <p className="font-semibold text-lg">25K+ Happy Clients</p>
              <p className="text-sm text-gray-200">Across North India</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
