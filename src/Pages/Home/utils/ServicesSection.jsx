import React from "react";
import { useNavigate } from "react-router-dom";
import { Home, Building, Hammer, Wrench, ChevronRight } from "lucide-react";
import { Button } from "../../../components/ui/button";

export default function ServicesSection() {
  const navigate = useNavigate();

  const services = [
    {
      icon: (
        <Home
          style={{ width: "2rem", height: "2rem", color: "var(--primary)" }}
        />
      ),
      title: "Residential Design",
      description:
        "Custom home building, renovations, and residential developments with attention to detail and quality craftsmanship.",
      features: ["Custom Homes", "Renovations", "Additions", "Interior Design"],
      link: "/services/residential",
    },
    {
      icon: (
        <Building
          style={{ width: "2rem", height: "2rem", color: "var(--primary)" }}
        />
      ),
      title: "Commercial Design",
      description:
        "Office buildings, retail spaces, and commercial complexes built with efficiency and functionality in mind.",
      features: ["Office Buildings", "Retail Spaces", "Hotels", "Restaurants"],
      link: "/services/commercial",
    },
    {
      icon: (
        <Hammer
          style={{ width: "2rem", height: "2rem", color: "var(--primary)" }}
        />
      ),
      title: "Renovation & Remodeling",
      description:
        "Transform your existing space with our expert renovation and remodeling services for both homes and businesses.",
      features: [
        "Kitchen Remodel",
        "Bathroom Renovation",
        "Office Upgrades",
        "Space Planning",
      ],
      link: "/services/renovation",
    },
    {
      icon: (
        <Wrench
          style={{ width: "2rem", height: "2rem", color: "var(--primary)" }}
        />
      ),
      title: "Project Management",
      description:
        "Comprehensive project management services ensuring your construction project stays on time and within budget.",
      features: [
        "Planning",
        "Scheduling",
        "Budget Management",
        "Quality Control",
      ],
      link: "/services/management",
    },
  ];

  return (
    <section
      id="services"
      style={{
        backgroundColor: "var(--background)",
        padding: "var(--spacing-xl) 0",
      }}
      className="theme-transition"
    >
      <div
        style={{
          maxWidth: "var(--container-max, 80rem)",
          margin: "0 auto",
          padding: "0 var(--spacing-md)",
        }}
        className="sm:px-[var(--spacing-lg)] lg:px-[var(--spacing-xl)]"
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "var(--spacing-xl)",
          }}
          className="animate-slide-in"
        >
          <span
            style={{
              display: "inline-block",
              fontSize: "0.875rem",
              fontWeight: "var(--font-semibold)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "var(--primary)",
              backgroundColor: "var(--primary, #04676A)",
              opacity: 0.1,
              padding: "var(--spacing-xs) var(--spacing-md)",
              borderRadius: "var(--radius)",
              marginBottom: "var(--spacing-md)",
            }}
            className="animate-fade-in"
          >
            Our Services
          </span>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "var(--font-bold)",
              marginBottom: "var(--spacing-md)",
              lineHeight: "var(--line-height-tight)",
            }}
            className="sm:text-[1.75rem] md:text-[2rem]"
          >
            Comprehensive Construction{" "}
            <span
              style={{
                background:
                  "var(--gradient-primary, linear-gradient(135deg, var(--primary), var(--accent)))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Solutions
            </span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--muted-foreground)",
              maxWidth: "48rem",
              margin: "0 auto",
              lineHeight: "var(--line-height-relaxed)",
            }}
            className="animate-fade-in md:text-[1.125rem]"
          >
            We offer a complete range of construction services to meet all your
            building needs, from initial concept to final completion, ensuring
            excellence at every stage.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: "var(--spacing-md)",
          }}
          className="md:grid-cols-2 lg:grid-cols-4 lg:gap-[var(--spacing-lg)]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                backgroundColor: "var(--background)",
                padding: "var(--spacing-md)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-lg)",
                transition: "all var(--transition-base)",
              }}
              className="hover:shadow-xl hover:-translate-y-1 focus-ring animate-slide-in-right"
            >
              <div
                style={{
                  marginBottom: "var(--spacing-md)",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "4rem",
                    height: "4rem",
                    backgroundColor: "var(--secondary)",
                    opacity: 1,
                    borderRadius: "var(--radius)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all var(--transition-base)",
                  }}
                  className="hover:bg-primary hover:text-primary-foreground animate-pulse"
                >
                  {React.cloneElement(service.icon, {
                    style: {
                      width: "2rem",
                      height: "2rem",
                      color: "var(--primary)",
                      transition: "color var(--transition-base)",
                    },
                    className: "hover:text-primary-foreground",
                  })}
                </div>
              </div>

              <div style={{ textAlign: "center" }}>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "var(--font-semibold)",
                    color: "var(--foreground)",
                    marginBottom: "var(--spacing-sm)",
                    transition: "color var(--transition-base)",
                  }}
                  className="hover:text-primary"
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--muted-foreground)",
                    marginBottom: "var(--spacing-md)",
                    lineHeight: "var(--line-height-relaxed)",
                  }}
                >
                  {service.description}
                </p>
              </div>

              <div style={{ marginBottom: "var(--spacing-md)" }}>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--spacing-sm)",
                  }}
                >
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "0.875rem",
                        color: "var(--muted-foreground)",
                      }}
                    >
                      <div
                        style={{
                          width: "0.375rem",
                          height: "0.375rem",
                          backgroundColor: "var(--primary)",
                          borderRadius: "50%",
                          marginRight: "var(--spacing-sm)",
                        }}
                      ></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                style={{
                  background:
                    "var(--gradient-primary, linear-gradient(135deg, var(--primary), var(--accent)))",
                  color: "var(--primary-foreground)",
                  fontWeight: "var(--font-semibold)",
                  padding: "var(--spacing-sm) var(--spacing-lg)",
                  borderRadius: "var(--radius)",
                  minHeight: "44px",
                  transition: "all var(--transition-base)",
                  boxShadow: "var(--shadow-lg)",
                }}
                className="hover:opacity-90 hover:shadow-xl focus-ring"
                onClick={() => navigate(service.link)}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--spacing-sm)",
                    fontSize: "1rem",
                  }}
                >
                  View More
                </span>
              </Button>

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "var(--radius-lg)",
                  border: "2px solid var(--primary)",
                  opacity: 0,
                  transition: "opacity var(--transition-base)",
                  pointerEvents: "none",
                }}
                className="hover:opacity-100"
              ></div>
            </div>
          ))}
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "var(--spacing-xl)",
          }}
          className="animate-fade-in"
        >
          <div
            style={{
              background:
                "var(--gradient-primary, linear-gradient(135deg, var(--primary), var(--accent)))",
              padding: "var(--spacing-lg)",
              borderRadius: "var(--radius-lg)",
              color: "var(--primary-foreground)",
            }}
            className="lg:p-[var(--spacing-xl)]"
          >
            <h3
              style={{
                fontSize: "1.5rem",
                color: "#FFFFFF",
                fontWeight: "var(--font-bold)",
                marginBottom: "var(--spacing-md)",
              }}
              className="md:text-[1.75rem]"
            >
              Ready to Start Your Project?
            </h3>
            <p
              style={{
                fontSize: "1rem",
                opacity: 0.9,
                marginBottom: "var(--spacing-md)",
                maxWidth: "36rem",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              className="md:text-[1.125rem]"
            >
              Let’s discuss your construction needs and create something amazing
              together.
            </p>
            <Button
              style={{
                background:
                  "var(--gradient-primary, linear-gradient(135deg, var(--primary), var(--accent)))",
                color: "var(--primary-foreground)",
                fontWeight: "var(--font-semibold)",
                padding: "var(--spacing-sm) var(--spacing-lg)",
                borderRadius: "var(--radius)",
                minHeight: "44px",
                transition: "all var(--transition-base)",
                boxShadow: "var(--shadow-lg)",
              }}
              className="hover:scale-105 hover:brightness-110 focus-ring group relative glass dark:backdrop-blur-md dark:bg-gray-800/30"
              onClick={() => navigate("/quote")}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--spacing-sm)",
                  fontSize: "1rem",
                }}
              >
                Get Free Consultation
                <ChevronRight
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    transition: "transform var(--transition-base)",
                  }}
                  className="group-hover:translate-x-1"
                />
              </span>
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          h2 {
            font-size: 1.75rem;
          }

          h3 {
            font-size: 1rem;
          }

          p {
            font-size: 0.875rem;
          }
        }

        @media (max-width: 480px) {
          h2 {
            font-size: 1.5rem;
          }

          h3 {
            font-size: 0.875rem;
          }

          p {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
}
