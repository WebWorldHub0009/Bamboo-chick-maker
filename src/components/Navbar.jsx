// src/components/ModernNavbar.jsx
import React, { useState, useRef, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaHome,
  FaTruckMoving,
  FaInfoCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaIdBadge,
  FaCertificate,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/bmc.png";

const colors = {
  deepBlue: "#234A8A",
  brightRed: "#E8452D",
  leafGreen: "#2BA44A",
  darkGreen: "#00733B",
  orangeGold: "#F4A300",
  blackPure: "#000000",
  whitePure: "#FFFFFF",
};

const navItems = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "About", path: "/about", icon: <FaInfoCircle /> },
  { name: "Services", path: "/products", icon: <FaTruckMoving /> },
  { name: "Gallery", path: "/gallery", icon: <FaEnvelope /> },
  { name: "Contact", path: "/contact", icon: <FaPhoneAlt /> },
  // { name: "Certificates", path: "/certificates", icon: <FaCertificate /> },
];

const socialLinks = {
  facebook: "https://www.facebook.com/bamboochickmaker",
  instagram: "https://www.instagram.com/bamboochickmaker/",
  linkedin: "https://www.linkedin.com/in/bamboochickmaker/",
};

const ModernNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const panelRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const navLinkStyle = (path) => ({
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "4px 8px",
    cursor: "pointer",
    color: pathname === path ? colors.leafGreen : colors.blackPure,
    fontWeight: pathname === path ? "600" : "400",
    transition: "all 0.3s ease",
  });

  return (
    <>
      {/* 🔹 Slim Top Header (Desktop Only) */}
      <div
        style={{
          background: `linear-gradient(to right, ${colors.deepBlue}, ${colors.leafGreen}, ${colors.deepBlue})`,
          color: colors.whitePure,
        }}
        className="hidden md:block"
      >
        <div className="flex items-center justify-between px-6 py-2 text-sm">
         
          <div className="flex items-center gap-6">
            {["+91 9871032090"].map((phone, idx) => (
              <p key={idx} className="flex items-center gap-2">
                <FaPhoneAlt style={{ color: colors.brightRed }} />
                <a href={`tel:${phone}`} style={{ color: colors.whitePure }}>
                  {phone}
                </a>
              </p>
            ))}
            <p className="flex items-center gap-2">
              <FaEnvelope style={{ color: colors.orangeGold }} />
              <a
                href="mailto:Bamboochickmakerservice@gmail.com"
                style={{ color: colors.whitePure }}
              >
                Bamboochickmakerservice@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <nav
        style={{
          backgroundColor: colors.whitePure,
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          position: "relative",
          zIndex: 50,
        }}
        className="w-full px-4 md:px-12 py-1"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt=" Bamboo Chick Maker Logo"
              style={{ height: "70px", width: "auto" }}
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-4 text-sm font-medium uppercase">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path} style={navLinkStyle(item.path)}>
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-3">
            {Object.entries(socialLinks).map(([k, url]) => {
              const Icon =
                k === "facebook" ? FaFacebookF : k === "instagram" ? FaInstagram : FaLinkedinIn;
              return (
                <a
                  key={k}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    backgroundColor: colors.whitePure,
                    color: colors.deepBlue,
                    border: `1px solid ${colors.deepBlue}`,
                    transition: "all 0.3s ease",
                  }}
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <div style={{ color: colors.blackPure }} className="md:hidden">
            <FaBars onClick={toggleMenu} className="cursor-pointer text-2xl" />
          </div>
        </div>

        {/* 🔹 Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 flex">
            <div
              ref={panelRef}
              style={{
                width: "18rem",
                background: colors.whitePure,
                boxShadow: "2px 0 6px rgba(0,0,0,0.1)",
              }}
              className="h-full px-6 py-4 flex flex-col overflow-y-auto"
            >
              {/* Top Header inside Mobile Menu */}
              <div className="flex justify-between items-center mb-2">
                <Link to="/" style={{ color: colors.deepBlue, fontWeight: "bold" }}>
                   Bamboo Chick Maker
                </Link>
                <FaTimes
                  style={{ color: colors.blackPure }}
                  className="text-xl cursor-pointer"
                  onClick={toggleMenu}
                />
              </div>

              <hr className="my-3 border-gray-300" />

              {/* Navigation Links */}
              <nav className="flex flex-col gap-3 text-sm">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      color: pathname === item.path ? colors.leafGreen : colors.blackPure,
                      fontWeight: pathname === item.path ? "600" : "400",
                    }}
                    onClick={toggleMenu}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* WhatsApp Button */}
              <div className="mt-6">
                <a
                  href="https://wa.me/+919650685214"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "100%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    borderRadius: "9999px",
                    backgroundColor: colors.leafGreen,
                    color: colors.whitePure,
                    fontWeight: "600",
                    padding: "10px",
                  }}
                >
                  <FaWhatsapp /> WhatsApp Us
                </a>
              </div>

              {/* Bottom Social Icons */}
              <div className="mt-auto pt-6 border-t">
                 {/* 🔹 Contact Info inside mobile menu */}
              <div className="space-y-2 mb-4 text-sm">
                {["+91-9871032090"].map((phone, idx) => (
                  <p key={idx} className="flex items-center gap-2">
                    <FaPhoneAlt className="text-[#E8452D]" />{" "}
                    <a href={`tel:${phone}`} className="text-black">
                      {phone}
                    </a>
                  </p>
                ))}
                <p className="flex items-center gap-2">
                  <FaEnvelope className="text-[#F4A300]" />{" "}
                  <a
                    href="mailto:Bamboochickmakerservice@gmail.com"
                    className="text-black"
                  >
                   Bamboochickmakerservice@gmail.com
                  </a>
                </p>
              </div>
                <div className="flex gap-3 mt-3">
                  {Object.entries(socialLinks).map(([k, url]) => {
                    const Icon =
                      k === "facebook" ? FaFacebookF : k === "instagram" ? FaInstagram : FaLinkedinIn;
                    return (
                      <a
                        key={k}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          width: "36px",
                          height: "36px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "50%",
                          backgroundColor: "#F0F0F0",
                          color: colors.deepBlue,
                          transition: "all 0.3s ease",
                        }}
                      >
                        <Icon size={16} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div
              className="flex-1"
              style={{ background: "rgba(0,0,0,0.3)", backdropFilter: "blur(4px)" }}
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
        )}
      </nav>
    </>
  );
};

export default ModernNavbar;
