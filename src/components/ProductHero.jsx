// src/components/ProductHero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

// 🎨 Brand Colors
const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  darkGreen: "#00733B",
  orangeGold: "#F4A300",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
};

import bg from "../assets/home/bg2.jpg"; 
export default function ProductHero() {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-start overflow-hidden">
      {/* 🔹 Background Image */}
      <img
        src={bg}
        alt="Premium Bamboo Chick Products"
        className="absolute inset-0 w-full h-full object-cover scale-110 "
      />

      {/* 🔹 Layered Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r bg-black/40"></div>
      <div
        className="absolute inset-0"
       
      />

      {/* 🔹 Animated Floating Light (Adds motion depth) */}
      <motion.div
        className="absolute -bottom-10 -left-10 w-96 h-96 bg-[#F4A300]/20 blur-[120px] rounded-full"
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🔹 Main Content */}
      <div className="relative z-10 max-w-6xl px-6 md:px-20">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
          style={{
            fontFamily: "Italiana, serif",
            color: colors.whitePure,
          }}
        >
          Discover Our{" "}
          <span style={{ color: colors.darkGreen }}>
            Premium Bamboo Chick Products
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-xl leading-relaxed max-w-3xl mb-5"
          style={{
            fontFamily: "Orbitron, sans-serif",
            color: colors.whitePure,
          }}
        >
          Handcrafted with precision, designed with purpose — our bamboo
          products reflect the harmony of nature and artistry. Each piece
          embodies sustainability, durability, and timeless appeal that enhances
          every living space.
        </motion.p>

        {/* 🔹 CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap gap-5"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full font-semibold text-lg bg-[#234A8A] text-black shadow-xl transition-transform"
          >
            Explore Products <FaArrowRight />
          </Link>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full font-semibold text-lg border-2 border-[#F4A300] text-[#F4A300]  hover:text-black transition-all duration-300"
          >
            View Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
