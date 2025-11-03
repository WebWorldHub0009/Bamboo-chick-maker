import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceData from "../data/ServiceData";

const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  darkGreen: "#00733B",
  orangeGold: "#F4A300",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = ServiceData.find((item) => item.slug === slug);

  if (!service) {
    return (
      <div className="text-center py-20 text-xl text-gray-600">
        Service not found.
      </div>
    );
  }

  return (
    <div
      className="min-h-screen text-gray-900"
      style={{
        background: `linear-gradient(180deg, ${colors.whitePure} 0%, #F9FAFB 100%)`,
      }}
    >
      {/* ===== HEADER SECTION ===== */}
      <motion.div
        className="text-center py-16 px-6 relative overflow-hidden"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Accent Glow */}
        <div className="absolute inset-0 flex justify-center items-center opacity-20">
          <div
            className="w-[400px] h-[400px] rounded-full blur-3xl"
            style={{ backgroundColor: colors.leafGreen }}
          ></div>
        </div>

        <h1
          className="text-4xl md:text-5xl font-bold mb-4 relative z-10"
          style={{ color: colors.leafGreen }}
        >
          {service.name}
        </h1>
        <h2
          className="text-2xl md:text-3xl font-semibold mb-2 relative z-10"
          style={{ color: colors.deepBlue }}
        >
          {service.heading}
        </h2>
        <p
          className="text-lg italic relative z-10"
          style={{ color: colors.brightRed }}
        >
          “{service.quote}”
        </p>
      </motion.div>

      {/* ===== IMAGE + OVERVIEW SECTION ===== */}
      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-10 py-10 grid md:grid-cols-2 gap-10 items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-center">
          <motion.img
            src={service.image}
            alt={service.name}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl shadow-2xl w-full md:w-[90%] object-cover border-4 border-[#E5E7EB]"
          />
        </div>
        <div>
          <h3
            className="text-2xl font-semibold mb-4"
            style={{ color: colors.orangeGold }}
          >
            Overview
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            {service.overview}
          </p>
        </div>
      </motion.div>

      {/* ===== FEATURES + FAQS SECTION ===== */}
      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid md:grid-cols-2 gap-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Features */}
        <div>
          <h3
            className="text-2xl font-semibold mb-4"
            style={{ color: colors.orangeGold }}
          >
            Key Features
          </h3>
          <ul className="space-y-3 text-gray-700 text-lg">
            {service.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 border-b border-gray-200 pb-2"
              >
                <span
                  className="text-xl"
                  style={{ color: colors.leafGreen }}
                >
                  ✔
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* FAQs */}
        <div>
          <h3
            className="text-2xl font-semibold mb-4"
            style={{ color: colors.orangeGold }}
          >
            FAQs
          </h3>
          <div className="space-y-5 text-gray-700">
            {service.faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-3">
                <p
                  className="font-semibold"
                  style={{ color: colors.leafGreen }}
                >
                  {faq.q}
                </p>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ===== CTA BUTTON ===== */}
      <motion.div
        className="text-center py-7"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Link
          to="/contact"
          className="px-10 py-4 rounded-full text-lg font-semibold shadow-xl transition-all duration-300"
          style={{
            backgroundColor: colors.leafGreen,
            color: colors.whitePure,
          }}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = colors.darkGreen)
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = colors.leafGreen)
          }
        >
          {service.cta}
        </Link>
      </motion.div>
    </div>
  );
};

export default ServiceDetail;
