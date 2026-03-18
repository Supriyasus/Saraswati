import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SmartImage from "../components/SmartImage";

const data = [
  { year:1992, image:"/history/1992.jpeg", text:"The journey began with the establishment of our first branch in Rajapur, laying the foundation for our future growth." },
  { year:2006, image:"/history/2006.jpeg", text:"Expanded our presence with the launch of operations in Vishambar, strengthening our regional footprint." },
  { year:2014, image:"/history/2014.jpeg", text:"Achieved recognition as India’s No. 2 in Hero MotoCorp sales, reflecting our commitment to excellence." },
  { year:2015, image:"/history/2015.jpeg", text:"Built one of the country’s largest secondary networks, significantly expanding our nationwide reach." },
  { year:2020, image:"/history/2020.jpeg", text:"Entered a new phase of progress with the launch of our Maruti Suzuki Arena showroom." },
  { year:2021, image:"/history/2021.jpeg", text:"Diversified our offerings with the inauguration of the Maruti Suzuki Driving School." },
  { year:2022, image:"/history/2022-koraon.jpeg", text:"Strengthened accessibility with the opening of our Arena showroom in Koraon." },
  { year:2022, image:"/history/2022-pratapgarh.jpeg", text:"Further expansion continued with the launch of our Arena showroom in Pratapgarh." },
  { year:2022, image:"/history/2022-manjhanpur.jpeg", text:"Extended our network with new outlets in Manjhanpur and Kunda." },
  { year:2023, image:"/history/2023-naini.jpeg", text:"Opened our Commercial Showroom in Naini, marking a significant step in our growth journey." },
  { year:2023, image:"/history/2023-truevalue.jpeg", text:"Launched True Value operations, expanding our presence in the pre-owned vehicle segment." },
  { year:2023, image:"/history/2023-nexa.jpeg", text:"Continued our expansion with the introduction of Nexa." },
  { year:2024, image:"/history/2024.jpeg", text:"Signed a Letter of Intent (LOI) with Holiday Inn, marking our strategic entry into the hospitality sector." }
];

export default function Timeline() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % data.length);
  const prev = () => setIndex((prev) => (prev - 1 + data.length) % data.length);

  const current = data[index];

  return (
    <section className="w-full py-14 md:py-20 px-4 sm:px-6 md:px-10 overflow-hidden">

      {/* Header */}
      <h2 className="max-w-7xl mx-auto text-center text-2xl sm:text-3xl md:text-6xl font-bold mb-3">
        OUR LEGACY
      </h2>

      <p className="text-center text-sm sm:text-base md:text-xl max-w-3xl mx-auto mb-10 md:mb-16 text-gray-700">
        From strong beginnings to a future of growing possibilities.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">

        <button onClick={prev} className="hidden md:block text-red-600">
          <ChevronLeft size={32}/>
        </button>

        {/* Year */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={index}
            initial={{ y:40, opacity:0 }}
            animate={{ y:0, opacity:1 }}
            exit={{ y:-40, opacity:0 }}
            transition={{ duration:.4 }}
            className="font-extrabold text-red-600 text-center text-[54px] sm:text-[72px] md:text-[150px] leading-none"
          >
            {current.year}
          </motion.h1>
        </AnimatePresence>

        {/* Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.image}
            initial={{ rotate:-8, opacity:0, scale:.9 }}
            animate={{ rotate:-6, opacity:1, scale:1 }}
            exit={{ opacity:0 }}
            className="bg-white p-3 shadow-xl h-[320px] w-50 sm:w-56 md:w-[360px]"
          >
            <SmartImage
              src={current.image || "/fallback.jpg"}
              className="w-full h-full sm:h-60 object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Text */}
        <AnimatePresence mode="wait">
          <motion.p
            key={current.text}
            initial={{ opacity:0, x:40 }}
            animate={{ opacity:1, x:0 }}
            exit={{ opacity:0 }}
            className="max-w-xs sm:max-w-sm text-gray-700 text-center md:text-left text-sm sm:text-base md:text-lg"
          >
            {current.text}
          </motion.p>
        </AnimatePresence>

        <button onClick={next} className="hidden md:block text-red-600">
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

        <div className="flex justify-between relative min-w-max md:min-w-0 px-2">
          {data.map((item,i)=>(
            <button key={i} onClick={()=>setIndex(i)} className="flex flex-col items-center">
              <div className={`w-4 h-4 rounded-full border-2 transition ${i===index?"bg-red-600 border-red-600":"border-red-600 bg-white"}`}/>
              <span className="text-xs md:text-sm mt-2 text-gray-700">{item.year}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}