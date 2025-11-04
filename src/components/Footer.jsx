// src/components/Footer.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaHome,
  FaInfoCircle,
  FaTruckMoving,
  FaCertificate,
  FaContao,
  FaOldRepublic,
  FaTerminal,
} from "react-icons/fa";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";
import bgFooter from "../assets/home/bg2.jpg"; 
// import logo from "../assets/logo.png"; 

const colors = {
  leafGreen: "#2BA44A",
  darkGreen: "#00733B",
  gold: "#D4AF37",
  white: "#FFFFFF",
  gray: "#D9D9D9",
  deepBlue: "#234A8A",
};

const services = [
   "Bamboo Jafhari",
   "Design Wali Chick",
   "Kabutar Jali", 
   "Roller Blind", 
   "Bamboo Huts" ,
   "Bird Net & Fancy Chick Maker", 
   "Garden Bamboo Shades", 
   "PVC Bamboo Shade", 
   "Patio Chick Blinds", 
   "Eco Bamboo Partition",  
   "Designer Bamboo Ceiling",

];

export default function Footer() {
  useEffect(() => {}, []);

  return (
    <footer className="relative pt-10 pb-5 px-6 md:px-16 font-[Poppins] overflow-hidden text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${bgFooter})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      />
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* Main Content */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* About Section */}
        <div className="flex flex-col space-y-4">
          
          <p
            className="text-3xl md:text-4xl font-bold tracking-wide"
            style={{ color: colors.deepBlue, fontFamily: "'Italiana', serif" }}
          >
            Bamboo Chick Maker
          </p>
          <p className="leading-relaxed text-gray-800 text-lg mt-2">
            Delhi NCR’s trusted name for handcrafted bamboo blinds, outdoor
            shades, and eco-friendly decorative solutions.
          </p>

          {/* Social Icons */}
          <div className="mt-4 flex space-x-4">
            {[ 
              ["https://www.instagram.com", FaInstagram],
              ["https://www.facebook.com", FaFacebookF],
              [
                "https://api.whatsapp.com/send?phone=919650685214&text=Hello%20Bamboo%20Chick%20Maker",
                FaWhatsapp,
              ],
            ].map(([url, Icon], i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2BA44A] hover:bg-[#00733B] text-white transition duration-300 shadow-lg"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Webmail (optional) */}
          <div className="mt-4">
            <a
              href="mailto:rajeevgihar5214@gmail.com"
              className="inline-flex items-center gap-2 bg-[#2BA44A] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#00733B] hover:text-white transition duration-300 shadow-md"
            >
              <FaEnvelope /> Send Mail
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            className="text-3xl font-semibold mb-4"
            style={{ color: colors.deepBlue, fontFamily: "'Italiana', serif" }}
          >
            Quick Links
          </h4>
          <ul className="space-y-3">
            {[ 
              ["Home", "/", <FaHome />],
              ["About Us", "/about", <FaInfoCircle />],
              ["Gallery", "/gallery", <FaTruckMoving />],
              ["Contact Us", "/contact", <FaContao />],
              // ["Certificates", "/certificates", <FaCertificate />],
              ["Privacy & Policy", "/privacy&policy", <FaOldRepublic />],
              ["Terms & Condition", "/term&condition", <FaTerminal />],
            ].map(([text, link, icon], i) => (
              <li key={i}>
                <Link
                  to={link}
                  className="flex items-center gap-2 text-gray-800 hover:text-[#2BA44A] transition duration-300"
                >
                  {icon} {text}
                </Link>
              </li>
            ))}
          </ul>
             {/* Email Info */}
          <div className="mt-6">
            <h5
              className="text-2xl font-semibold mb-2"
              style={{ color: colors.deepBlue, fontFamily: "'Italiana', serif" }}
            >
              Email
            </h5>
            <p className="text-sm flex items-center gap-2">
              <FaEnvelope style={{ color: colors.leafGreen }} />
              <a
                href="mailto:Info@bamboochickmakerservice.co.in"
                className="text-gray-800 hover:text-[#2BA44A] transition duration-300"
              >
              Info@bamboochickmakerservice.co.in
              </a>
               
            </p>
                <p className="text-sm flex items-center gap-2">
             <FaEnvelope style={{ color: colors.leafGreen }} />
              <a
                href="mailto:Bamboochickmakerservice@gmail.com"
                className="text-gray-800 hover:text-[#2BA44A] transition duration-300"
              >
             Bamboochickmakerservice@gmail.com
              </a>
               
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h4
            className="text-3xl font-semibold mb-4"
            style={{ color: colors.deepBlue, fontFamily: "'Italiana', serif" }}
          >
            Services
          </h4>
          <ul className="space-y-3">
            {services.map((service, i) => (
              <li key={i} className="flex items-center gap-2">
                <FaTruckMoving style={{ color: colors.leafGreen }} />
                <span className="text-gray-800 hover:text-[#2BA44A] transition duration-300">
                  {service}
                </span>
              </li>
            ))}
          </ul>

       
        </div>

        {/* Contact Info */}
        <div>
          <h4
            className="text-3xl font-semibold mb-4"
            style={{ color: colors.deepBlue, fontFamily: "'Italiana', serif" }}
          >
            Contact Info
          </h4>
          <address className="not-italic leading-relaxed mb-4 text-gray-800">
          Address: Plot No. GH4 Ground Floor Society Expressway, Nearby Royal Park, Sector 137, Noida, Uttar Pradesh 201304
          </address>

          {["+91 9012139173",].map((num, i) => (
            <p key={i} className="text-sm mb-2 flex items-center gap-2">
              <FaPhoneAlt style={{ color: colors.leafGreen }} />
              <a
                href={`tel:${num.replace(/\s/g, "")}`}
                className="text-gray-800 hover:text-[#2BA44A] transition duration-300"
              >
                {num}
              </a>
            </p>
          ))}

          <p className="text-xl text-[#234A8A] mb-2 flex items-center gap-2">
            <FaPhoneAlt style={{ color: colors.leafGreen }} /> Owner: Santosh
            Kumar
          </p>

          <div className="mb-4 flex justify-start items-center">
            <Translator />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 text-center text-xs text-gray-800 border-t border-gray-600 pt-6 space-y-2 relative z-10">
        <VisitorCounter />
        <p>
          © {new Date().getFullYear()} Bamboo Chick Maker. All rights reserved.
        </p>
        <p>
          Designed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-[#2BA44A] transition duration-300"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </footer>
  );
}
