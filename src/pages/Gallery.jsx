// src/components/Showcase.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import GalleryHero from "../components/GalleryHero";

import img1 from "../assets/gallery/g1.jpg";
import img2 from "../assets/gallery/g2.jpg";
import img3 from "../assets/gallery/g3.jpg";
import img4 from "../assets/gallery/g4.jpg";
import img5 from "../assets/gallery/g5.jpg";
import img6 from "../assets/gallery/g6.jpg";
import img7 from "../assets/gallery/g7.jpg";
import img8 from "../assets/gallery/g8.jpg";
import img9 from "../assets/gallery/g9.jpg";
import img10 from "../assets/gallery/g10.jpg";
import img11 from "../assets/gallery/g12.jpg";
import img12 from "../assets/gallery/g3.jpg";
import img13 from "../assets/gallery/g14.jpg";
import img14 from "../assets/gallery/g15.jpg";
import img15 from "../assets/gallery/g16.jpg";

import img16 from "../assets/gallery/g17.jpg";
import img17 from "../assets/gallery/g18.jpg";
// import img18 from "../assets/gallery/g19.jpg";
import img19 from "../assets/gallery/g20.jpg";
import img20 from "../assets/gallery/g11.jpg";

// 🌿 Brand colors for Bamboo Chick Maker
const colors = {
  deepBlue: "#234A8A",
  leafGreen: "#2BA44A",
  darkGreen: "#00733B",
  orangeGold: "#F4A300",
  creamWhite: "#FDF7EC",
  bambooBrown: "#A47C48",
  textDark: "#1C1C1C",
};

const images = [
  img1, img2, img3, img4, img5, img6, img7,
  img8, img9, img10, img11, img12, img13, img14, img15,img16,img17,img19,img20
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openImage = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => {
      const newIndex = (prev - 1 + images.length) % images.length;
      setSelectedImage(images[newIndex]);
      return newIndex;
    });
  };

  const nextImage = () => {
    setCurrentIndex((prev) => {
      const newIndex = (prev + 1) % images.length;
      setSelectedImage(images[newIndex]);
      return newIndex;
    });
  };

  return (
    <>
      <GalleryHero />

      {/* 🌾 GALLERY SECTION */}
      <section
        id="gallery"
        className="bg-[#FDF7EC] px-4 md:px-12 lg:px-20 py-10 relative overflow-hidden"
      >
        {/* Decorative glowing orb background */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 30% 70%, rgba(244,163,0,0.15), transparent 70%)",
          }}
        />

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <p
            className="font-semibold uppercase tracking-wider"
            style={{ color: colors.leafGreen }}
          >
            Our Handcrafted Creations
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold mt-2"
            style={{
              color: colors.textDark,
              fontFamily: "Italiana, serif",
            }}
          >
            A Gallery of <span style={{ color: colors.orangeGold }}>Bamboo Beauty</span>
          </h2>
          <div
            className="w-24 h-1 mx-auto mt-4 rounded-full"
            style={{ background: colors.leafGreen }}
          ></div>
          <p
            className="mt-5 text-lg leading-relaxed"
            style={{
              color: "#555555",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Discover the fine craftsmanship and artistic touch in every product
            made by <span style={{ color: colors.bambooBrown, fontWeight: 600 }}>
              Bamboo Chick Maker
            </span>. From natural tones to intricate weaves — each frame tells
            the story of sustainable art.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden cursor-pointer rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.15)] group"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              onClick={() => openImage(i)}
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-[260px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                key={selectedImage}
                className="relative w-full max-w-6xl mx-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Bamboo Artwork"
                  className="w-full max-h-[85vh] object-contain rounded-2xl bg-[#fff] p-3 shadow-[0_0_30px_rgba(244,163,0,0.3)]"
                />

                {/* Close */}
                <button
                  className="absolute top-3 right-3 text-white bg-[#2BA44A]/80 p-3 rounded-full hover:bg-[#F4A300] hover:text-black transition"
                  onClick={closeModal}
                >
                  <FaTimes size={20} />
                </button>

                {/* Prev */}
                <button
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white bg-[#2BA44A]/80 p-3 rounded-full hover:bg-[#F4A300] hover:text-black transition"
                  onClick={prevImage}
                >
                  <FaArrowLeft size={20} />
                </button>

                {/* Next */}
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white bg-[#2BA44A]/80 p-3 rounded-full hover:bg-[#F4A300] hover:text-black transition"
                  onClick={nextImage}
                >
                  <FaArrowRight size={20} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default Gallery;
