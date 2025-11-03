import React from "react";
import { motion } from "framer-motion";

const colors = {
  green: "#2BA44A",
  darkGreen: "#0E3D23",
  gold: "#D4AF37",
  beige: "#F9F8F3",
  white: "#FFFFFF",
};

const PrivacyPolicy = () => {
  return (
    <div
      className="w-full min-h-screen py-8 px-6 md:px-20"
      style={{
        background: `linear-gradient(to bottom right, ${colors.beige}, ${colors.white})`,
      }}
    >
      {/* Header Section */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1
          className="text-4xl md:text-6xl font-bold mb-4"
          style={{
            color: colors.darkGreen,
            letterSpacing: "1px",
          }}
        >
          Privacy Policy
        </h1>
        <div className="w-24 h-1 mx-auto rounded-full" style={{ background: colors.gold }}></div>
        <p
          className="text-gray-700 text-sm md:text-base mt-4 max-w-2xl mx-auto"
          style={{ fontFamily: "Poppins" }}
        >
          Last Updated: October 2025
        </p>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl p-8 md:p-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Intro */}
        <section className="mb-10">
          <p className="text-gray-700 text-lg leading-relaxed">
            At <span className="font-semibold" style={{ color: colors.green }}> Bamboo Chick Maker</span>, 
            your privacy is our priority. We are dedicated to protecting your personal information 
            and maintaining your trust through secure and transparent practices.
          </p>
        </section>

        {/* Section 1 */}
        <Section
          title="1. Information We Collect"
          content={[
            "Personal Details such as name, phone number, email address, and address when you make an inquiry or purchase.",
            "Usage Data about how you interact with our website, such as pages visited and time spent.",
            "Transactional Information including purchase details and communication records.",
            "Cookies & Analytics to enhance your browsing experience.",
          ]}
        />

        {/* Section 2 */}
        <Section
          title="2. How We Use Your Information"
          content={[
            "To process and manage your orders and service requests.",
            "To respond to your queries or feedback promptly.",
            "To improve our website and customer experience.",
            "To send updates about new designs, offers, or exhibitions (only if you opt-in).",
          ]}
        />

        {/* Section 3 */}
        <Section
          title="3. Information Sharing and Disclosure"
          content={[
            "We do not sell or rent your information to third parties.",
            "Your data may only be shared with trusted partners such as logistics, technical, or legal services under strict confidentiality.",
          ]}
        />

        {/* Section 4 */}
        <Section
          title="4. Data Security"
          content={[
            "We use advanced encryption and secure servers to protect your personal data.",
            "Our systems are regularly updated to ensure the highest level of data protection.",
          ]}
        />

        {/* Section 5 */}
        <Section
          title="5. Your Rights and Choices"
          content={[
            "You may access, correct, or delete your personal data at any time.",
            "You can opt out of marketing emails or disable cookies through your browser settings.",
          ]}
        />

        {/* Section 6 */}
        <Section
          title="6. Cookies Policy"
          content={[
            "Our website uses cookies to personalize your browsing experience.",
            "You may choose to disable cookies, but some features may not function optimally.",
          ]}
        />

        {/* Section 7 */}
        <Section
          title="7. Third-Party Links"
          content={[
            "Our website may contain links to other sites. We are not responsible for their content or privacy practices.",
          ]}
        />

        {/* Section 8 */}
        <Section
          title="8. Policy Updates"
          content={[
            "This Privacy Policy may be updated periodically to reflect new regulations or improvements.",
            "Please check this page regularly for the latest version.",
          ]}
        />

        {/* Section 9 */}
        <Section
          title="9. Contact Us"
          content={[
            "If you have questions about this Privacy Policy, feel free to contact us:",
            "📍 Address: [Address: Plot No. GH4 Ground Floor Society Expressway, Nearby Royal Park, Sector 137, Noida, Uttar Pradesh 201304]",
            "📞 Phone: +91 70600 72378,+91 90121 39173,+91 98710 32090",
            "📩 Email: Bamboochickmakerservice@gmail.com",
          ]}
        />
      </motion.div>
    </div>
  );
};

// Reusable Section Component
const Section = ({ title, content }) => {
  const colors = {
    green: "#2BA44A",
    darkGreen: "#0E3D23",
    gold: "#D4AF37",
  };
  return (
    <motion.div
      className="mb-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h3
        className="text-xl md:text-2xl font-semibold mb-3"
        style={{ color: colors.darkGreen }}
      >
        {title}
      </h3>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        {content.map((item, index) => (
          <li key={index} className="leading-relaxed text-base">
            {item}
          </li>
        ))}
      </ul>
      <div className="w-12 h-1 mt-4 rounded-full" style={{ background: colors.gold }}></div>
    </motion.div>
  );
};

export default PrivacyPolicy;
