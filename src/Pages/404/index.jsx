import { Link } from "react-router-dom";
import {
  Home,
  ArrowLeft,
  ArrowRight,
  AlertTriangle,
  Construction,
  Compass,
} from "lucide-react";
import { Button } from "./../../components/ui/button";
import { useEffect, useState } from "react";

export default function ErrorPage() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    return () => {};
  }, []);

  const quickLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/services", label: "Services", icon: Construction },
    { path: "/about", label: "About Us", icon: Compass },
    { path: "/contact", label: "Contact", icon: ArrowRight },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--background)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        color: "var(--foreground)",
        transition: "all var(--transition-base)",
      }}
      className="theme-transition sm:px-6 lg:px-8"
    >
      <div
        style={{
          maxWidth: "64rem",
          width: "100%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(2.5rem)",
            transition: "all var(--transition-base)",
          }}
        >
          <div style={{ position: "relative", marginBottom: "2rem" }}>
            <div
              style={{
                fontSize: "9rem",
                fontWeight: "var(--font-bold)",
                color: "var(--primary)",
                opacity: 0.2,
                letterSpacing: "0.5rem",
              }}
              className="sm:text-[12rem]"
            >
              404
            </div>
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AlertTriangle
                style={{
                  width: "6rem",
                  height: "6rem",
                  color: "var(--warning)",
                }}
                className="sm:w-32 sm:h-32 animate-pulse"
              />
            </div>
          </div>

          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "var(--font-bold)",
              color: "var(--foreground)",
              marginBottom: "1.5rem",
              lineHeight: "var(--line-height-tight)",
            }}
            className="sm:text-4xl lg:text-5xl"
          >
            Oops! Page Not Found
          </h1>

          <p
            style={{
              fontSize: "1.25rem",
              color: "var(--muted-foreground)",
              marginBottom: "2rem",
              maxWidth: "32rem",
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: "var(--line-height-relaxed)",
            }}
          >
            The page you're looking for seems to have wandered off like a
            misplaced blueprint. Don't worry—we'll help you get back on track.
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              justifyContent: "center",
              marginBottom: "3rem",
            }}
            className="sm:flex-row"
          >
            <Button
              asChild
              style={{
                backgroundColor: "var(--primary)",
                color: "var(--primary-foreground)",
                fontWeight: "var(--font-semibold)",
                padding: "0.75rem 2rem",
                borderRadius: "var(--radius)",
                minHeight: "44px",
                minWidth: "44px",
                transition: "all var(--transition-base)",
              }}
              className="hover:opacity-90 hover:shadow-lg focus-ring"
            >
              <Link
                to="/"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                }}
              >
                <Home
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    marginRight: "0.5rem",
                  }}
                />
                Home
              </Link>
            </Button>

            <Button
              variant="outline"
              style={{
                border: "1px solid var(--primary)",
                color: "var(--primary)",
                fontWeight: "var(--font-semibold)",
                padding: "0.75rem 2rem",
                borderRadius: "var(--radius)",
                minHeight: "44px",
                minWidth: "44px",
                transition: "all var(--transition-base)",
                backgroundColor: "transparent",
              }}
              className="hover:bg-primary hover:text-primary-foreground focus-ring"
            >
              <ArrowLeft
                style={{
                  width: "1.25rem",
                  height: "1.25rem",
                  marginRight: "0.5rem",
                }}
              />
              Go Back
            </Button>
          </div>

          {/* Quick Links Section */}
          <div
            style={{
              backgroundColor: "var(--background)",
              borderRadius: "var(--radius-lg)",
              padding: "1.5rem",
              boxShadow: "var(--shadow-lg)",
              border: "1px solid var(--border)",
            }}
          >
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: "var(--font-semibold)",
                color: "var(--foreground)",
                marginBottom: "1.5rem",
                lineHeight: "var(--line-height-tight)",
              }}
            >
              Quick Navigation
            </h3>

            <div
              style={{
                display: "grid",
                gap: "1rem",
                gridTemplateColumns: "repeat(auto-fit, minmax(8rem, 1fr))",
              }}
              className="sm:grid-cols-4"
            >
              {quickLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <Link
                    key={index}
                    to={link.path}
                    style={{
                      position: "relative",
                      padding: "1rem",
                      backgroundColor: "var(--muted)",
                      borderRadius: "var(--radius)",
                      transition: "all var(--transition-base)",
                      overflow: "hidden",
                      textDecoration: "none",
                    }}
                    className="group hover:shadow-xl hover:-translate-y-2 focus-ring"
                  >
                    <span
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "var(--gradient-primary)",
                        opacity: 0,
                        transition: "opacity var(--transition-base)",
                        borderRadius: "var(--radius)",
                      }}
                      className="group-hover:opacity-100"
                    />
                    <div style={{ position: "relative", zIndex: 10 }}>
                      <IconComponent
                        style={{
                          width: "2rem",
                          height: "2rem",
                          margin: "0 auto 0.5rem",
                          color: "var(--primary)",
                          transition: "color var(--transition-base)",
                        }}
                        className="group-hover:text-primary-foreground"
                      />
                      <span
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: "var(--font-medium)",
                          color: "var(--muted-foreground)",
                          transition: "color var(--transition-base)",
                        }}
                        className="group-hover:text-primary-foreground"
                      >
                        {link.label}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            pointerEvents: "none",
          }}
        >
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: `${20 + i * 15}%`,
                left: `${10 + i * 15}%`,
                fontSize: "3rem",
                color: "var(--primary)",
                opacity: 0.1,
                animation: `float 6s ease-in-out ${i * 2}s infinite`,
              }}
            >
              <Construction />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
