// src/pages/Contact.jsx
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import bg from "../assets/home/fbg.jpg";
import ContactHero from "../components/ContactHero";

const allServices = [
  "Bamboo Chick Outdoor",
  "Bamboo Chick Balcony",
  "Bamboo Chick Simple",
  "Bamboo Chick PVC",
  "Bamboo Fancy",
  "Chick Blinds",
  "Bamboo Chick Outdoor Side",
  "Indoor Partition",
  "Windows Blinds",
  "Bamboo Fencing Blind",
  "Window AC Chick",
  "Sun Protection Chick",
  "Fancy Chick",
  "Roman Blind",
  "Wooden Blinds",
  "Zebra Blinds",
  "Aluminium Blinds",
  "Rolling Blinds",
  "Vertical Blinds",
  "Bamboo Ambela",
  "Bamboo Forceiling",
  "Bamboo Old Design",
  "Bamboo Wallceiling",
  "Bamboo Huts",
  "Bamboo Jafri",
  "Bamboo Resort Umbrella",
  "New Design",
  "Bamboo Old Chick",
  "Green Ghas",
  "Green Net",
  "PVC Chick",
  "Pigeon Net",
  "Bamboo Outdoor PVC",
];

const colors = {
  bambooGreen: "#2E5A3D",
  lightBeige: "#F7F3E9",
  strawGold: "#D1A054",
  softCream: "#FBF8F1",
  deepBrown: "#3E2C1C",
  charcoal: "#1C1C1C",
};

const Contact = () => {
  return (
    <>
      <ContactHero />

      {/* Contact Section */}
      <section className="w-full min-h-screen flex flex-col lg:flex-row bg-[#FBF8F1] text-[#1C1C1C]">
        {/* Left Panel: Info */}
        <div className="w-full lg:w-1/2 bg-[#fffaf3] px-10 py-16 shadow-xl flex flex-col justify-center">
          <h2
            className="text-5xl font-bold mb-6 pb-3 inline-block border-b-4 font-[Poppins]"
            style={{
              borderColor: colors.strawGold,
              color: colors.bambooGreen,
            }}
          >
            Contact Us
          </h2>

          <p
            className="text-lg mb-6 font-light leading-relaxed"
            style={{ color: colors.deepBrown }}
          >
            At{" "}
            <span style={{ color: colors.strawGold, fontWeight: "600" }}>
              Bamboo Chick Maker
            </span>
            , we craft premium bamboo blinds and natural decor that bring warmth
            and elegance to your spaces. Connect with us for customized bamboo
            solutions across Delhi NCR.
          </p>

          <div className="space-y-5 text-base">
            <div className="flex items-start gap-3">
              <FaPhoneAlt size={22} style={{ color: colors.strawGold }} />
              <p>
                +91 98710 32090
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaEnvelope size={22} style={{ color: colors.strawGold }} />
              <p>Bamboochickmakerservice@gmail.com</p>
            </div>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt size={22} style={{ color: colors.strawGold }} />
              <p>Address: Plot No. GH4 Ground Floor Society Expressway, Nearby Royal Park, Sector 137, Noida, Uttar Pradesh 201304</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex space-x-5 text-2xl">
            {[FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube].map(
              (Icon, i) => (
                <Icon
                  key={i}
                  className="hover:scale-110 transition transform duration-300 cursor-pointer"
                  style={{ color: colors.bambooGreen }}
                />
              )
            )}
          </div>
        </div>

        {/* Right Panel: Form */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center shadow-xl">
          {bg && (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${bg})` }}
            />
          )}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "rgba(30, 50, 30, 0.88)",
            }}
          />

          {/* Form */}
          <form
            action="https://formsubmit.co/Bamboochickmakerservice@gmail.com"
            method="POST"
            className="relative z-10 w-full max-w-lg px-8 py-12"
          >
            <h3
              className="text-2xl font-bold mb-6 border-b-2 inline-block font-[Poppins]"
              style={{
                borderColor: colors.strawGold,
                color: colors.strawGold,
              }}
            >
              Send Us a Message
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-2 focus:border-[#D1A054] outline-none transition duration-200"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-2 focus:border-[#D1A054] outline-none transition duration-200"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                required
                className="bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-2 focus:border-[#D1A054] outline-none transition duration-200"
              />
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                required
                className="bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-2 focus:border-[#D1A054] outline-none transition duration-200"
              />

              <select
                name="service"
                required
                className="bg-transparent border-b border-gray-400 text-white py-2 focus:border-[#D1A054] outline-none transition duration-200"
              >
                <option value="" disabled selected className="text-gray-400">
                  Select Service
                </option>
                {allServices.map((s, i) => (
                  <option key={i} value={s} className="text-black">
                    {s}
                  </option>
                ))}
              </select>

              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={4}
                className="col-span-full bg-transparent border-b border-gray-400 text-white placeholder-gray-400 py-2 focus:border-[#D1A054] outline-none transition duration-200"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 font-semibold rounded-full transition duration-300 shadow-lg hover:scale-105"
              style={{
                backgroundColor: colors.strawGold,
                color: colors.charcoal,
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Send Message
            </button>

            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://www.bamboochickmaker.in/"
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
