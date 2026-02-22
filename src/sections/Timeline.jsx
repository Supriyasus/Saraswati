"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SmartImage from "../components/SmartImage";

const data = [
  { year: 1987, image: "/images/1987.jpg", text: "First major milestone achieved." },
  { year: 1991, image: "/images/1991.jpg", text: "Momentum builds across markets." },
  { year: 1994, image: "/images/1994.jpg", text: "Product expansion begins." },
  { year: 1997, image: "/images/1997.jpg", text: "Expanding Horizons: Gurgaon plant inaugurated." },
  { year: 1999, image: "/images/1999.jpg", text: "Entering premium segment." },
  { year: 2001, image: "/images/2001.jpg", text: "Global leadership achieved." }
];

export default function Timeline() {
  const [index, setIndex] = useState(3);

  const next = () => setIndex((prev) => (prev + 1) % data.length);
  const prev = () => setIndex((prev) => (prev - 1 + data.length) % data.length);

  return (
    <section className="w-full py-14 md:py-20 px-5 md:px-10 relative overflow-hidden">

      {/* Header */}
      <h2 className="max-w-7xl mx-auto text-center text-3xl md:text-6xl font-bold mb-4">
        OUR LEGACY
      </h2>

      <p className="text-center text-base md:text-xl max-w-3xl mx-auto mb-10 md:mb-16 text-gray-700">
        From strong beginnings to a future of growing possibilities.
      </p>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">

        {/* Left Arrow */}
        <button onClick={prev} className="text-red-600 order-2 md:order-none">
          <ChevronLeft size={28}/>
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
              font-extrabold text-red-600
              text-[64px] sm:text-[90px] md:text-[150px]
              leading-none text-center
            "
          >
            {data[index].year}
          </motion.h1>
        </AnimatePresence>

        {/* Image Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={data[index].image}
            initial={{ rotate: -8, opacity: 0, scale: .9 }}
            animate={{ rotate: -6, opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white p-3 shadow-xl w-56 sm:w-64 md:w-[260px]"
          >
            <SmartImage
              src={data[index].image}
              className="w-full h-56 sm:h-64 object-cover"
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
            className="max-w-sm text-gray-700 text-center md:text-left text-base md:text-lg"
          >
            {data[index].text}
          </motion.p>
        </AnimatePresence>

        {/* Right Arrow */}
        <button onClick={next} className="text-red-600 order-3 md:order-none">
          <ChevronRight size={28}/>
        </button>
      </div>

      {/* Bottom Timeline */}
      <div className="mt-14 md:mt-20 relative overflow-x-auto">

        <div className="h-[2px] bg-gray-400 w-full absolute top-2"/>

        <div className="flex gap-8 md:gap-0 md:justify-between relative min-w-max md:min-w-0 px-2">
          {data.map((item, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="flex flex-col items-center group"
            >
              <div
                className={`w-4 h-4 rounded-full border-2 transition
                ${i === index
                  ? "bg-red-600 border-red-600 scale-125"
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