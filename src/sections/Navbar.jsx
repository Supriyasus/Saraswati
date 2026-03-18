import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["About us", "Our Work", "History", "Team", "Locations"];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg shadow-md">
        <div className="mx-auto px-6 h-16 flex items-center justify-between text-white/80">

          {/* Logo - Increased */}
          <a
            className="font-semibold text-xl md:text-2xl tracking-wide hover:text-white transition-all duration-300"
            href="hero"
          >
            Saraswati
          </a>

          {/* Desktop Links - Increased */}
          <div className="hidden md:flex gap-10 font-medium text-xl">
            {links.map((item) => (
              <a
                key={item}
                href="#"
                className="relative hover:text-white transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
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
              <X size={30} />
            </button>

            {/* Mobile Links - Increased */}
            <div className="flex flex-col gap-10 text-3xl font-medium text-center">
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