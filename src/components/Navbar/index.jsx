import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  Globe,
  Sun,
  Moon,
  Settings,
  ChevronDown,
  Quote,
  Building2,
  Building,
  Home,
  Users,
  Briefcase,
  Mail,
  Brush,
  Palette,
} from "lucide-react";
import "./index.css";

const navLinks = [
  { id: "home", path: "/", label: "Home", icon: <Home size={18} /> },
  { id: "about", path: "/about", label: "About", icon: <Users size={18} /> },
  {
    id: "services",
    path: "/services",
    label: "Services",
    icon: <Briefcase size={18} />,
    dropdown: [
      {
        id: "renovation",
        path: "/services/renovation",
        label: "Renovation",
        icon: <Brush size={16} />,
      },
      {
        id: "residential",
        path: "/services/residential",
        label: "Residential",
        icon: <Building size={16} />,
      },
      {
        id: "commercial",
        path: "/services/commercial",
        label: "Commercial",
        icon: <Building2 size={16} />,
      }
    ],
  },
  {
    id: "portfolio",
    path: "/portfolio",
    label: "Portfolio",
    icon: <Palette size={18} />,
  },
  {
    id: "contact",
    path: "/contact",
    label: "Contact",
    icon: <Mail size={18} />,
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");
  const [mounted, setMounted] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const optionsRef = useRef(null);
  const gearBtnRef = useRef(null);
  const dropdownRefs = useRef({});
  const navRef = useRef(null);

  // Check if we're on the homepage
  const isHomePage = location.pathname === "/";

  // Animation on first load
  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      if (navRef.current) {
        navRef.current.style.transform = "translateY(0)";
        navRef.current.style.opacity = "1";
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Track scroll for navbar styling
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.pageYOffset > 20;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHomePage]);

  // Close menus when clicking outside or pressing Escape
  useEffect(() => {
    function handleDocClick(e) {
      // Options dropdown
      if (
        optionsRef.current &&
        !optionsRef.current.contains(e.target) &&
        gearBtnRef.current &&
        !gearBtnRef.current.contains(e.target)
      ) {
        setShowOptions(false);
      }

      // Dropdowns (desktop + mobile) references
      let clickedOutsideDropdown = true;
      for (const key in dropdownRefs.current) {
        if (dropdownRefs.current[key]?.contains(e.target)) {
          clickedOutsideDropdown = false;
          break;
        }
      }

      if (clickedOutsideDropdown) {
        setActiveDropdown(null);
      }
    }

    function handleKey(e) {
      if (e.key === "Escape") {
        setShowOptions(false);
        setActiveDropdown(null);
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleDocClick);
    document.addEventListener("touchstart", handleDocClick);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("mousedown", handleDocClick);
      document.removeEventListener("touchstart", handleDocClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  // Close mobile/menu dropdowns on navigation
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Load saved theme
  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) {
        setTheme(saved);
        document.documentElement.classList.toggle("dark", saved === "dark");
      } else {
        const prefersDark =
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (prefersDark) {
          setTheme("dark");
          document.documentElement.classList.add("dark");
        }
      }
    } catch (err) {
      // ignore localStorage errors
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch (err) {}
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  const toggleLanguage = () => setLanguage((s) => (s === "en" ? "ar" : "en"));

  const handleRequestQuote = () => navigate("/quote");

  const toggleDropdown = (id) =>
    setActiveDropdown((prev) => (prev === id ? null : id));

  // Determine navbar style class
  const getNavbarStyle = () => {
    if (isHomePage && !isScrolled) {
      return "homepage-unscrolled";
    } else {
      return "regular-nav";
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`navbar navbar-container ${getNavbarStyle()} ${
          mounted ? "animate-in" : ""
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="navbar-content">
          {/* Logo */}
          <Link
            to="/"
            className="navbar-logo"
            aria-label="Brilliant House Design homepage"
          >
            <div className="navbar-logo-icon">
              <div className="navbar-logo-icon-inner">B</div>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="navbar-desktop-links">
            {navLinks.map((link) => (
              <div
                key={link.id}
                className="nav-link-item"
                ref={(el) => (dropdownRefs.current[link.id] = el)}
              >
                {link.dropdown ? (
                  <>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.25rem",
                      }}
                    >
                      <Link
                        to={link.path}
                        className={`nav-link ${
                          location.pathname.startsWith(link.path)
                            ? "nav-link-active"
                            : ""
                        }`}
                        onClick={() => setActiveDropdown(null)}
                      >
                        <span style={{ opacity: 0.8 }}>{link.icon}</span>
                        {link.label}
                        <span className="nav-link-underline"></span>
                      </Link>

                      <button
                        aria-haspopup="true"
                        aria-expanded={activeDropdown === link.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleDropdown(link.id);
                        }}
                        className="dropdown-toggle"
                      >
                        <ChevronDown
                          size={16}
                          className={
                            activeDropdown === link.id ? "rotate-180" : ""
                          }
                          style={{ transition: "transform 0.3s ease" }}
                        />
                      </button>
                    </div>

                    <div
                      className="dropdown-menu"
                      style={{
                        transform:
                          activeDropdown === link.id
                            ? "scale(1) translateY(0)"
                            : "scale(0.95) translateY(-8px)",
                        opacity: activeDropdown === link.id ? 1 : 0,
                        pointerEvents:
                          activeDropdown === link.id ? "auto" : "none",
                      }}
                      role="menu"
                      aria-hidden={activeDropdown !== link.id}
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.id}
                          to={item.path}
                          onClick={() => setActiveDropdown(null)}
                          className={`dropdown-item ${
                            location.pathname === item.path
                              ? "dropdown-item-active"
                              : ""
                          }`}
                        >
                          <span style={{ opacity: 0.7 }}>{item.icon}</span>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`nav-link ${
                      location.pathname === link.path ? "nav-link-active" : ""
                    }`}
                  >
                    <span style={{ opacity: 0.8 }}>{link.icon}</span>
                    {link.label}
                    <span className="nav-link-underline"></span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="navbar-controls">
            <div style={{ position: "relative" }}>
              <button
                ref={gearBtnRef}
                onClick={() => setShowOptions((s) => !s)}
                aria-haspopup="true"
                aria-expanded={showOptions}
                className="control-button"
                title="Options"
              >
                <Settings
                  size={20}
                  style={{ transition: "transform 0.7s ease" }}
                  className={showOptions ? "rotate-180" : ""}
                />
              </button>

              <div
                ref={optionsRef}
                className="options-menu"
                style={{
                  transform: showOptions
                    ? "scale(1) translateY(0)"
                    : "scale(0.95) translateY(-8px)",
                  opacity: showOptions ? 1 : 0,
                  pointerEvents: showOptions ? "auto" : "none",
                }}
                role="menu"
                aria-hidden={!showOptions}
              >
                <button
                  className="option-item"
                  onClick={() => {
                    toggleLanguage();
                    setShowOptions(false);
                  }}
                >
                  <Globe size={16} style={{ opacity: 0.7 }} />
                  <span>
                    {language === "en"
                      ? "Switch to Arabic"
                      : "Switch to English"}
                  </span>
                </button>

                <button
                  className="option-item"
                  onClick={() => {
                    toggleTheme();
                    setShowOptions(false);
                  }}
                >
                  {theme === "light" ? (
                    <Moon size={16} style={{ opacity: 0.7 }} />
                  ) : (
                    <Sun size={16} style={{ opacity: 0.7 }} />
                  )}
                  <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
                </button>
              </div>
            </div>

            <div className="contact-info">
              <div className="contact-icon">
                <Phone size={16} className="phone-pulse" />
              </div>
              <div style={{ fontSize: "0.875rem" }}>
                <div style={{ fontSize: "0.75rem", opacity: 0.8 }}>
                  Call Us Now
                </div>
                <div style={{ fontWeight: 500 }}>+20 (15) 55637890</div>
              </div>
            </div>

            <button onClick={handleRequestQuote} className="quote-button">
              <span className="quote-button-gradient"></span>
              <span className="quote-button-content">
                <Quote size={16} />
                Request Quote
              </span>
            </button>

            <button
              className="mobile-menu-button"
              onClick={() => setIsMenuOpen((s) => !s)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className="mobile-menu"
          style={{
            maxHeight: isMenuOpen ? "100vh" : "0",
            opacity: isMenuOpen ? 1 : 0,
          }}
        >
          <div className="mobile-menu-content">
            {navLinks.map((link) => (
              <div key={`mobile-${link.id}`} className="mobile-nav-item">
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(`mobile-${link.id}`)}
                      aria-expanded={activeDropdown === `mobile-${link.id}`}
                      className="mobile-dropdown-toggle"
                    >
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <span style={{ opacity: 0.7 }}>{link.icon}</span>
                        <span
                          className={
                            location.pathname.startsWith(link.path)
                              ? "mobile-nav-link-active"
                              : ""
                          }
                        >
                          {link.label}
                        </span>
                      </span>
                      <ChevronDown
                        size={16}
                        style={{
                          transform:
                            activeDropdown === `mobile-${link.id}`
                              ? "rotate(180deg)"
                              : "none",
                          transition: "transform 0.3s ease",
                        }}
                      />
                    </button>

                    <div
                      className="mobile-dropdown-menu"
                      ref={(el) =>
                        (dropdownRefs.current[`mobile-${link.id}`] = el)
                      }
                      style={{
                        maxHeight:
                          activeDropdown === `mobile-${link.id}`
                            ? "300px"
                            : "0",
                        opacity: activeDropdown === `mobile-${link.id}` ? 1 : 0,
                      }}
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.id}
                          to={item.path}
                          onClick={() => setActiveDropdown(null)}
                          className={`mobile-dropdown-item ${
                            location.pathname === item.path
                              ? "mobile-dropdown-item-active"
                              : ""
                          }`}
                        >
                          <span style={{ opacity: 0.7 }}>{item.icon}</span>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`mobile-nav-link ${
                      location.pathname === link.path
                        ? "mobile-nav-link-active"
                        : ""
                    }`}
                  >
                    <span style={{ opacity: 0.7 }}>{link.icon}</span>
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile controls */}
            <div className="mobile-controls">
              <button onClick={toggleTheme} className="mobile-option">
                {theme === "light" ? (
                  <Moon size={16} style={{ opacity: 0.7 }} />
                ) : (
                  <Sun size={16} style={{ opacity: 0.7 }} />
                )}
                <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
              </button>

              <button
                onClick={() => {
                  toggleLanguage();
                  setIsMenuOpen(false);
                }}
                className="mobile-option"
              >
                <Globe size={16} style={{ opacity: 0.7 }} />
                <span>
                  {language === "en" ? "Switch to Arabic" : "Switch to English"}
                </span>
              </button>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.75rem",
                  borderRadius: "0.75rem",
                  backgroundColor: "var(--muted)",
                }}
              >
                <div
                  style={{
                    padding: "0.5rem",
                    borderRadius: "0.5rem",
                    backgroundColor:
                      "color-mix(in srgb, var(--primary) 10%, transparent)",
                  }}
                >
                  <Phone size={16} style={{ color: "var(--primary)" }} />
                </div>
                <div style={{ fontSize: "0.875rem" }}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--muted-foreground)",
                    }}
                  >
                    Call Us Now
                  </div>
                  <div style={{ fontWeight: 500 }}>+20 (15) 55637890</div>
                </div>
              </div>

              <button
                onClick={() => {
                  handleRequestQuote();
                  setIsMenuOpen(false);
                }}
                className="mobile-option"
                style={{
                  justifyContent: "center",
                  backgroundColor: "var(--primary)",
                  color: "var(--primary-foreground)",
                  marginTop: "0.5rem",
                }}
              >
                <Quote size={16} />
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
