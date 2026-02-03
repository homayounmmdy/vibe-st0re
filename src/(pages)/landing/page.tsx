"use client";
import Header from "./components/Header";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProjectSlider from "./components/ProjectShowcase";
import Testimonial from "./components/Testimonial";

const LadingPage = () => {
  return (
    <div>
        <Header/>
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
