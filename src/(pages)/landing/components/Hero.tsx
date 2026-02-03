"use client";

import React from "react";
import { Link } from "react-router-dom";

interface StatItemProps {
  number: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, label }) => (
  <div className="animate-float">
    <div className="text-4xl md:text-5xl font-light text-white mb-1">
      {number}
    </div>
    <div
      className="text-xs tracking-widest text-gray-500 uppercase font-medium"
      dangerouslySetInnerHTML={{ __html: label }}
    />
  </div>
);

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#05020a] text-white overflow-hidden relative">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-600 via-purple-900/20 to-transparent blur-[120px]" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-12 min-h-screen flex flex-col">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
          {/* Title */}
          <div className="animate-fade-up">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.95]">
              vibeSt0re
            </h1>
            <p className="mt-6 text-2xl text-gray-400 max-w-md">
              A place where I use <span className="text-white">vibe coding</span>{" "}
              to build and ship projects.
            </p>
          </div>

          {/* Description + CTAs */}
          <div className="lg:pl-10 pt-6 animate-fade-up delay-150">
            <p className="text-lg text-gray-400 max-w-md leading-relaxed">
              Games, tools, and small experiments built by following curiosity
              instead of over-planning. Some are polished, some are messy. All
              of them are shipped and learned from.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/?apps" className="px-6 py-3 rounded-full border border-gray-600 text-gray-300 hover:bg-gray-800 transition">
                Explore Tools
              </Link>
              <Link  to="/?games" className="px-6 py-3 rounded-full bg-purple-200 text-purple-950 font-semibold hover:bg-white hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition">
                Explore Games
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-auto items-end">
          {/* Terminal */}
          <div className="font-mono text-xs text-purple-300/60 space-y-1 p-4 rounded-lg bg-purple-900/10 border border-purple-500/10 backdrop-blur-sm max-w-sm animate-fade-up delay-300">
            <p>$ vibeSt0re --list-projects</p>
            <p>Loading vibe-coded projects...</p>
            <p>Scanning games...</p>
            <p>Scanning tools...</p>
            <br />
            <p className="text-purple-200">&gt; Cyber Ninja</p>
            <p className="text-purple-200">&gt; Flag Game</p>
            <p className="text-purple-200">&gt; Star Date</p>
            <p className="text-purple-200">&gt; Flappy Bird</p>
            <p className="text-purple-200">&gt; Snake</p>
            <p className="text-purple-200">&gt; Tic Tac Toe</p>
            <p className="text-purple-200">&gt; Tetris</p>
            <br />
            <p className="opacity-70">
              Built fast • Learned deeply • Shipped often
            </p>
          </div>

          {/* Stats */}
          <div className="flex justify-start md:justify-end space-x-12 md:space-x-16 animate-fade-up delay-500">
            <StatItem number="14+" label="Projects" />
            <StatItem number="8" label="Games" />
            <StatItem number="6" label="Tools<br>Apps" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
