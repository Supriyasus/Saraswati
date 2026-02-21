import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SmartImage from "../components/SmartImage";

export default function AboutUs() {
  const [active, setActive] = useState(null);

  // lock background scroll
  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [active]);

  // esc close
  useEffect(() => {
    const esc = e => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  const cards = [
    {
      title: "Legacy",
      image: "/about/legacy.jpg",
      desc: "One of Prayagraj’s oldest franchise groups.",
      long:
        "Saraswati has built a legacy of trust and reliability across decades in Prayagraj. Our journey reflects consistency, customer confidence, and long-term relationships built through integrity and service quality."
    },
    {
      title: "Automobile Power",
      image: "/about/auto.jpg",
      desc: "Authorized leaders in automobile retail.",
      long:
        "We proudly operate major automobile franchises including Nexa, Hero, Maruti Suzuki, TrueValue, and Maruti Driving School. Our network ensures certified products, authentic parts, and industry-standard service support."
    },
    {
      title: "Customer First",
      image: "/about/customer.jpg",
      desc: "Built around people.",
      long:
        "Every Saraswati outlet is designed to put customers first. From selection to support, we focus on transparency, assistance, and satisfaction, creating experiences that go beyond transactions."
    },
    {
      title: "Expanding Vision",
      image: "/about/growth.jpg",
      desc: "Expanding into hospitality.",
      long:
        "Continuing our growth journey, Saraswati is entering the hospitality industry with an upcoming Holiday Inn franchise. This expansion reflects our future-ready mindset and commitment to diversified excellence."
    }
  ];

  return (
    <section className="relative bg-[#fff7e1] py-24 px-6 text-center overflow-hidden">

      {/* overlay */}
      <div
        onClick={() => setActive(null)}
        className={`fixed inset-0 z-40 transition backdrop-blur-xl bg-black/40 ${
          active ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* heading */}
      <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
        WHO WE ARE: PURPOSE BUILT
      </h2>

      <p className="text-xl max-w-6xl mx-auto text-gray-700 mb-20">
        Delivering quality, reliability, and service across every industry we serve.
      </p>

      {/* cards grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {cards.map((card, i) => (
          <motion.div
            key={i}
            layoutId={`card-${i}`}
            onClick={() => setActive(card)}
            className="relative h-72 rounded-xl overflow-hidden cursor-pointer group shadow-xl"
          >
            {/* image */}
            <SmartImage
              src={card.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition" />

            {/* text */}
            <div className="absolute top-6 left-6 text-left text-white">
              <h3 className="text-3xl md:text-4xl font-bold leading-none">
                {card.title}
              </h3>
              <p className="mt-3 text-lg opacity-90">{card.desc}</p>
            </div>
          </motion.div>
        ))}

      </div>

      {/* modal */}
        <AnimatePresence>
        {active && (
            <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xl"
            onClick={() => setActive(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            >
            <motion.div
                layoutId={`card-${cards.indexOf(active)}`}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto p-10 relative"
                initial={{ scale: 0.85 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.85 }}
                transition={{ duration: 0.25 }}
            >
                {/* close button */}
                <button
                onClick={() => setActive(null)}
                className="absolute top-5 right-6 text-2xl text-gray-400 hover:text-black"
                >
                ✕
                </button>

                <h3 className="text-4xl font-bold mb-6">{active.title}</h3>

                <p className="text-gray-700 leading-relaxed text-lg">
                {active.long}
                </p>
            </motion.div>
            </motion.div>
        )}
        </AnimatePresence>
    </section>
  );
}