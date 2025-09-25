import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === "en" ? "es" : "en");
  };

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <div className={`app ${currentTheme}`}>
      <ScrollToTop />
      <Navbar
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
        currentLanguage={currentLanguage}
        toggleLanguage={toggleLanguage}
        currentTheme={currentTheme}
        toggleTheme={toggleTheme}
      />
      <main>
        <Outlet />
      </main>
      <Footer
        scrollToSection={scrollToSection}
        currentLanguage={currentLanguage}
        currentTheme={currentTheme}
      />
    </div>
  );
}
