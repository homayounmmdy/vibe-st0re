"use client";
import ProjectSlider from "./components/ProjectShowcase";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "../components/Footer";

const LadingPage = () => {
  return (
    <div>
      <Hero />
      <ProjectSlider />
      <Testimonial />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default LadingPage;
