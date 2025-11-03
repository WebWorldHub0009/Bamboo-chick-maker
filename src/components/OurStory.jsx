import React from "react";
import mainImg from "../assets/home/b1.jpg"; // Replace with your bamboo workshop or product image
import clientImg from "../assets/home/b2.jpg"; // Optional testimonial image
import { FaLeaf, FaHandsHelping, FaTools, FaSmileBeam } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  darkGreen: "#00733B",
  orangeGold: "#F4A300",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
};

const stats = [
  {
    icon: <FaLeaf className="text-[#2BA44A] text-3xl" />,
    value: "1000+",
    label: "Eco-Friendly Products Delivered",
  },
  {
    icon: <FaHandsHelping className="text-[#F4A300] text-3xl" />,
    value: "300+",
    label: "Happy Homeowners & Businesses",
  },
  {
    icon: <FaTools className="text-[#00733B] text-3xl" />,
    value: "15+",
    label: "Years of Bamboo Craftsmanship",
  },
  {
    icon: <FaSmileBeam className="text-[#E8452D] text-3xl" />,
    value: "98%",
    label: "Customer Satisfaction",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const AboutSection = () => {
  return (
    <section
      className="bg-gradient-to-br font-[Poppins] from-[#f7fff9] via-[#f3faf5] to-[#e9f5ed] py-16 px-6 md:px-12 lg:px-20 font-[Poppins]"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <motion.div
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        {/* Left Content */}
        <div>
          <h2
            className="text-4xl md:text-5xl font-semibold mb-5 leading-tight font-[Poppins]"
            style={{ color: colors.darkGreen }}
          >
            Crafting <span style={{ color: colors.orangeGold }}>Nature’s Beauty</span>  
            <br /> Into Every Space
          </h2>

          <p className="text-gray-700 text-base md:text-lg mb-8 leading-relaxed font-[Poppins]">
            At{" "}
            <span className="font-semibold" style={{ color: colors.leafGreen }}>
              Bamboo Chick Maker
            </span>
            , we bring the timeless charm of bamboo into your homes and
            workplaces. Each chick blind and product we make carries our
            dedication to sustainability, comfort, and craftsmanship.
          </p>

          <p className="text-gray-700 text-base md:text-lg mb-10 leading-relaxed font-[Poppins]">
            Using ethically sourced bamboo and precise hand-finishing
            techniques, we design window solutions that blend natural texture
            with modern design — turning everyday light into an artistic play of
            warmth and shade.
          </p>

          {/* Button */}
          <Link to="/about">
          <button
            className="cursor-pointer px-8 py-3 rounded-full font-medium shadow-md text-white transition-all duration-300 hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${colors.darkGreen}, ${colors.leafGreen})`,
            }}
          >
            Explore More
          </button>
          </Link>
        </div>

        {/* Right Image + Floating Testimonial */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Glow border effect */}
          <div className="absolute -inset-1 bg-gradient-to-tr from-[#2BA44A]/50 via-[#F4A300]/40 to-[#234A8A]/40 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition duration-700"></div>
          <img
            src={mainImg}
            alt="Bamboo Craft"
            className="relative rounded-2xl w-full h-auto object-cover shadow-2xl border border-[#D9D9D9]"
          />

          {/* Floating Testimonial */}
          <div
            className="absolute bottom-[-30px] left-6 rounded-xl shadow-lg p-4 w-[90%] max-w-xs bg-white transition-all duration-300 border-l-4"
            style={{
              borderColor: colors.leafGreen,
            }}
          >
            <p className="text-sm italic mb-2 text-gray-600">
              “Bamboo Chick Maker completely transformed my home’s look —
              natural, elegant, and peaceful. Truly remarkable craftsmanship!”
            </p>
            <div className="flex items-center gap-2 mt-2">
              <img
                src={clientImg}
                alt="Client"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="text-sm">
                <p className="font-semibold" style={{ color: colors.blackPure }}>
                  Owner
                </p>
                <p className="text-xs text-gray-500">Santosh Kumar</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      
    </section>
  );
};

export default AboutSection;
