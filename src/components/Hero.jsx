import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

import img1 from "../assets/home/b2.jpg";
import img2 from "../assets/home/b3.jpg";
import img3 from "../assets/home/b4.jpg";

const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  darkGreen: "#00733B",
  orangeGold: "#F4A300",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
};

const HeroSection = () => {
  const slides = [img1, img2, img3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section
      className="relative w-full min-h-[90vh] md:h-[95vh] overflow-hidden font-[Poppins]"
      style={{ color: colors.whitePure }}
    >
      {/* Smooth Background Slider */}
      <AnimatePresence>
        <motion.img
          key={current}
          src={slides[current]}
          alt="Bamboo Chick Maker"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.85) 20%, rgba(35,74,138,0.4), rgba(0,0,0,0.7))",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center h-full px-5 sm:px-8 md:px-16 lg:px-24 py-10 md:py-0">
        {/* Left Content */}
        <div className="max-w-2xl text-left space-y-5 sm:space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Elevate Your Space <br />
            with{" "}
            <span style={{ color: colors.leafGreen }}>
              Bamboo Craftsmanship
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="max-w-lg text-gray-200 text-sm sm:text-base md:text-lg mb-6 sm:mb-10"
          >
            Experience timeless artistry with sustainable bamboo designs that
            blend nature and luxury. We bring craftsmanship that breathes
            elegance into your living spaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-5"
          >
            <Link to="/products">
              <button
                className="px-5 py-2 sm:px-7 sm:py-3 rounded-full text-xs sm:text-sm md:text-base font-semibold cursor-pointer transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: colors.deepBlue,
                  color: colors.whitePure,
                  boxShadow: "0 4px 14px rgba(0,0,0,0.3)",
                }}
              >
                Explore Products
              </button>
            </Link>

            <button
              onClick={() => (window.location.href = "/about")}
              className="px-5 py-2 sm:px-7 sm:py-3 rounded-full border text-xs sm:text-sm md:text-base font-semibold cursor-pointer hover:bg-white/10 transition-all duration-300"
              style={{
                borderColor: colors.whitePure,
                color: colors.whitePure,
              }}
            >
              Learn More
            </button>
          </motion.div>
        </div>

        {/* Right Side Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="flex flex-col items-center md:items-end justify-center text-right space-y-6 mt-10 md:mt-0"
        >
          <p
            className="max-w-xs sm:max-w-sm text-gray-200 leading-relaxed text-xs sm:text-sm md:text-base italic text-center md:text-right"
            style={{ color: "#d8e2ef" }}
          >
            “Each bamboo strand tells a story of sustainability and art — woven
            together to bring calm, comfort, and style into modern living.”
          </p>

          {/* Social Icons */}
          <div className="flex flex-row md:flex-col gap-4 items-center">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 sm:p-3 rounded-full cursor-pointer transition-all hover:scale-110"
              style={{
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 sm:p-3 rounded-full cursor-pointer transition-all hover:scale-110"
              style={{
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 sm:p-3 rounded-full cursor-pointer transition-all hover:scale-110"
              style={{
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
            >
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Accent Gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[100px] sm:h-[120px]"
        style={{
          background: `linear-gradient(to top, ${colors.blackPure}, transparent)`,
        }}
      />
    </section>
  );
};

export default HeroSection;
