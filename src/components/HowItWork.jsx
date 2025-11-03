// src/components/HowItWorks.jsx
import React from "react";
import {
  FaLeaf,
  FaTools,
  FaHandshake,
  FaShieldAlt,
  FaCalendarCheck,
} from "react-icons/fa";

const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  darkGreen: "#00733B",
  orangeGold: "#F4A300",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
};

const steps = [
  {
    id: 1,
    title: "Understanding Your Needs",
    description:
      "Our experts connect with you to understand your shade, privacy, and design requirements for your bamboo chicks.",
    icon: <FaHandshake size={28} />,
  },
  {
    id: 2,
    title: "Custom Design & Crafting",
    description:
      "We craft each bamboo chick with precision and sustainability — blending natural aesthetics with long-lasting performance.",
    icon: <FaTools size={28} />,
  },
  {
    id: 3,
    title: "Eco-Safe Installation",
    description:
      "Using high-grade bamboo and durable fittings, we ensure a flawless, eco-friendly installation for your space.",
    icon: <FaLeaf size={28} />,
  },
  {
    id: 4,
    title: "Aftercare & 60 Days Warranty",
    description:
      "Enjoy peace of mind with our dedicated post-installation support and a 60-day product warranty on every bamboo chick.",
    icon: <FaCalendarCheck size={28} />,
  },
];

export default function HowItWorks() {
  return (
    <section
      className="relative py-10 overflow-hidden font-[Poppins]"
      style={{
        background: `linear-gradient(to bottom right, #F8FFF9, #E9F9EE, #FDFBF8)`,
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Decorative Background Shapes */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="200" cy="120" r="100" fill={colors.leafGreen} />
        <circle cx="900" cy="200" r="160" fill={colors.orangeGold} />
      </svg>

      {/* Header Section */}
      <div className="relative z-10 text-center mb-7 px-6">
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-4 font-[Poppins]"
          style={{ color: colors.blackPure }}
        >
          How{" "}
          <span style={{ color: colors.leafGreen }}> Bamboo Chick</span>{" "}
          Works
        </h2>
        <p
          className="max-w-2xl mx-auto text-gray-700 text-lg leading-relaxed"
          style={{ fontWeight: 400 }}
        >
          From design to delivery — every bamboo chick we create is a mark of
          sustainability, craftsmanship, and premium living aesthetics.
        </p>
      </div>

      {/* Step Cards */}
      <div className="relative z-10 max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative bg-white shadow-xl hover:shadow-2xl border border-gray-100 rounded-2xl p-8 flex flex-col items-center text-center transform hover:-translate-y-2 transition-all duration-300"
          >
            {/* Icon */}
            <div
              className="w-16 h-16 flex items-center justify-center rounded-full mb-5 shadow-md"
              style={{
                backgroundColor: `${colors.leafGreen}22`,
                color: colors.leafGreen,
              }}
            >
              {step.icon}
            </div>

            {/* Title */}
            <h3
              className="text-xl font-semibold mb-3 font-[Poppins]"
              style={{ color: colors.deepBlue }}
            >
              {step.title}
            </h3>

            {/* Description */}
            <p
              className="text-gray-600 text-sm leading-relaxed"
              style={{ lineHeight: "1.6" }}
            >
              {step.description}
            </p>

            {/* Decorative line */}
            <div
              className="mt-3 w-16 h-[3px] rounded-full"
              style={{ backgroundColor: colors.orangeGold }}
            ></div>
          </div>
        ))}
      </div>

      {/* Warranty Highlight */}
      <div className="relative z-10 mt-8 flex flex-col items-center text-center">
        <div
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full shadow-lg border"
          style={{
            borderColor: colors.orangeGold,
            background: `${colors.orangeGold}15`,
          }}
        >
          <FaShieldAlt
            className="text-xl"
            style={{ color: colors.orangeGold }}
          />
          <span
            className="font-medium tracking-wide"
            style={{ color: colors.blackPure }}
          >
            All Products Come with <b style={{ color: colors.leafGreen }}>60 Days Warranty</b>
          </span>
        </div>
      </div>
    </section>
  );
}
