// src/components/StatsSection.jsx
import React, { useEffect, useState } from "react";
import {
  FaLeaf,
  FaSmile,
  FaRegSun,
  FaUsers,
  FaHandHoldingHeart,
  FaHammer,
} from "react-icons/fa";
import bg from "../assets/home/b1.jpg";
// import logo from "../assets/blogo.png";

// Color Palette
const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  darkGreen: "#00733B",
  orangeGold: "#F4A300",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
};

// Animated Counter Component
const StatCard = ({ icon: Icon, label, target, color }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const cleanTarget = target.trim().toUpperCase();
    let multiplier = 1;
    if (cleanTarget.includes("K")) multiplier = 1000;
    if (cleanTarget.includes("M")) multiplier = 1000000;

    const numericPart = parseFloat(cleanTarget.replace(/[^\d.]/g, ""));
    const finalTarget = Math.floor(numericPart * multiplier);
    const duration = 2000;
    const increment = finalTarget / (duration / 10);
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= finalTarget) {
        current = finalTarget;
        clearInterval(interval);
      }
      setCount(Math.floor(current));
    }, 10);

    return () => clearInterval(interval);
  }, [target]);

  const formatCount = () => {
    const plus = target.includes("+") ? "+" : "";
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M${plus}`;
    if (count >= 1000) return `${Math.floor(count / 1000)}K${plus}`;
    return `${count}${plus}`;
  };

  return (
    <div className="flex flex-col items-center transition-all duration-500 hover:scale-105">
      <div
        className="w-16 h-16 flex items-center justify-center rounded-full shadow-lg mb-4"
        style={{
          backgroundColor: color + "22",
          boxShadow: `0 0 20px ${color}44`,
        }}
      >
        <Icon className="text-3xl" style={{ color }} />
      </div>
      <div
        className="text-3xl font-bold"
        style={{ fontFamily: "Zen Dots, sans-serif", color: colors.whitePure }}
      >
        {formatCount()}
      </div>
      <p
        className="text-sm mt-2"
        style={{ fontFamily: "Orbitron, sans-serif", color: "#ddd" }}
      >
        {label}
      </p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section
      className="relative py-8 px-6 md:px-20 text-center bg-fixed bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/85 to-black/90 z-0" />

      {/* Section Header */}
      <div className="relative z-10 max-w-5xl mx-auto mb-14">
        <h2
          className="text-sm tracking-widest uppercase mb-3"
          style={{
            fontFamily: "Orbitron, sans-serif",
            color: colors.orangeGold,
            letterSpacing: "4px",
          }}
        >
           Bamboo Chick Maker
        </h2>
        <h3
          className="text-4xl md:text-5xl font-bold leading-snug mb-3"
          style={{
            fontFamily: "Italiana, serif",
            color: colors.whitePure,
          }}
        >
          Blending <span style={{ color: colors.leafGreen }}>Nature</span> with{" "}
          <span style={{ color: colors.orangeGold }}>Elegance</span>
        </h3>
        <p
          className="text-base md:text-lg italic"
          style={{
            fontFamily: "Orbitron, sans-serif",
            color: "#ccc",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          “Crafting eco-friendly bamboo chicks that redefine sustainability,
          comfort, and timeless design — handmade for your modern spaces.”
        </p>
      </div>

      {/* About Text Section */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center mb-10 text-left">
        <div>
          <h2
            className="text-6xl mb-4"
            style={{
              fontFamily: "Zen Dots, sans-serif",
              color: colors.orangeGold,
            }}
          >
            25+
          </h2>
          <p
            className="leading-relaxed text-base md:text-lg"
            style={{
              fontFamily: "Orbitron, sans-serif",
              color: "#eee",
            }}
          >
            For over{" "}
            <span style={{ color: colors.whitePure, fontWeight: "bold" }}>
              two decades
            </span>
            , <span style={{ color: colors.leafGreen }}> Bamboo Chick Maker</span>{" "}
            has been India’s trusted name for handcrafted bamboo blinds and
            natural décor solutions. We combine eco-conscious design with
            precise artistry — transforming sunlight and shade into a
            masterpiece of texture and tranquility.
          </p>

          <p
            className="mt-4 text-sm md:text-base italic"
            style={{ color: "#bbb", fontFamily: "Orbitron, sans-serif" }}
          >
            Every product we create tells a story — of sustainability,
            creativity, and care for nature’s finest resources.
          </p>
        </div>

        {/* Signature / Brand Identity */}
        <div className="flex flex-col md:flex-row items-center justify-end gap-5 text-center md:text-left">
          <img
            src={""} // Optional: brand logo here
            alt="Company Logo"
            className="w-24 h-24 rounded-full shadow-xl border-2 border-[#F4A300] object-cover"
          />
          <div>
            <p
              className="text-xl font-semibold"
              style={{
                fontFamily: "Italiana, serif",
                color: colors.whitePure,
              }}
            >
               Owner
            </p>
            <p
              className="text-sm tracking-wide"
              style={{
                fontFamily: "Orbitron, sans-serif",
                color: "#ccc",
              }}
            >
              Santosh Kumar
            </p>
            <div
              className="mt-2 w-16 h-[2px] mx-auto md:mx-0"
              style={{ backgroundColor: colors.orangeGold }}
            ></div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Line */}
      <div className="relative z-10 mb-12">
        <p
          className="text-lg md:text-xl italic max-w-3xl mx-auto"
          style={{
            fontFamily: "Orbitron, sans-serif",
            color: "#ddd",
          }}
        >
          “Choose us for bamboo blinds that aren’t just products — they’re a
          statement of sustainable luxury.”
        </p>
      </div>

      {/* Stats Grid */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 text-center max-w-6xl mx-auto">
        <StatCard
          icon={FaLeaf}
          label="Eco-Friendly Products"
          target="100+"
          color={colors.leafGreen}
        />
        <StatCard
          icon={FaSmile}
          label="Happy Clients"
          target="1200+"
          color={colors.orangeGold}
        />
        <StatCard
          icon={FaRegSun}
          label="Custom Designs"
          target="150+"
          color={colors.deepBlue}
        />
        <StatCard
          icon={FaUsers}
          label="Expert Artisans"
          target="40+"
          color={colors.brightRed}
        />
        <StatCard
          icon={FaHammer}
          label="Projects Completed"
          target="900+"
          color={colors.darkGreen}
        />
        <StatCard
          icon={FaHandHoldingHeart}
          label="Satisfied Families"
          target="500+"
          color={colors.orangeGold}
        />
      </div>
    </section>
  );
};

export default StatsSection;
