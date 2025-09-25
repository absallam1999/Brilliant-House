import React, { useEffect, useRef, useState } from "react";
import HeroSection from "./utils/HeroSection";
import AboutSection from "./utils/AboutSection";
import ServicesSection from "./utils/ServicesSection";
import ProjectsSection from "./utils/ProjectsSection";
import TeamSection from "./utils/TeamSection";
import heroImage from "./../../assets/main-background.jpg";

export default function HomePage() {
  const sectionRefs = useRef([]);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
          entry.target.classList.add("opacity-100");
          entry.target.classList.remove("translate-y-10");
          entry.target.style.animationDelay = `${index * 100}ms`;
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500 theme-transition">
      <div ref={addToRefs} className="relative">
        <HeroSection
          backgroundImage={heroImage}
          sliderImages={["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg"]}
        />
      </div>

      <div className="py-8 sm:py-12">
        <div
          ref={addToRefs}
          className="opacity-0 transition-all duration-700 ease-in-out transform translate-y-10"
        >
          <AboutSection />
        </div>
      </div>

      <div className="py-8 sm:py-12">
        <div
          ref={addToRefs}
          className="opacity-0 transition-all duration-700 ease-in-out transform translate-y-10"
        >
          <ServicesSection />
        </div>
      </div>

      <div className="py-8 sm:py-12">
        <div
          ref={addToRefs}
          className="opacity-0 transition-all duration-700 ease-in-out transform translate-y-10"
        >
          <ProjectsSection />
        </div>
      </div>

      <div className="py-8 sm:py-12">
        <div
          ref={addToRefs}
          className="opacity-0 transition-all duration-700 ease-in-out transform translate-y-10"
        >
          <TeamSection />
        </div>
      </div>
    </div>
  );
}