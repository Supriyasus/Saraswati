import { motion } from "framer-motion";
import SmartImage from "../components/SmartImage";

const leaders = [
  {
    name: "Mr. Ankit Raj",
    role: "Managing Director",
    image: "/team/ankit1.jpeg",
    message: "Driven by a heritage of trust and a vision for the future, we are redefining what it means to lead with purpose and serve with passion."
  }
];

const team = [
  { name: "Mrs. Suman Srivastava", role: "Managing Director MSDS", image: "/team/suman.png" },
  { name: "Mr. Jalaj Chaturvedi", role: "Sr. General Manager", image: "/team/jalaj.png" },
  { name: "Mr. Ashutosh Pandey", role: "Vice President Service", image: "/team/ashutosh.png" },
  { name: "Mr. Dhirendra Kumar", role: "General Manager Operations", image: "/team/dhirendra.png" },
  { name: "Mr. Abhishek Dwivedi", role: "Human Resources Head", image: "/team/abhishekd.png" },
  { name: "Mr. Abhishek Chaurasia", role: "Accounts Head", image: "/team/abhishekc.png" }
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut"
    }
  })
};

export default function Team() {
  return (
    <section className="py-20 px-6 max-w-8xl mx-auto">

      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          OUR TEAM
        </h2>
        <p className="text-xl max-w-4xl mx-auto text-gray-700">
          The people behind our progress, partnerships, and purpose.
        </p>
      </div>

      {/* LEADERS SECTION */}
<div className="max-w-7xl mx-auto mb-24">
  {leaders.map((person, i) => (
    <motion.div
      key={i}
      variants={fadeUp}
      initial="hidden"
      animate="show"
      custom={i}
      className="
        bg-[#15284e]
        rounded-2xl
        flex flex-col md:flex-row
        items-center
        shadow-lg
        overflow-hidden
      "
    >

      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 flex justify-center items-center py-12">
        
        {/* THIS is the important fix */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <SmartImage
            src={person.image}
            className="h-[380px] w-auto object-contain"
          />
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="
        w-full md:w-1/2
        bg-[#1f3b73]
        text-white
        px-10 md:px-16 py-12
        text-center md:text-left
      ">
        <h3 className="text-3xl md:text-4xl font-semibold mb-3">
          {person.name}
        </h3>

        <p className="text-white/70 mb-4 text-lg">
          {person.role}
        </p>

        <p className="text-lg md:text-xl leading-relaxed max-w-md mx-auto md:mx-0">
          {person.message}
        </p>
      </div>

    </motion.div>
  ))}
</div>

      {/* TEAM GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {team.map((member, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={i + 2}
            className="
              bg-[#f9f5f0]
              rounded-2xl
              shadow-md
              hover:shadow-lg
              transition
              overflow-hidden
            "
          >

            {/* Image Frame */}
            <div className="
              w-full
              h-64
              flex items-center justify-center
              bg-[#f9f5f0]
              p-6
            ">
              <div className="w-full h-72 flex items-end justify-center bg-[#f9f5f0] overflow-hidden">
                <SmartImage
                  src={member.image}
                  className="h-full w-full object-contain object-bottom"
                />
              </div>
            </div>

            {/* Info */}
            <div className="py-4 text-center">
              <p className="font-semibold text-gray-900">
                {member.name}
              </p>
              <p className="text-gray-500 text-sm">
                {member.role}
              </p>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}