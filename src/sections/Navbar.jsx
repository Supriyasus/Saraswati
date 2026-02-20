import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["About us", "Our Work", "History", "Team", "Locations"];

return (
  <>
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0e275e]/40 backdrop-blur-lg shadow-md ">
      <div className="max-w-7xl mx-auto px-2 h-10 flex items-center justify-between text-white">

        <a className="font-semibold text-lg tracking-wide" href="hero">
          Saraswati
        </a>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          {links.map((item) => (
            <a key={item} href="#" className="relative group">
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#fefdf3] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>

    {/* MOBILE MENU OUTSIDE NAV */}
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[999] md:hidden backdrop-blur-2xl bg-[#0e275e]/20 flex flex-col items-center justify-center text-white"
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6"
          >
            <X size={28} />
          </button>

          <div className="flex flex-col gap-8 text-2xl font-medium text-center">
            {links.map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setOpen(false)}
                className="hover:text-white/70 transition"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </>
);
}
