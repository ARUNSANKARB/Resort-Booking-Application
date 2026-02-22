import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/6"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gold">
          RoyalResort
        </Link>

        <div className="hidden md:flex items-center space-x-6 text-white">
          <Link to="/" className="hover:text-gold transition">Home</Link>
          <Link to="/rooms" className="hover:text-gold transition">Rooms</Link>
          <Link to="/login" className="hover:text-gold transition">Login</Link>
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <div className={`w-6 h-0.5 bg-white transition ${open ? "rotate-45 translate-y-1.5" : ""}`} />
            <div className={`w-6 h-0.5 bg-white transition ${open ? "opacity-0" : ""}`} />
            <div className={`w-6 h-0.5 bg-white transition ${open ? "-rotate-45 -translate-y-1" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="md:hidden bg-black/60 backdrop-blur-md border-t border-white/10">
          <div className="flex flex-col px-6 py-4 space-y-3">
            <Link onClick={() => setOpen(false)} to="/" className="hover:text-gold">Home</Link>
            <Link onClick={() => setOpen(false)} to="/rooms" className="hover:text-gold">Rooms</Link>
            <Link onClick={() => setOpen(false)} to="/login" className="hover:text-gold">Login</Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
