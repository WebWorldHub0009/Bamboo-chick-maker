import React from "react";
import { motion } from "framer-motion";

const colors = {
  green: "#2BA44A",
  darkGreen: "#0E3D23",
  gold: "#D4AF37",
  beige: "#F9F8F3",
  white: "#FFFFFF",
};

const TermsAndConditions = () => {
  return (
    <div
      className="w-full min-h-screen py-8 px-6 md:px-20"
      style={{
        background: `linear-gradient(to bottom right, ${colors.beige}, ${colors.white})`,
      }}
    >
      {/* Header */}
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
          Terms & Conditions
        </h1>
        <div
          className="w-24 h-1 mx-auto rounded-full"
          style={{ background: colors.gold }}
        ></div>
        <p
          className="text-gray-700 text-sm md:text-base mt-4 max-w-2xl mx-auto"
          style={{ fontFamily: "Poppins" }}
        >
          Last Updated: October 2025
        </p>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl p-8 md:p-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Introduction */}
        <section className="mb-10">
          <p className="text-gray-700 text-lg leading-relaxed">
            Welcome to{" "}
            <span className="font-semibold" style={{ color: colors.green }}>
               Bamboo Chick Maker
            </span>
            . By accessing or using our website, products, or services, you agree
            to comply with the following Terms and Conditions. Please read them
            carefully before engaging with us.
          </p>
        </section>

        <Section
          title="1. General Terms"
          content={[
            "By using our website or placing an order, you confirm that you are at least 18 years old or have parental consent.",
            "All products are handcrafted using natural bamboo materials. Variations in color, texture, or pattern are normal and add to their uniqueness.",
            "We reserve the right to modify, update, or remove content, services, or pricing without prior notice.",
          ]}
        />

        <Section
          title="2. Orders and Payments"
          content={[
            "All orders must be confirmed via email, WhatsApp, or through our website contact form.",
            "Payment must be made as per the agreed quotation or invoice terms.",
            "We accept payments through secure channels only. Please verify official contact details before making any payment.",
          ]}
        />

        <Section
          title="3. Delivery and Installation"
          content={[
            "Delivery timelines depend on the complexity of your order and location.",
            "Installation services are available upon request and may include additional charges.",
            "Delays due to natural causes, material shortages, or unforeseen circumstances are not the company’s liability.",
          ]}
        />

        <Section
          title="4. Returns and Refunds"
          content={[
            "As our products are custom-made, we do not offer standard returns or refunds once the order is confirmed.",
            "However, if a product is damaged during delivery, we will offer replacement or repair based on assessment.",
            "Any claim must be reported within 48 hours of delivery with proof (images/videos).",
          ]}
        />

        <Section
          title="5. Intellectual Property"
          content={[
            "All images, designs, logos, and written content on our website are the intellectual property of  Bamboo Chick Maker.",
            "Any unauthorized use, duplication, or redistribution of our content is strictly prohibited.",
          ]}
        />

        <Section
          title="6. Limitation of Liability"
          content={[
            "We are not liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our products or services.",
            "Customers are responsible for ensuring that installations comply with local safety or building standards.",
          ]}
        />

        <Section
          title="7. Privacy and Data"
          content={[
            "We value your privacy and ensure your personal data is handled as per our Privacy Policy.",
            "By using our website, you consent to the collection and use of information as outlined in our Privacy Policy.",
          ]}
        />

        <Section
          title="8. Third-Party Links"
          content={[
            "Our website may include links to other websites. We are not responsible for the content or privacy practices of those sites.",
          ]}
        />

        <Section
          title="9. Changes to Terms"
          content={[
            " Bamboo Chick Maker reserves the right to update these Terms & Conditions at any time without prior notice.",
            "Revised terms will take effect immediately upon being posted on this page.",
          ]}
        />

        <Section
          title="10. Contact Us"
          content={[
            "For any queries, clarifications, or disputes regarding these Terms & Conditions, please reach out to us at:",
            "📍 Address: [Address: Plot No. GH4 Ground Floor Society Expressway, Nearby Royal Park, Sector 137, Noida, Uttar Pradesh 201304]",
            "📞 Phone: +91 70600 72378 , +91 90121 39173 ,+91 98710 32090",
            "📩 Email: Bamboochickmakerservice@gmail.com",
          ]}
        />
      </motion.div>
    </div>
  );
};

// 🔹 Reusable Section Component
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
      <div
        className="w-12 h-1 mt-4 rounded-full"
        style={{ background: colors.gold }}
      ></div>
    </motion.div>
  );
};

export default TermsAndConditions;
