// src/components/ServicesSection.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";
import bambooBg from "../assets/home/sbg1.jpg"; 

// ✅ Import your product images
import bambooJafhari from "../assets/product/jaf.jpg";
import dwali from "../assets/product/dchick.jpg"
import kabutar from "../assets/product/pigeon.jpg"
import roller from "../assets/product/pigeon.jpg"
import bambo from "../assets/product/hut.jpg"
import fchick from "../assets/product/fchick.jpg"

// ✅ Extra 5 premium products
import garden from "../assets/service/bcos.jpg";
import shade from "../assets/service/cb.jpg";
import patio from "../assets/service/zb.jpg";
import eco from "../assets/service/bc.jpg";
import designer from "../assets/service/bod.jpg";

const products = [
  { title: "Bamboo Jafhari", slug: "bamboo-jafhari", imgSrc: bambooJafhari, description: "High-quality bamboo jafhari for strong and durable construction." },
  { title: "Design Wali Chick", slug: "design-wali-chick", imgSrc: dwali, description: "Elegant design wali chick to enhance aesthetics and functionality." },
  { title: "Kabutar Jali", slug: "kabutar-jali", imgSrc: kabutar, description: "Premium kabutar jali to protect your poultry while ensuring ventilation." },
  { title: "Roller Blind", slug: "roller-blind", imgSrc: roller, description: "Durable roller blinds for versatile and efficient shading solutions." },
  { title: "Bamboo Huts", slug: "bamboo-huts", imgSrc: bambo, description: "Sturdy bamboo huts perfect for outdoor setups and farm usage." },
  { title: "Bird Net & Fancy Chick Maker", slug: "bird-net-fancy-chick-maker", imgSrc:  fchick, description: "Eco-friendly bird nets and fancy chick makers for secure and organized farming." },
  { title: "Garden Bamboo Shades", slug: "garden-bamboo-shades", imgSrc: garden , description: "Stylish garden bamboo shades that offer comfort and natural cooling." },
  { title: "PVC Bamboo Shade", slug: "pvc-bamboo-shade", imgSrc:  shade, description: "Weatherproof PVC bamboo shade ideal for balconies and open spaces." },
  { title: "Patio Chick Blinds", slug: "patio-chick-blinds", imgSrc:  patio, description: "Elegant chick blinds perfect for patios and outdoor areas." },
  { title: "Eco Bamboo Partition", slug: "eco-bamboo-partition", imgSrc: eco, description: "Sustainable bamboo partitions for modern interiors and privacy." },
  { title: "Designer Bamboo Ceiling", slug: "designer-bamboo-ceiling", imgSrc:designer, description: "Premium designer bamboo ceilings to add rustic charm and elegance." },
];

const ServicesSection = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const loadMore = () => setVisibleCount((prev) => prev + 6);

  return (
    <section
      className="relative py-10 font-[Poppins] text-gray-800 overflow-hidden"
      style={{
        backgroundImage: `url(${bambooBg})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f0fff0]/40 to-[#ffffff]/80 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Section Header */}
      <div className="relative z-10 text-center mb-14">
        <h2 className="text-5xl md:text-6xl font-extrabold text-[#2BA44A] drop-shadow-md">
          Our <span className="text-[#00733B]">Bamboo Creations</span>
        </h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-lg">
          Explore our premium handcrafted bamboo solutions — eco-friendly,
          elegant, and made to blend nature with innovation.
        </p>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {products.slice(0, visibleCount).map((product, index) => (
          <Link
            key={index}
            to={`/services/${product.slug}`}
            className="block"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative group overflow-hidden rounded-2xl shadow-xl bg-white/90 border border-gray-200 backdrop-blur-md hover:shadow-2xl cursor-pointer"
            >
              <img
                src={product.imgSrc}
                alt={product.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="text-xl font-semibold text-white drop-shadow-lg flex items-center gap-2">
                  <FaLeaf className="text-[#FFD700]" /> {product.title}
                </h3>
                <p className="text-gray-200 text-sm mt-2">{product.description}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < products.length && (
        <div className="flex justify-center mt-12 relative z-10">
          <motion.button
            onClick={loadMore}
            whileTap={{ scale: 0.95 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(43,164,74,0.4)",
            }}
            className="px-8 py-3 rounded-full bg-[#2BA44A] text-white font-semibold shadow-lg hover:bg-[#00733B] transition-all duration-300"
          >
            Load More ↓
          </motion.button>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
