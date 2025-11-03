// src/components/AboutHero.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Colors
const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  darkGreen: "#00733B",
  orangeGold: "#F4A300",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
};

// Background Image
import bg from "../assets/home/abg.jpg"; // ✅ Replace with your real hero background

export default function AboutHero() {
  return (
    <section className="relative w-full h-[80vh] flex items-end justify-start overflow-hidden">
      {/* 🔹 Background Image */}
      <img
        src={bg}
        alt="About  Bamboo Chick Maker"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* 🔹 Layered Gradient Overlays */}
      <div
        className="absolute inset-0 bg-black/30"
      
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at bottom left, rgba(43,164,74,0.25), transparent 70%)",
        }}
      />

      {/* 🔹 Main Content - Left Bottom Aligned */}
      <div className="relative z-10 max-w-5xl px-6 md:px-16 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          style={{
            fontFamily: "Italiana, serif",
            color: colors.whitePure,
            lineHeight: 1.2,
          }}
        >
          Welcome to{" "}
          <span style={{ color: colors.orangeGold }}>
             Bamboo Chick Maker
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl leading-relaxed max-w-3xl mb-8"
          style={{
            fontFamily: "Orbitron, sans-serif",
            color: colors.whitePure,
          }}
        >
          We specialize in{" "}
          <span style={{ color: colors.leafGreen }}>handcrafted bamboo chicks</span>{" "}
          and sustainable shading solutions. Each piece reflects{" "}
          <span style={{ color: colors.deepBlue }}>heritage artistry</span> blended
          with <span style={{ color: colors.brightRed }}>modern style</span>.  
          Experience craftsmanship that protects, beautifies, and endures.
        </motion.p>

        {/* 🔹 CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            to="/gallery"
            className="px-8 py-3 rounded-full font-semibold border-2 transition-all hover:scale-105 hover:bg-[#2BA44A]/10"
            style={{
              borderColor: colors.leafGreen,
              color: colors.leafGreen,
              fontFamily: "Zen Dots, sans-serif",
            }}
          >
            View Our Craft
          </Link>

          <Link
            to="/contact"
            className="px-8 py-3 rounded-full font-semibold shadow-lg transition-transform hover:scale-105"
            style={{
              backgroundColor: colors.orangeGold,
              color: colors.whitePure,
              fontFamily: "Zen Dots, sans-serif",
            }}
          >
            Let’s Work Together →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
