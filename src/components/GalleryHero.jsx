// src/components/GalleryHero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";

// Brand Colors
const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  darkGreen: "#00733B",
  orangeGold: "#F4A300",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
};

// Background Image (replace with real image from your gallery)
import bg from "../assets/home/bg1.jpg";

export default function GalleryHero() {
  return (
    <section className="relative w-full h-[85vh] flex items-end justify-start overflow-hidden">
      {/* 🌿 Cinematic Background */}
      <img
        src={bg}
        alt="Bamboo Chick Maker Gallery"
        className="absolute inset-0 w-full h-full object-cover scale-110"
        style={{
          filter: "brightness(0.85) contrast(1.1) saturate(1.1)",
        }}
      />

      {/* 🌕 Soft gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t bg-black/40" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 25% 80%, rgba(244,163,0,0.25), transparent 60%)",
        }}
      />

      {/* 🌸 Floating Glowing Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-[#F4A300]/25 blur-[2px]"
            style={{
              width: `${Math.random() * 10 + 6}px`,
              height: `${Math.random() * 10 + 6}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: Math.random() * 6 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* 🌾 Hero Text Content */}
      <div className="relative z-10 max-w-6xl px-6 md:px-16 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          style={{
            fontFamily: "Italiana, serif",
            color: colors.whitePure,
            textShadow: "0px 6px 25px rgba(0,0,0,0.6)",
            letterSpacing: "1px",
          }}
        >
          <span style={{ color: colors.orangeGold }}>Bamboo Artistry</span>{" "}
          Captured in Every Frame
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl leading-relaxed max-w-3xl mb-10"
          style={{
            fontFamily: "Poppins, sans-serif",
            color: colors.whitePure,
            textShadow: "0px 4px 15px rgba(0,0,0,0.4)",
          }}
        >
          Step into our world of handcrafted elegance — where every{" "}
          <span style={{ color: colors.leafGreen, fontWeight: 600 }}>
            bamboo weave tells a story
          </span>{" "}
          of precision, culture, and sustainable artistry. Our gallery celebrates
          the beauty of traditional craftsmanship blended with modern design.
        </motion.p>

        {/* 🌿 CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-3 rounded-full font-semibold text-lg transition-all duration-300 bg-[#F4A300] text-black hover:bg-[#2BA44A] hover:text-white hover:scale-105 shadow-xl"
            style={{
              fontFamily: "Zen Dots, sans-serif",
            }}
          >
            <FaLeaf className="text-xl" />
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
