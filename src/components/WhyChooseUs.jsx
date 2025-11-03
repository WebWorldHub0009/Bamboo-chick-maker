// src/components/WhyChooseUs.jsx
import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/home/b1.jpg"; // bamboo work image
import img2 from "../assets/home/b2.jpg"; // eco/sustainable image
import img3 from "../assets/home/b3.jpg"; // craftsmanship image
import img4 from "../assets/home/b4.jpg"; // modern interior bamboo
import bgImg from "../assets/home/a.jpg"; // add your background texture/pattern here

const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  darkGreen: "#00733B",
  orangeGold: "#F4A300",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
};

const reasons = [
  {
    id: 1,
    title: "Sustainable Craftsmanship",
    desc: "Each bamboo chick is handmade with a focus on renewable materials and minimal carbon impact.",
    img: img1,
  },
  {
    id: 2,
    title: "Premium Quality Finish",
    desc: "We use high-grade bamboo and eco coatings that ensure lasting beauty, shine, and durability.",
    img: img2,
  },
  {
    id: 3,
    title: "Custom Design Flexibility",
    desc: "Tailored patterns and shades crafted to match your interiors, exteriors, or workspace aesthetics.",
    img: img3,
  },
  {
    id: 4,
    title: "Trusted by Professionals",
    desc: "With decades of expertise, we’ve become a trusted name for architects, decorators, and homeowners alike.",
    img: img4,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="relative py-14 px-6 md:px-16 text-whitePure overflow-hidden"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={bgImg}
          alt="background"
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 " />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 mb-8">
          {/* Number + Title */}
          <div>
            <h2
              className="text-[30px] font-bold leading-none mb-2"
              style={{
                fontFamily: "Italiana, serif",
                color: colors.orangeGold,
              }}
            >
              BCM
            </h2>
            <h3
              className="text-3xl md:text-6xl font-semibold font-[Poppins] uppercase tracking-wide"
              style={{ color: colors.leafGreen }}
            >
              Why Choose Us
            </h3>
          </div>

          {/* Intro Text */}
          <div className="max-w-2xl text-gray-500 leading-relaxed text-[15px]">
            At{" "}
            <span style={{ color: colors.leafGreen, fontWeight: "600" }}>
               Bamboo Chick Maker
            </span>
            , we blend tradition with innovation. Every bamboo creation is
            sustainably sourced, artistically woven, and quality-tested to
            elevate your space — naturally and beautifully.
          </div>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.id}
              className="group relative overflow-hidden  cursor-pointer  hover:border-orange-400/40 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="h-[360px] overflow-hidden">
                <img
                  src={reason.img}
                  alt={reason.title}
                  className="w-full h-full object-cover  transition-all duration-500 group-hover:scale-110"
                />
              </div>

              {/* Text Overlay */}
              <div className="p-4">
                <h4
                  className="text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-[#F4A300]"
                  style={{
                    fontFamily: "Italiana, serif",
                  }}
                >
                  {reason.title}
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
