// src/components/ContactHero.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

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
import bg from "../assets/home/cbg.jpg"; // ✅ Replace with your actual image

export default function ContactHero() {
  return (
    <section className="relative w-full h-[80vh] flex items-end justify-start overflow-hidden">
      {/* 🔹 Background Image */}
      <img
        src={bg}
        alt="Contact Bamboo Chick Maker"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* 🔹 Layered Gradient Overlays */}
      <div className="absolute inset-0 bg-black/40" />
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
          Get in Touch with{" "}
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
          Have a project in mind or need expert advice?  
          We’re here to provide{" "}
          <span style={{ color: colors.leafGreen }}>eco-friendly bamboo solutions</span>{" "}
          that elevate your space with natural elegance and timeless craftsmanship.
        </motion.p>

        {/* 🔹 CTA Contact Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap gap-6"
        >
          {/* Call Us Button */}
          <a
            href="tel:+917060072378"
            className="flex items-center gap-3 px-8 py-3 rounded-full font-semibold bg-[#2BA44A] text-white shadow-lg hover:shadow-[#2BA44A]/50 transition-transform hover:scale-105"
            style={{ fontFamily: "Zen Dots, sans-serif" }}
          >
            <FaPhoneAlt className="text-lg" />
            Call Us
          </a>

          {/* Email Us Button */}
          <a
            href="mailto:Bamboochickmakerservice@gmail.com"
            className="flex items-center gap-3 px-8 py-3 rounded-full font-semibold border-2 border-[#F4A300] text-[#F4A300] hover:bg-[#F4A300]/10 transition-all hover:scale-105"
            style={{ fontFamily: "Zen Dots, sans-serif" }}
          >
            <FaEnvelope className="text-lg" />
            Email Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
