"use client";
import ProjectSlider from "./components/ProjectShowcase";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";

const LadingPage = () => {
  return (
    <div>
      <Hero />
      <ProjectSlider />
      <Testimonial />
      <FAQ />
    </div>
  );
};

export default LadingPage;
