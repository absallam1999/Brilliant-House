import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Send,
  ChevronRight,
  Sun,
  Moon,
  MessageCircle,
} from "lucide-react";
import { Button } from "../ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [theme, setTheme] = useState("light");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");

    // Footer entrance animation
    setIsVisible(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const footerLinks = {
    services: [
      { name: "Project Management", href: "/services/management" },
      { name: "Residential Design", href: "/services/residential" },
      { name: "Commercial Spaces", href: "/services/commercial" },
      { name: "Space Planning", href: "/services/renovation" },
      { name: "New Consultation", href: "/quote" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Portfolio", href: "/portfolio" },
      { name: "Services", href: "/services" },
      { name: "Team", href: "/team" },
      { name: "Blog", href: "/blog" },
    ],
    resources: [
      { name: "Free Consultation", href: "/quote" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Help", href: "/help" },
      { name: "FAQ", href: "/faq" },
      { name: "Contact Us", href: "/contact" },
    ],
  };

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com/brilliantdesign",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/brilliantdesign",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/brilliantdesign",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/brilliantdesign",
      label: "Twitter",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    setEmail("");
  };

  return (
    <footer
      style={{
        backgroundColor: "var(--background)",
        borderTop: "1px solid var(--border)",
        overflow: "hidden",
        transition: "all var(--transition-base)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(2.5rem)",
      }}
      className="theme-transition"
    >
      {/* Decorative elements */}
      <div
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "10rem",
          height: "10rem",
          backgroundColor: "var(--primary)",
          opacity: 0.1,
          borderRadius: "50%",
          transform: "translateX(-50%) translateY(50%)",
          filter: "blur(2.5rem)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: "8rem",
          height: "8rem",
          backgroundColor: "var(--secondary)",
          opacity: 0.1,
          borderRadius: "50%",
          transform: "translateX(33%) translateY(50%)",
          filter: "blur(2rem)",
        }}
      ></div>

      {/* Main Footer Content */}
      <div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "2rem 1rem",
          position: "relative",
          zIndex: 10,
        }}
        className="lg:px-8 lg:py-16"
      >
        <div
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
          }}
          className="xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2"
        >
          {/* Company Info */}
          <div className="xl:col-span-1 lg:col-span-2 md:col-span-2">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1.5rem",
                gap: "0.5rem",
              }}
            >
              <div className="navbar-logo-icon hover:rotate-12">
                <div className="navbar-logo-icon-inner">B</div>
              </div>
              <span
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "var(--font-bold)",
                  color: "var(--foreground)",
                }}
              >
                Brilliant Design
              </span>
            </div>
            <p
              style={{
                color: "var(--muted-foreground)",
                marginBottom: "1.5rem",
                lineHeight: "var(--line-height-relaxed)",
                transition: "transform var(--transition-base)",
              }}
              className="hover:translate-x-1"
            >
              Transforming spaces with innovative interior design solutions. We
              create environments that inspire and reflect your unique style.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "var(--muted-foreground)",
                  transition: "transform var(--transition-base)",
                }}
                className="hover:translate-x-1"
              >
                <Phone
                  style={{
                    width: "1rem",
                    height: "1rem",
                    marginRight: "0.75rem",
                    color: "var(--primary)",
                  }}
                />
                <a
                  href="tel:01555637890"
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--muted-foreground)",
                    transition: "color var(--transition-base)",
                  }}
                  className="hover:text-primary focus-ring"
                >
                  015 55637890
                </a>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "var(--muted-foreground)",
                  transition: "transform var(--transition-base)",
                }}
                className="hover:translate-x-1"
              >
                <MapPin
                  style={{
                    width: "1rem",
                    height: "1rem",
                    marginRight: "0.75rem",
                    color: "var(--primary)",
                  }}
                />
                <span style={{ fontSize: "0.875rem" }}>Alexandria, Egypt</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "var(--muted-foreground)",
                  transition: "transform var(--transition-base)",
                }}
                className="hover:translate-x-1"
              >
                <Mail
                  style={{
                    width: "1rem",
                    height: "1rem",
                    marginRight: "0.75rem",
                    color: "var(--primary)",
                  }}
                />
                <a
                  href="mailto:brilliantdesign56@gmail.com"
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--muted-foreground)",
                    transition: "color var(--transition-base)",
                  }}
                  className="hover:text-primary focus-ring"
                >
                  brilliantdesign56@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div style={{ transition: "all var(--transition-base)" }}>
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: "var(--font-semibold)",
                marginBottom: "1.5rem",
                color: "var(--foreground)",
                position: "relative",
              }}
            >
              Our Services
              <span
                style={{
                  content: '""',
                  display: "block",
                  width: "3rem",
                  height: "0.0625rem",
                  backgroundColor: "var(--primary)",
                  marginTop: "0.5rem",
                }}
              ></span>
            </h3>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {footerLinks.services.map((link, index) => (
                <li
                  key={index}
                  style={{ transition: "transform var(--transition-base)" }}
                  className="hover:translate-x-1"
                >
                  <a
                    href={link.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "0.875rem",
                      color: "var(--muted-foreground)",
                      transition: "color var(--transition-base)",
                    }}
                    className="hover:text-primary focus-ring"
                  >
                    <ChevronRight
                      style={{
                        width: "0.75rem",
                        height: "0.75rem",
                        marginRight: "0.5rem",
                        flexShrink: 0,
                        transition: "transform var(--transition-base)",
                      }}
                      className="group-hover:translate-x-1"
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div style={{ transition: "all var(--transition-base)" }}>
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: "var(--font-semibold)",
                marginBottom: "1.5rem",
                color: "var(--foreground)",
                position: "relative",
              }}
            >
              Company
              <span
                style={{
                  content: '""',
                  display: "block",
                  width: "3rem",
                  height: "0.0625rem",
                  backgroundColor: "var(--primary)",
                  marginTop: "0.5rem",
                }}
              ></span>
            </h3>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {footerLinks.company.map((link, index) => (
                <li
                  key={index}
                  style={{ transition: "transform var(--transition-base)" }}
                  className="hover:translate-x-1"
                >
                  <a
                    href={link.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "0.875rem",
                      color: "var(--muted-foreground)",
                      transition: "color var(--transition-base)",
                    }}
                    className="hover:text-primary focus-ring"
                  >
                    <ChevronRight
                      style={{
                        width: "0.75rem",
                        height: "0.75rem",
                        marginRight: "0.5rem",
                        flexShrink: 0,
                        transition: "transform var(--transition-base)",
                      }}
                      className="group-hover:translate-x-1"
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div
            className="xl:col-span-1 lg:col-span-2 md:col-span-2"
            style={{ transition: "all var(--transition-base)" }}
          >
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: "var(--font-semibold)",
                marginBottom: "1.5rem",
                color: "var(--foreground)",
                position: "relative",
              }}
            >
              Stay Inspired
              <span
                style={{
                  content: '""',
                  display: "block",
                  width: "3rem",
                  height: "0.0625rem",
                  backgroundColor: "var(--primary)",
                  marginTop: "0.5rem",
                }}
              ></span>
            </h3>
            <p
              style={{
                color: "var(--muted-foreground)",
                marginBottom: "1.5rem",
                fontSize: "0.875rem",
                lineHeight: "var(--line-height-relaxed)",
              }}
            >
              Subscribe to our newsletter for design tips, trends, and exclusive
              offers.
            </p>

            {/* Newsletter Form */}
            <div style={{ marginBottom: "1.5rem" }} onSubmit={handleSubmit}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  sm: { flexDirection: "row" },
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  style={{
                    flex: 1,
                    height: "2.5rem",
                    padding: "1rem",
                    backgroundColor: "var(--muted)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius)",
                    color: "var(--foreground)",
                    fontSize: "0.875rem",
                    transition: "all var(--transition-base)",
                  }}
                  className="focus-ring"
                  required
                />
                <Button
                  type="submit"
                  style={{
                    height: "2.5rem",
                    backgroundColor: "var(--primary)",
                    color: "var(--primary-foreground)",
                    padding: "1rem",
                    borderRadius: "var(--radius)",
                    fontSize: "0.875rem",
                    display: "flex",
                    alignItems: "center",
                    transition: "all var(--transition-base)",
                  }}
                  className="hover:opacity-90 focus-ring"
                >
                  <Send
                    style={{
                      width: "1rem",
                      height: "1rem",
                      marginRight: "0.25rem",
                    }}
                  />
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "var(--font-semibold)",
                  marginBottom: "1rem",
                  color: "var(--muted-foreground)",
                }}
              >
                Follow Our Work
              </h4>
              <div
                style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}
              >
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: "2.5rem",
                        height: "2.5rem",
                        backgroundColor: "var(--muted)",
                        borderRadius: "var(--radius)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all var(--transition-base)",
                      }}
                      className="hover:bg-primary hover:text-primary-foreground focus-ring"
                      aria-label={social.label}
                    >
                      <IconComponent
                        style={{
                          width: "1.25rem",
                          height: "1.25rem",
                          color: "var(--muted-foreground)",
                        }}
                      />
                    </a>
                  );
                })}

                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    backgroundColor: "var(--muted)",
                    borderRadius: "var(--radius)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all var(--transition-base)",
                  }}
                  className="hover:bg-primary hover:text-primary-foreground focus-ring"
                  aria-label="Toggle theme"
                >
                  {theme === "light" ? (
                    <Moon
                      style={{
                        width: "1.25rem",
                        height: "1.25rem",
                        color: "var(--muted-foreground)",
                      }}
                    />
                  ) : (
                    <Sun
                      style={{
                        width: "1.25rem",
                        height: "1.25rem",
                        color: "var(--muted-foreground)",
                      }}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
            padding: "1rem 0",
            borderTop: "1px solid var(--border)",
            marginTop: "2rem",
          }}
          className="md:flex-row md:justify-between md:items-center"
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1.5rem",
              fontSize: "0.9375rem",
              fontWeight: "var(--font-medium)",
              color: "var(--muted-foreground)",
            }}
            className="sm:gap-8"
          >
            <a
              href="/privacy-policy"
              style={{
                transition: "all var(--transition-base)",
                textDecoration: "none",
              }}
              className="hover:text-primary hover:scale-105 focus-ring"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              style={{
                transition: "all var(--transition-base)",
                textDecoration: "none",
              }}
              className="hover:text-primary hover:scale-105 focus-ring"
            >
              Terms of Service
            </a>
            <a
              href="/cookie-policy"
              style={{
                transition: "all var(--transition-base)",
                textDecoration: "none",
              }}
              className="hover:text-primary hover:scale-105 focus-ring"
            >
              Cookie Policy
            </a>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.75rem",
              color: "var(--muted-foreground)",
              fontSize: "0.9375rem",
              fontWeight: "var(--font-medium)",
              lineHeight: "var(--line-height-relaxed)",
            }}
            className="sm:flex-row sm:gap-2"
          >
            <span>© {currentYear} Brilliant Design. All rights reserved.</span>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div
        style={{
          position: "fixed",
          bottom: "1.5rem",
          right: "1.5rem",
          zIndex: 50,
        }}
        className="animate-bounce-slow"
      >
        <a
          href="https://wa.me/201555637890"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: "3.5rem",
            height: "3.5rem",
            // backgroundColor: "#22c55e",
            backgroundColor: "#04676a",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "var(--shadow-lg)",
            transition: "all var(--transition-base)",
          }}
          className="hover:bg-green-600 hover:shadow-xl focus-ring"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle
            style={{ width: "1.75rem", height: "1.75rem", color: "#ffffff" }}
          />
          <span
            style={{
              position: "absolute",
              top: "-2rem",
              backgroundColor: "var(--background)",
              color: "var(--foreground)",
              fontSize: "0.75rem",
              padding: "0.25rem 0.5rem",
              borderRadius: "var(--radius)",
              opacity: 0,
              transition: "all var(--transition-base)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-sm)",
              whiteSpace: "nowrap",
            }}
            className="group-hover:opacity-100"
          >
            Chat with us
          </span>
        </a>
      </div>
    </footer>
  );
}
