import React from "react";
import { Award, Clock, Users, Building, ChevronRight } from "lucide-react";
import { Button } from "../../../components/ui/button";
import AboutLogo from "../../../assets/about-Img.jpg";

export default function AboutSection() {
  const features = [
    {
      icon: Award,
      title: "Quality Assurance",
      description:
        "Rigorous quality control processes ensuring excellence in every project",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description:
        "Consistent on-time project completion with meticulous planning",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Highly skilled professionals with decades of combined experience",
    },
    {
      icon: Building,
      title: "Modern Techniques",
      description:
        "Cutting-edge construction methods and sustainable practices",
    },
  ];

  return (
    <section
      id="about"
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
            display: "grid",
            gap: "var(--spacing-lg)",
            alignItems: "center",
          }}
          className="lg:grid-cols-2 lg:gap-[var(--spacing-xl)]"
        >
          {/* Text Content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-lg)",
            }}
            className="animate-slide-in"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--spacing-md)",
              }}
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
                }}
                className="animate-fade-in"
              >
                About Us
              </span>
              <h2
                style={{
                  fontSize: "2rem",
                  fontWeight: "var(--font-bold)",
                  lineHeight: "var(--line-height-tight)",
                }}
                className="sm:text-[1.75rem] md:text-[2rem]"
              >
                Building Excellence Through{" "}
                <span
                  style={{
                    background:
                      "var(--gradient-primary, linear-gradient(135deg, var(--primary), var(--accent)))",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Innovation
                </span>{" "}
                &{" "}
                <span
                  style={{
                    background:
                      "var(--gradient-primary, linear-gradient(135deg, var(--primary), var(--accent)))",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Expertise
                </span>
              </h2>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--spacing-md)",
              }}
            >
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--muted-foreground)",
                  lineHeight: "var(--line-height-relaxed)",
                  maxWidth: "36rem",
                }}
                className="animate-fade-in md:text-[1.125rem]"
              >
                With over{" "}
                <span
                  style={{
                    fontWeight: "var(--font-semibold)",
                    background:
                      "var(--gradient-primary, linear-gradient(135deg, var(--primary), var(--accent)))",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  15 years of experience
                </span>{" "}
                in the construction industry, iConstruction has established
                itself as a leading provider of comprehensive construction
                solutions. We specialize in delivering high-quality projects
                that exceed our clients’ expectations.
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--muted-foreground)",
                  lineHeight: "var(--line-height-relaxed)",
                  maxWidth: "36rem",
                }}
                className="animate-fade-in"
              >
                Our team of experienced professionals is committed to excellence
                in every aspect of construction, from initial planning to final
                delivery. We use the latest technologies and sustainable
                practices to ensure our projects are built to last.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gap: "var(--spacing-md)",
              }}
              className="sm:grid-cols-2"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  style={{
                    padding: "var(--spacing-md)",
                    backgroundColor: "var(--background)",
                    borderRadius: "var(--radius-lg)",
                    border: "1px solid var(--border)",
                    transition: "all var(--transition-base)",
                  }}
                  className="hover:shadow-lg hover:-translate-y-1 focus-ring animate-fade-in"
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "var(--spacing-md)",
                    }}
                  >
                    <div style={{ flexShrink: 0 }}>
                      <div
                        style={{
                          width: "3rem",
                          height: "3rem",
                          backgroundColor: "var(--secondary)",
                          opacity: 0.8,
                          borderRadius: "var(--radius)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all var(--transition-base)",
                        }}
                        className="hover:bg-primary hover:text-primary-foreground"
                      >
                        <feature.icon
                          style={{
                            width: "1.5rem",
                            height: "1.5rem",
                            color: "var(--primary)",
                          }}
                          className="hover:text-primary-foreground"
                        />
                      </div>
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: "1rem",
                          fontWeight: "var(--font-semibold)",
                          color: "var(--foreground)",
                          marginBottom: "var(--spacing-xs)",
                        }}
                      >
                        {feature.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "var(--muted-foreground)",
                        }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "var(--spacing-md)" }}>
              <Button
                style={{
                  background: "var(--gradient-primary)",
                  color: "var(--primary-foreground)",
                  fontWeight: "var(--font-semibold)",
                  padding: "var(--spacing-sm) var(--spacing-lg)",
                  borderRadius: "var(--radius)",
                  boxShadow: "var(--shadow-lg)",
                  transition: "all var(--transition-base)",
                  position: "relative",
                  overflow: "hidden",
                  minHeight: "44px",
                }}
                className="hover:brightness-110 !hover:opacity-100 group relative glass dark:backdrop-blur-md dark:bg-gray-800/30"
                aria-label="About Us"
              >
                <span
                  style={{
                    zIndex: 10,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  Learn More About Us
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

          {/* Image Section */}
          <div
            style={{ position: "relative" }}
            className="animate-slide-in-right"
          >
            <div
              style={{
                position: "relative",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                boxShadow: "var(--shadow-lg)",
                aspectRatio: "1/1",
                maxHeight: "32rem",
              }}
              className="hover:shadow-xl"
            >
              <img
                src={AboutLogo}
                alt="About iConstruction"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform var(--transition-base)",
                }}
                className="hover:scale-105"
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, transparent 0%, var(--background) 100%)",
                  opacity: 0.4,
                }}
              />
            </div>

            <div
              style={{
                position: "absolute",
                top: "calc(-1 * var(--spacing-md))",
                left: "calc(-1 * var(--spacing-md))",
                backgroundColor: "var(--primary)",
                color: "var(--primary-foreground)",
                padding: "var(--spacing-sm) var(--spacing-md)",
                borderRadius: "var(--radius)",
                boxShadow: "var(--shadow-lg)",
              }}
              className="animate-pulse"
            >
              <div style={{ textAlign: "center" }}>
                <span
                  style={{
                    display: "block",
                    fontSize: "1.5rem",
                    fontWeight: "var(--font-bold)",
                  }}
                >
                  15+
                </span>
                <span
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Years Experience
                </span>
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                bottom: "calc(-1 * var(--spacing-md))",
                right: "calc(-1 * var(--spacing-md))",
                backgroundColor: "var(--background)",
                padding: "var(--spacing-sm)",
                borderRadius: "var(--radius)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-lg)",
              }}
              className="animate-pulse"
            >
              <div style={{ textAlign: "center" }}>
                <span
                  style={{
                    display: "block",
                    fontSize: "1.5rem",
                    fontWeight: "var(--font-bold)",
                    color: "var(--primary)",
                  }}
                >
                  250+
                </span>
                <span
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    color: "var(--muted-foreground)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Projects Completed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          h2 {
            font-size: 1.75rem;
          }

          p {
            font-size: 0.875rem;
          }
        }

        @media (max-width: 480px) {
          h2 {
            font-size: 1.5rem;
          }

          p {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
}
