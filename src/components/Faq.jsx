// src/components/FAQ.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLeaf,
  FaQuestionCircle,
  FaCheckCircle,
  FaPhoneAlt,
  FaPlus,
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

const faqCategories = {
  "Our Products": {
    icon: <FaLeaf className="text-2xl" style={{ color: colors.leafGreen }} />,
    faqs: [
      {
        question: "What bamboo products do you offer?",
        answer:
          "We offer a wide range of bamboo products including blinds, roller chicks, huts, bamboo fencing, and handcrafted décor solutions—each designed to add elegance and sustainability to your space.",
      },
      {
        question: "Are your bamboo products eco-friendly?",
        answer:
          "Yes! All our bamboo products are sustainably sourced, biodegradable, and crafted with eco-conscious techniques for minimal environmental impact.",
      },
      {
        question: "Can I customize the design?",
        answer:
          "Absolutely. We specialize in tailor-made bamboo creations that perfectly match your space, style, and functional preferences.",
      },
    ],
  },
  "Process & Quality": {
    icon: (
      <FaCheckCircle className="text-2xl" style={{ color: colors.orangeGold }} />
    ),
    faqs: [
      {
        question: "How do you ensure quality?",
        answer:
          "Each product undergoes a detailed inspection process to ensure strength, durability, and a flawless finish that stands the test of time.",
      },
      {
        question: "Do you provide installation services?",
        answer:
          "Yes, our trained experts handle installation with precision, ensuring every bamboo chick is perfectly aligned and securely fixed.",
      },
      {
        question: "What is your order-to-delivery process?",
        answer:
          "Once we understand your requirements, we craft your bamboo product, perform a final quality check, and deliver it safely to your location.",
      },
    ],
  },
  "Pricing & Support": {
    icon: (
      <FaPhoneAlt className="text-2xl" style={{ color: colors.deepBlue }} />
    ),
    faqs: [
      {
        question: "Are your products affordable?",
        answer:
          "We provide premium-quality bamboo products at fair, transparent prices. You’ll find our craftsmanship worth every rupee.",
      },
      {
        question: "Do you offer discounts for bulk orders?",
        answer:
          "Yes, we offer attractive discounts for bulk and recurring clients. Reach out to our team for personalized pricing.",
      },
      {
        question: "How can I contact your team?",
        answer:
          "You can connect with us via phone, WhatsApp, or our contact form for inquiries, custom orders, or after-sales assistance.",
      },
    ],
  },
};

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("Our Products");
  const [openIndex, setOpenIndex] = useState(null);

  const handleTabChange = (tab) => {
    setOpenIndex(null);
    setActiveTab(tab);
  };

  return (
    <section
      className="relative w-full py-8 px-6 md:px-12 font-[Poppins] overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #FDFDFD 0%, #f3fff3 50%, #ffffff 100%)`,
      }}
    >
      {/* Section Heading */}
      <div className="text-center mb-7">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-3"
          style={{
            color: colors.darkGreen,
          }}
        >
          Frequently Asked <span style={{ color: colors.orangeGold }}>Questions</span>
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
          Explore common queries about{" "}
          <span className="font-semibold text-[#2BA44A]">
             Bamboo Chick Maker
          </span>{" "}
          — products, process, and personalized services.
        </p>
      </div>

      {/* Main Container */}
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto shadow-2xl rounded-3xl overflow-hidden border border-gray-200 bg-white">
        {/* Left Side Tabs */}
        <div
          className="md:w-1/3 p-6 flex flex-col gap-4"
          style={{
            background: `linear-gradient(160deg, ${colors.leafGreen}, ${colors.darkGreen})`,
          }}
        >
          {Object.entries(faqCategories).map(([category, data], idx) => (
            <motion.button
              key={idx}
              onClick={() => handleTabChange(category)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`cursor-pointer text-left w-full px-5 py-4 rounded-2xl flex items-center gap-3 font-medium text-base transition-all duration-300 ${
                activeTab === category
                  ? "bg-white text-black shadow-md"
                  : "bg-transparent text-white hover:bg-[#ffffff33]"
              }`}
            >
              {data.icon}
              <span>{category}</span>
            </motion.button>
          ))}
        </div>

        {/* Right Side FAQ Content */}
        <div className="md:w-2/3 bg-white p-6 sm:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {faqCategories[activeTab].faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 py-4"
                >
                  <button
                    className="w-full flex justify-between items-center text-left font-medium text-base md:text-lg hover:text-[#2BA44A] transition-colors duration-300"
                    onClick={() =>
                      setOpenIndex(index === openIndex ? null : index)
                    }
                  >
                    {faq.question}
                    <motion.span
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-xl font-bold"
                      style={{ color: colors.brightRed }}
                    >
                      <FaPlus />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-700 mt-3 text-sm md:text-base leading-relaxed pl-1"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
