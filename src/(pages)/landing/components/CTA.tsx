"use client";

import React from "react";
import { Link } from "react-router-dom";

const CTA: React.FC = () => {
  return (
    <section className="relative py-20 bg-[#05020a] text-white overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at 30% 20%, #7e22ce, transparent 40%),
                       radial-gradient(circle at 80% 80%, #581c87, transparent 40%)`,
        }}
      />
      
      {/* Optional: subtle noise/texture overlay for depth (remove if not needed) */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
          Ready to explore the vibes?
        </h2>
        <p className="text-gray-300 mb-10 max-w-md mx-auto">
          Dive into games built for fun, and tools built for real use , all shipped with curiosity.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/?games"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-violet-700 text-white font-medium hover:from-purple-500 hover:to-violet-600 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
          >
            Explore Games
          </Link>
          <Link
            to="/?apps"
            className="px-8 py-4 rounded-full border border-gray-600 text-gray-200 font-medium hover:bg-gray-800 hover:border-gray-500 transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Explore Tools
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;