"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SmartImage from "../components/SmartImage";

const data = [
  {
    year: 1992,
    text: "The journey began with the establishment of our first branch in Rajapur, laying the foundation for our future growth."
  },
  {
    year: 2006,
    text: "Expanded our presence with the launch of operations in Vishambar, strengthening our regional footprint."
  },
  {
    year: 2014,
    text: "Achieved recognition as India’s No. 2 in Hero MotoCorp sales, reflecting our commitment to excellence."
  },
  {
    year: 2015,
    text: "Built one of the country’s largest secondary networks, significantly expanding our nationwide reach."
  },
  {
    year: 2020,
    text: "Entered a new phase of progress with the launch of our Maruti Suzuki Arena showroom."
  },
  {
    year: 2021,
    text: "Diversified our offerings with the inauguration of the Maruti Suzuki Driving School."
  },
  {
    year: 2022,
    text: "Strengthened accessibility with the opening of our Arena showroom in Koraon."
  },
  {
    year: 2022,
    text: "Further expansion continued with the launch of our Arena showroom in Pratapgarh."
  },
  {
    year: 2022,
    text: "Extended our network with new outlets in Manjhanpur and Kunda."
  },
  {
    year: 2023,
    text: "Opened our Commercial Showroom in Naini, marking a significant step in our growth journey."
  },
  {
    year: 2023,
    text: "Launched True Value operations, expanding our presence in the pre-owned vehicle segment."
  },
  {
    year: 2023,
    text: "Continued our expansion with the introduction of Nexa."
  },
  {
    year: 2024,
    text: "Signed a Letter of Intent (LOI) with Holiday Inn, marking our strategic entry into the hospitality sector."
  }
];

export default function Timeline() {
  const [index, setIndex] = useState(3);

  const next = () => setIndex((prev) => (prev + 1) % data.length);
  const prev = () => setIndex((prev) => (prev - 1 + data.length) % data.length);

  return (
    <section className="w-full py-14 md:py-20 px-4 sm:px-6 md:px-10 overflow-hidden">

      {/* Header */}
      <h2 className="max-w-7xl mx-auto text-center text-2xl sm:text-3xl md:text-6xl font-bold mb-3">
        OUR LEGACY
      </h2>

      <p className="text-center text-sm sm:text-base md:text-xl max-w-3xl mx-auto mb-10 md:mb-16 text-gray-700">
        From strong beginnings to a future of growing possibilities.
      </p>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">

        {/* Left Arrow (desktop only) */}
        <button
          onClick={prev}
          className="hidden md:block text-red-600"
        >
          <ChevronLeft size={32}/>
        </button>

        {/* Year */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={data[index].year}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: .4 }}
            className="
              font-extrabold text-red-600 text-center
              text-[54px] sm:text-[72px] md:text-[150px]
              leading-none
            "
          >
            {data[index].year}
          </motion.h1>
        </AnimatePresence>

        {/* Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={data[index].image}
            initial={{ rotate: -8, opacity: 0, scale: .9 }}
            animate={{ rotate: -6, opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white p-3 shadow-xl w-44 sm:w-56 md:w-[260px]"
          >
            <SmartImage
              src={data[index].image}
              className="w-full h-48 sm:h-60 object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Text */}
        <AnimatePresence mode="wait">
          <motion.p
            key={data[index].text}
            initial={{ opacity:0, x:40 }}
            animate={{ opacity:1, x:0 }}
            exit={{ opacity:0 }}
            className="max-w-xs sm:max-w-sm text-gray-700 text-center md:text-left text-sm sm:text-base md:text-lg"
          >
            {data[index].text}
          </motion.p>
        </AnimatePresence>

        {/* Right Arrow (desktop only) */}
        <button
          onClick={next}
          className="hidden md:block text-red-600"
        >
          <ChevronRight size={32}/>
        </button>

        {/* Mobile arrows */}
        <div className="flex md:hidden gap-6 pt-2">
          <button onClick={prev} className="text-red-600">
            <ChevronLeft size={28}/>
          </button>
          <button onClick={next} className="text-red-600">
            <ChevronRight size={28}/>
          </button>
        </div>

      </div>

      {/* Bottom Timeline */}
      <div className="mt-14 md:mt-20 relative overflow-x-auto pb-4">

        <div className="h-[2px] bg-gray-400 w-full absolute top-2"/>

        <div className="flex justify-between md:gap-0 md:justify-between relative min-w-max md:min-w-0 px-2">
          {data.map((item, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="flex flex-col items-center group"
            >
              <div
                className={`w-4 h-4 rounded-full border-2 transition
                ${i === index
                  ? "bg-red-600 border-red-600 "
                  : "border-red-600 bg-white"
                }`}
              />

              <span className="text-xs md:text-sm mt-2 text-gray-700">
                {item.year}
              </span>
            </button>
          ))}
        </div>
      </div>

    </section>
  );
}