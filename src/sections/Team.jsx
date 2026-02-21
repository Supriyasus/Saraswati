"use client";
import { motion } from "framer-motion";
import SmartImage from "../components/SmartImage";
const leaders = [
  {
    name: "Mr. Ankit Raj",
    role: "Chief Strategy Officer",
    image: "/team/leader2.jpg",
    message:
      "Our strength lies in collaboration, curiosity, and courage."
  },
  {
    name: "Mrs. Suman Srivastava",
    role: "Head of Innovation",
    image: "/team/leader3.jpg",
    message:
      "Innovation is not an act — it’s our culture."
  }
];

const team = [
  { name: "Dev Sharma", role: "Engineer", SmartImage: "/team/1.jpg" },
  { name: "Neha Singh", role: "Designer", SmartImage: "/team/2.jpg" },
  { name: "Kunal Jain", role: "Developer", SmartImage: "/team/3.jpg" },
  { name: "Simran Kaur", role: "Marketing", SmartImage: "/team/4.jpg" },
  { name: "Aditya Shah", role: "Analyst", SmartImage: "/team/5.jpg" },
  { name: "Priya Patel", role: "HR", SmartImage: "/team/6.jpg" },
  { name: "Rahul Verma", role: "QA", SmartImage: "/team/7.jpg" },
  { name: "Meera Nair", role: "Research", SmartImage: "/team/8.jpg" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.9,
      ease: "easeOut"
    }
  })
};

export default function Team() {
  return (
    <section className="py-20 px-6 ">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="max-w-7xl mx-auto text-center text-4xl md:text-6xl font-bold mb-6">OUR TEAM</h2>
        <p className="text-center text-xl max-w-6xl mx-auto mb-16 text-gray-700">
          The people behind our progress, partnerships, and purpose.
        </p>
      </div>

      {/* Leaders */}
      <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto ">
        {leaders.map((person, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={i}
            className="bg-[#142f66]/90 rounded-3xl p-8 flex gap-6 items-center shadow-lg"
          >
            <SmartImage
              src={person.image}
              className="w-40 h-40 object-cover rounded-2xl"
            />

            <div className="text-white">
              <h3 className="text-2xl font-semibold">{person.name}</h3>
              <p className="text-white/70 mb-4">{person.role}</p>
              <p className="text-lg">{person.message}</p>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Team Grid */}
      <div className="grid p-6 grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto gap-6">
        {team.map((member, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={i + 3}
            className="relative rounded-2xl overflow-hidden group shadow-md"
          >
            <SmartImage
              src={member.SmartImage}
              className="w-full h-52 object-cover group-hover:scale-110 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent text-center py-4">
              <p className="text-white font-semibold">{member.name}</p>
              <p className="text-white/70 text-sm">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}