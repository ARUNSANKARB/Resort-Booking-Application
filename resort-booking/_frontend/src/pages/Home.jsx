import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Home() {
  // Put your AI background URL here (replace after you generate)
  const aiBackgroundUrl = "--ai-bg-url--";

  // motion values for parallax effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const tx = useTransform(x, [-200, 200], ["-6%", "6%"]);
  const ty = useTransform(y, [-200, 200], ["-4%", "4%"]);

  const containerRef = useRef(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    function onMove(e) {
      const rect = node.getBoundingClientRect();
      const px = e.clientX - (rect.left + rect.width / 2);
      const py = e.clientY - (rect.top + rect.height / 2);
      x.set(px);
      y.set(py);
    }

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  // Background image (fallback + AI)
  const backgroundImage = 
    aiBackgroundUrl && aiBackgroundUrl !== "--ai-bg-url--"
      ? `linear-gradient(rgba(3,7,18,0.45), rgba(3,7,18,0.45)), url(${aiBackgroundUrl})`
      : `linear-gradient(135deg, rgba(12,18,30,0.7), rgba(5,7,12,0.6)), url(https://images.unsplash.com/photo-1501117716987-c8e1ecb2105a)`;

  return (
    <div className="space-y-16">
      {/* HERO SECTION */}
      <section
        ref={containerRef}
        className="relative h-[80vh] rounded-xl overflow-hidden flex items-center justify-center"
      >

        {/* Background (parallax) */}
        <motion.div
          className="hero-bg"
          style={{
            backgroundImage: backgroundImage,
            translateX: tx,
            translateY: ty,
            transform: "translateZ(0)",
          }}
        />

        {/* Overlay */}
        <div className="hero-overlay" />

        {/* HERO CONTENT */}
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="hero-title text-6xl md:text-7xl font-extrabold leading-tight text-white drop-shadow-lg"
          >
            <span className="shimmer-gold">Welcome to Royal</span> <br /> Resort
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-xl md:text-2xl text-gray-200 hero-sub"
          >
            Escape the ordinary — private villas, ocean views, and service that
            remembers your name.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/rooms"
              className="btn-gold text-black px-8 py-3 rounded-2xl font-semibold"
            >
              Explore Rooms
            </Link>
            <Link
              to="/login"
              className="px-8 py-3 rounded-2xl border border-white/10 text-white hover:text-gold transition"
            >
              Sign in
            </Link>
          </motion.div>
        </div>

        {/* Floating Lights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          className="absolute left-10 top-24 w-36 h-36 rounded-full bg-white/3 blur-3xl float-slow"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          className="absolute right-10 bottom-24 w-48 h-48 rounded-full bg-white/4 blur-3xl float-slow"
        ></motion.div>
      </section>

      {/* FEATURES */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">
          The Lobby — Our Signature
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Feature
            title="Concierge Service"
            desc="24/7 personal concierge to organize activities, transfers and special requests."
            emoji="🤵‍♂️"
          />
          <Feature
            title="Private Dining"
            desc="Chef-curated menus delivered to your villa or private terrace."
            emoji="🍽️"
          />
          <Feature
            title="Wellness & Spa"
            desc="Holistic treatments, yoga at sunrise and private instructors."
            emoji="🧘‍♀️"
          />
        </div>
      </section>
    </div>
  );
}

function Feature({ title, desc, emoji }) {
  return (
    <div className="bg-white/5 p-6 rounded-2xl border border-white/8 glass">
      <div className="text-5xl mb-3">{emoji}</div>
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-gray-300 mt-2 text-sm">{desc}</p>
    </div>
  );
}
