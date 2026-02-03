"use client";

import React from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex R.",
    role: "Frontend Dev",
    content: "The German Noun tool saved me hours of flashcard setup. Clean UI, zero fluff , just vibes and utility.",
  },
  {
    id: 2,
    name: "Maya T.",
    role: "Indie Game Lover",
    content: "Cyber Ninja feels like a mini arcade in my browser. Smooth controls, retro aesthetic , shipped with soul.",
  },
  {
    id: 3,
    name: "Devon K.",
    role: "CS Student",
    content: "StackVisualizer finally made recursion click for me. Simple, visual, and actually fun to use.",
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300">
      <div className="flex items-start gap-4">
        {/* Placeholder avatar */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-violet-800 flex items-center justify-center text-white font-medium text-sm flex-shrink-0">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="text-gray-200 italic mb-3">“{testimonial.content}”</p>
          <div>
            <p className="font-medium text-white">{testimonial.name}</p>
            <p className="text-xs text-purple-300">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonial: React.FC = () => {
  return (
    <section className="py-16 bg-[#05020a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-3">
            Built with love, used with joy
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Real people enjoying the vibes you’ve shipped.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;