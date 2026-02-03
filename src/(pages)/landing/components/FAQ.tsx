"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Are these projects free to use?",
    answer: "Yes! All games and tools are free, open for personal use, and built purely for learning and fun. No hidden paywalls , just vibes.",
  },
  {
    question: "Do you accept feature requests?",
    answer: "Not formally , I build based on curiosity, not roadmaps. But if an idea sparks joy, it might show up in the next vibe session!",
  },
  {
    question: "Why do some tools look 'unfinished'?",
    answer: "Because they’re shipped early! I prioritize learning over polish. If it works and teaches me something, it’s live.",
  },
  {
    question: "Will you add more German-learning tools?",
    answer: "Very likely! As a fellow learner, I’m building tools I wish existed , like noun gender trainers and spaced repetition helpers.",
  },
];

const FAQItemComponent: React.FC<{ item: FAQItem; isOpen: boolean; onClick: () => void }> = ({
  item,
  isOpen,
  onClick,
}) => {
  return (
    <div className="border-b border-gray-700/50 py-4">
      <button
        className="flex justify-between cursor-pointer items-center w-full text-left group"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="text-white font-medium group-hover:text-purple-200 transition-colors">
          {item.question}
        </span>
        <span className="ml-4 text-purple-400 text-lg transform transition-transform duration-200">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-400 text-sm leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#05020a]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-3">Questions, answered</h2>
          <p className="text-gray-500">
            No fluff. Just honest answers from one builder to another.
          </p>
        </div>

        <div className="space-y-2">
          {faqData.map((item, index) => (
            <FAQItemComponent
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-gray-600">
          Still curious? Reach out , I read every message.
        </div>
      </div>
    </section>
  );
};

export default FAQ;