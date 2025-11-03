// src/components/Testimonials.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import {
  FaUserCircle,
  FaLeaf,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

import bgImage from "../assets/home/bg2.jpg"; 

const testimonials = [
  {
    id: 1,
    text: " Bamboo Chick Maker created stunning bamboo blinds for our home — elegant, eco-friendly, and durable. Their craftsmanship is truly unmatched.",
    name: "Amit Sharma",
    role: "Architect, Lucknow",
  },
  {
    id: 2,
    text: "We ordered bamboo curtains for our café, and they completely transformed the ambience. Premium finish and on-time installation — highly recommended!",
    name: "Priya Verma",
    role: "Café Owner, Dehradun",
  },
  {
    id: 3,
    text: "Excellent work! The bamboo chicks were beautifully handcrafted, giving our office a natural and modern touch. Loved the quality and professionalism.",
    name: "Ravi Khanna",
    role: "Interior Designer, Delhi",
  },
  {
    id: 4,
    text: "The quality of bamboo and detailing are outstanding.  Bamboo Chick Maker’s team was professional and guided us perfectly throughout.",
    name: "Sonal Mehta",
    role: "Homeowner, Haridwar",
  },
  {
    id: 5,
    text: "Their designs reflect pure craftsmanship. The finish, texture, and polish exceeded our expectations — a perfect blend of nature and style!",
    name: "Rahul Tiwari",
    role: "Hotel Manager, Rishikesh",
  },
  {
    id: 6,
    text: "I was amazed by the finesse and creativity of their bamboo chick work. It adds warmth and elegance to our villa interiors.",
    name: "Sneha Joshi",
    role: "Villa Owner, Mussoorie",
  },
];

export default function Testimonials() {
  return (
    <section
      className="relative w-full py-8 px-6 md:px-12 lg:px-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      <div className="relative z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.h4
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm tracking-widest text-[#00733B] font-semibold uppercase"
          >
            Testimonials
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mt-2"
          >
            What Our <span className="text-[#00733B]">Clients</span> Say
          </motion.h2>
          <p className="mt-3 text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
            Discover what our clients say about the craftsmanship, design, and
            dedication that define  Bamboo Chick Maker.
          </p>
        </div>

        {/* Swiper */}
        <div className="relative py-5">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            speed={1000}
            className="pb-10"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-white  rounded-xl p-8  shadow-lg hover:shadow-2xl backdrop-blur-sm"
                >
                  {/* Quote Icons */}
                  <FaQuoteLeft className="absolute top-6 left-6 text-[#D4AF37] opacity-60 text-xl" />
                  <FaQuoteRight className="absolute bottom-6 right-6 text-[#D4AF37] opacity-60 text-xl" />

                  <div className="flex items-center gap-3 mb-5">
                    <FaUserCircle className="text-4xl text-[#D4AF37]" />
                    <FaLeaf className="text-2xl text-[#A4C639]" />
                  </div>

                  <p className="text-[#00733B] italic leading-relaxed mb-6">
                    “{item.text}”
                  </p>

                  <div className="mt-auto">
                    <h4 className="text-lg font-bold text-[#00733B]">
                      {item.name}
                    </h4>
                    <p className="text-sm text-[#E8452D]">{item.role}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation */}
          <div className="absolute -top-12 right-0 flex gap-4">
            <button className="testimonial-prev w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37] text-black hover:bg-[#fff] transition duration-300">
              <MdOutlineArrowBackIos />
            </button>
            <button className="testimonial-next w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37] text-black hover:bg-[#fff] transition duration-300">
              <MdOutlineArrowForwardIos />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
