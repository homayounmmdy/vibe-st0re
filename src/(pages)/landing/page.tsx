"use client";
import ProjectSlider from "./components/ProjectShowcase";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

const LadingPage = () => {
  return (
    <div>
      <Hero />
      <ProjectSlider />
      <Testimonial />
      <FAQ />
      <CTA />
    </div>
  );
};

export default LadingPage;
