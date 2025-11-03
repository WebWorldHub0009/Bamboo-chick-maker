import React, { useState } from "react";
import {
  FaEye,
  FaDownload,
  FaTimes,
  FaShieldAlt,
  FaCheckCircle,
  FaUserTie,
} from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi2";
import CertificateHero from "../components/GalleryHero";

// 🌿 Bamboo Chick Maker Color Palette
const colors = {
  darkGreen: "#005B2C",
  leafGreen: "#2BA44A",
  gold: "#E6C200",
  orangeGold: "#F4A300",
  cream: "#FFF9E6",
  charcoal: "#1C1C1C",
  lightBeige: "#F7F3E9",
  white: "#FFFFFF",
};

// 🧾 Certificate Data
const certificates = [
  {
    id: 1,
    name: "Udyam Registration Certificate",
    description:
      "Bamboo Chick Maker is proudly registered under the MSME (Udyam) category. This certification ensures our commitment to eco-conscious production, ethical sourcing, and transparent craftsmanship in every shade and bamboo design.",
    file: "",
    tag: "Govt Approved",
  },
  {
    id: 2,
    name: "Eco-Friendly Craft Certification",
    description:
      "Recognized for promoting sustainability, this certificate validates our processes as environmentally responsible. Each bamboo chick we create aligns with nature — durable, recyclable, and handcrafted by skilled artisans.",
    file: "",
    tag: "Sustainability Certified",
  },
];

export default function CertificatePage() {
  const [previewFile, setPreviewFile] = useState(null);

  return (
    <>
      {/* Hero Section */}
      <CertificateHero />

      {/* Certificates Section */}
      <section
        className="relative w-full py-10 px-6 md:px-16"
        style={{
          background: `linear-gradient(to bottom, ${colors.lightBeige}, ${colors.white})`,
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              fontFamily: "Italiana, serif",
              color: colors.charcoal,
            }}
          >
            Our <span style={{ color: colors.leafGreen }}>Authentic</span>{" "}
            Certifications
          </h2>

          <p
            className="max-w-3xl mx-auto text-lg leading-relaxed mb-16"
            style={{
              fontFamily: "Zen Dots, sans-serif",
              color: colors.darkGreen,
            }}
          >
            At <span style={{ color: colors.orangeGold }}>Bamboo Chick Maker</span>, 
            our certifications stand as a symbol of <strong>trust, quality, and eco-integrity</strong>. 
            We take pride in blending artistry with ethical craftsmanship.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {certificates.map(({ id, name, description, file, tag }) => (
            <div
              key={id}
              className="relative rounded-3xl border border-[#ddd] p-8 text-left transition-all duration-500 backdrop-blur-sm bg-white/80 hover:bg-white/100 hover:shadow-2xl hover:-translate-y-2"
              style={{
                boxShadow: `0 4px 25px rgba(0,0,0,0.1)`,
              }}
            >
              {/* Tag */}
              <div
                className="absolute top-4 right-4 text-xs font-semibold px-4 py-1 rounded-full shadow-sm"
                style={{
                  background: `linear-gradient(90deg, ${colors.leafGreen}, ${colors.orangeGold})`,
                  color: colors.white,
                }}
              >
                {tag}
              </div>

              {/* Title */}
              <div className="flex items-center gap-4 mb-4">
                <HiDocumentText
                  className="text-5xl"
                  style={{ color: colors.orangeGold }}
                />
                <h3
                  className="text-2xl font-bold"
                  style={{
                    fontFamily: "Italiana, serif",
                    color: colors.charcoal,
                  }}
                >
                  {name}
                </h3>
              </div>

              {/* Description */}
              <p
                className="text-base leading-relaxed mb-8"
                style={{
                  color: colors.darkGreen,
                  fontFamily: "Zen Dots, sans-serif",
                }}
              >
                {description}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setPreviewFile(file)}
                  className="flex-1 py-3 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
                  style={{
                    background: `linear-gradient(90deg, ${colors.leafGreen}, ${colors.darkGreen})`,
                    fontFamily: "Zen Dots, sans-serif",
                  }}
                >
                  <FaEye />
                  View Certificate
                </button>

                <a
                  href={file}
                  download
                  className="flex-1 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 border-2 transition-all duration-300 hover:scale-105"
                  style={{
                    borderColor: colors.orangeGold,
                    color: colors.orangeGold,
                    fontFamily: "Zen Dots, sans-serif",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = colors.orangeGold;
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = colors.orangeGold;
                  }}
                >
                  <FaDownload />
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section
        className="relative text-center text-white py-10"
        style={{
          background: `linear-gradient(135deg, ${colors.leafGreen}, ${colors.darkGreen})`,
        }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <FaShieldAlt className="text-5xl mx-auto mb-4 text-[#F4A300]" />
            <h3
              className="text-2xl font-semibold mb-2"
              style={{ fontFamily: "Italiana, serif" }}
            >
              Govt. Approved
            </h3>
            <p className="text-sm max-w-xs mx-auto">
              Officially recognized and registered, ensuring complete trust and compliance.
            </p>
          </div>

          <div>
            <FaCheckCircle className="text-5xl mx-auto mb-4 text-[#F4A300]" />
            <h3
              className="text-2xl font-semibold mb-2"
              style={{ fontFamily: "Italiana, serif" }}
            >
              100% Authentic
            </h3>
            <p className="text-sm max-w-xs mx-auto">
              Every product is made with genuine materials and certified sustainability.
            </p>
          </div>

          <div>
            <FaUserTie className="text-5xl mx-auto mb-4 text-[#F4A300]" />
            <h3
              className="text-2xl font-semibold mb-2"
              style={{ fontFamily: "Italiana, serif" }}
            >
              Trusted Craft Brand
            </h3>
            <p className="text-sm max-w-xs mx-auto">
              A name built on decades of artistic excellence and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Modal */}
      {previewFile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-6">
          <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#eee]">
            <button
              onClick={() => setPreviewFile(null)}
              className="absolute top-3 right-3 bg-red-600 text-white rounded-full p-2 shadow hover:bg-red-700 transition"
            >
              <FaTimes />
            </button>
            <iframe
              src={previewFile}
              title="Certificate Preview"
              className="w-full h-[80vh] border-0 rounded-b-3xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
