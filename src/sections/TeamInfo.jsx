"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const leaders = [
  {
    name: "Mr. Ankit Raj",
    role: "Chief Strategy Officer",
    img: "/team/leader2.jpg"
  },
  {
    name: "Mrs. Suman Srivastava",
    role: "Head of Innovation",
    img: "/team/leader3.jpg"
  },
  {
    name: "Rahul Verma",
    role: "Operations Head",
    img: "/team/leader4.jpg"
  },
  {
    name: "Neha Singh",
    role: "Design Director",
    img: "/team/leader5.jpg"
  }
];

export default function TeamInfo() {
  const [index, setIndex] = useState(0);

  const visible = leaders.slice(index, index + 3);

  const next = () => {
    if (index < leaders.length - 3) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section className="bg-[#e9e6df] py-20 px-6">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">OUR TEAM</h2>
        <p className="text-center text-xl max-w-6xl mx-auto mb-16 text-gray-700">
          The people behind our progress, partnerships, and purpose.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto relative">

        <div className="grid md:grid-cols-3 gap-8">

          <AnimatePresence mode="wait">
            {visible.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={`
                  rounded-2xl overflow-hidden shadow-md
                  ${i === 1 ? "scale-105 shadow-xl" : ""}
                  transition
                `}
              >
                {/* Image */}
                <img
                  src={person.img}
                  className="w-full h-[420px] object-cover"
                />

                {/* Info */}
                <div
                  className={`
                    p-6
                    ${i === 1
                      ? "bg-red-600 text-white"
                      : "bg-white text-gray-800"}
                  `}
                >
                  <h3 className="text-xl font-semibold">
                    {person.name}
                  </h3>
                  <p className="text-sm opacity-80 mt-1">
                    {person.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-10">

          {/* Dots */}
          <div className="flex gap-3">
            {Array.from({ length: leaders.length - 2 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full ${
                  i === index
                    ? "bg-red-600"
                    : "bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="bg-white px-3 py-2 rounded-md shadow"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={next}
              className="bg-red-600 text-white px-3 py-2 rounded-md shadow"
            >
              <ChevronRight />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}