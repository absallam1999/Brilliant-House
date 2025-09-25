import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Paintbrush,
  Wrench,
  Sparkles,
  DollarSign,
  Clock,
  Star,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "./../../../components/ui/button";

export default function RenovationPage() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const features = [
    {
      icon: Paintbrush,
      title: "Custom Upgrades",
      description: "Tailored designs to enhance your space’s style and functionality.",
      delay: 150,
    },
    {
      icon: DollarSign,
      title: "Budget-Friendly",
      description: "Affordable renovations customized to your financial goals.",
      delay: 300,
    },
    {
      icon: Sparkles,
      title: "Modern Finishes",
      description: "Premium materials for a sleek, contemporary look.",
      delay: 450,
    },
    {
      icon: Clock,
      title: "Minimal Disruption",
      description: "Fast, efficient processes to minimize downtime.",
      delay: 600,
    },
  ];

  const renovationTypes = [
    {
      title: "Kitchen Remodeling",
      description: "Modernize your kitchen with stylish layouts and appliances.",
      delay: 150,
    },
    {
      title: "Bathroom Renovation",
      description: "Create a luxurious, spa-like retreat with elegant fixtures.",
      delay: 300,
    },
    {
      title: "Whole-Home Renovation",
      description: "Revamp every room with cohesive, stunning designs.",
      delay: 450,
    },
    {
      title: "Outdoor Living Spaces",
      description: "Elevate your property with decks or outdoor kitchens.",
      delay: 600,
    },
  ];

  const testimonials = [
    {
      quote: "Our kitchen remodel was flawless! The team brought our vision to life.",
      author: "Mona A..",
      role: "Homeowner",
      rating: 5,
      delay: 150,
    },
    {
      quote: "The bathroom renovation exceeded our expectations. Highly professional!",
      author: "Mahmoud L.",
      role: "Client",
      rating: 5,
      delay: 300,
    },
    {
      quote: "Our outdoor patio is now our favorite space. Amazing work!",
      author: "Heba T.",
      role: "Homeowner",
      rating: 4,
      delay: 450,
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--background)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        color: "var(--foreground)",
        transition: "all var(--transition-base)",
      }}
      className="theme-transition sm:px-6 lg:px-8"
    >
      {/* Decorative Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        {[...Array(5)].map((_, i) => (
          <Paintbrush
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
          />
        ))}
      </div>

      {/* Hero Section */}
      <section
        style={{
          padding: "var(--spacing-3xl) 0",
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
            background: "var(--background)",
            borderRadius: "var(--radius-lg)",
            padding: "2rem",
            boxShadow: "var(--shadow-lg)",
            border: "1px solid var(--border)",
          }}
        >
          <div style={{ position: "relative", marginBottom: "2rem" }}>
            <Paintbrush
              style={{
                width: "6rem",
                height: "6rem",
                color: "var(--primary)",
                margin: "0 auto",
              }}
              className="sm:w-32 sm:h-32 animate-pulse"
            />
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
            Transform Your <span style={{ color: "var(--primary)" }}>Living Space</span>
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
            Revitalize your home or business with our expert renovation services, blending style, functionality, and quality craftsmanship.
          </p>
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
              to="/quote"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              <ArrowRight
                style={{
                  width: "1.25rem",
                  height: "1.25rem",
                  marginRight: "0.5rem",
                }}
              />
              Request a Consultation
            </Link>
          </Button>
        </div>
      </section>

      {/* Service Overview Section */}
      <section
        style={{
          padding: "var(--spacing-2xl) 0",
          maxWidth: "64rem",
          width: "100%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            background: "var(--muted)",
            borderRadius: "var(--radius-lg)",
            padding: "1.5rem",
            boxShadow: "var(--shadow-lg)",
            border: "1px solid var(--border)",
          }}
        >
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: "var(--font-bold)",
              color: "var(--foreground)",
              marginBottom: "1.5rem",
              lineHeight: "var(--line-height-tight)",
            }}
            className="sm:text-3xl"
          >
            Why Choose Our Renovation Services?
          </h2>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))",
              marginBottom: "2rem",
            }}
            className="sm:grid-cols-3"
          >
            {[
              { value: "100+", label: "Projects Completed" },
              { value: "97%", label: "Client Satisfaction" },
              { value: "15+", label: "Years of Expertise" },
            ].map((stat, index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                  padding: "1rem",
                  background: "var(--background)",
                  borderRadius: "var(--radius)",
                  transition: "all var(--transition-base)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-md)",
                  border: "1px solid var(--border)",
                }}
                className="group hover:shadow-xl hover:-translate-y-2"
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
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: "var(--font-bold)",
                      color: "var(--primary)",
                      marginBottom: "0.5rem",
                      transition: "color var(--transition-base)",
                    }}
                    className="group-hover:text-primary-foreground"
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--muted-foreground)",
                      transition: "color var(--transition-base)",
                    }}
                    className="group-hover:text-primary-foreground"
                  >
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p
            style={{
              fontSize: "1.125rem",
              color: "var(--muted-foreground)",
              maxWidth: "40rem",
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: "var(--line-height-relaxed)",
            }}
          >
            Our renovation services deliver tailored solutions to refresh and enhance your space with precision and creativity.
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section
        style={{
          padding: "var(--spacing-2xl) 0",
          maxWidth: "64rem",
          width: "100%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            background: "var(--background)",
            borderRadius: "var(--radius-lg)",
            padding: "1.5rem",
            boxShadow: "var(--shadow-lg)",
            border: "1px solid var(--border)",
          }}
        >
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: "var(--font-bold)",
              color: "var(--foreground)",
              marginBottom: "1.5rem",
              lineHeight: "var(--line-height-tight)",
            }}
            className="sm:text-3xl"
          >
            Our Renovation Features
          </h2>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))",
            }}
            className="sm:grid-cols-4"
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  style={{
                    position: "relative",
                    padding: "1rem",
                    background: "var(--muted)",
                    borderRadius: "var(--radius)",
                    transition: "all var(--transition-base)",
                    overflow: "hidden",
                    boxShadow: "var(--shadow-md)",
                    border: "1px solid var(--border)",
                  }}
                  className="group hover:shadow-xl hover:-translate-y-2"
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
                    <h3
                      style={{
                        fontSize: "1.125rem",
                        fontWeight: "var(--font-semibold)",
                        color: "var(--foreground)",
                        marginBottom: "0.5rem",
                        transition: "color var(--transition-base)",
                      }}
                      className="group-hover:text-primary-foreground"
                    >
                      {feature.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--muted-foreground)",
                        transition: "color var(--transition-base)",
                      }}
                      className="group-hover:text-primary-foreground"
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Renovation Types Section */}
      <section
        style={{
          padding: "var(--spacing-2xl) 0",
          maxWidth: "64rem",
          width: "100%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            background: "var(--muted)",
            borderRadius: "var(--radius-lg)",
            padding: "1.5rem",
            boxShadow: "var(--shadow-lg)",
            border: "1px solid var(--border)",
          }}
        >
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: "var(--font-bold)",
              color: "var(--foreground)",
              marginBottom: "1.5rem",
              lineHeight: "var(--line-height-tight)",
            }}
            className="sm:text-3xl"
          >
            Types of Renovation Projects
          </h2>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))",
            }}
            className="sm:grid-cols-2"
          >
            {renovationTypes.map((project, index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                  padding: "1rem",
                  background: "var(--background)",
                  borderRadius: "var(--radius)",
                  transition: "all var(--transition-base)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-md)",
                  border: "1px solid var(--border)",
                }}
                className="group hover:shadow-xl hover:-translate-y-2"
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
                  <h3
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: "var(--font-semibold)",
                      color: "var(--foreground)",
                      marginBottom: "0.5rem",
                      transition: "color var(--transition-base)",
                    }}
                    className="group-hover:text-primary-foreground"
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--muted-foreground)",
                      transition: "color var(--transition-base)",
                    }}
                    className="group-hover:text-primary-foreground"
                  >
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        style={{
          padding: "var(--spacing-2xl) 0",
          maxWidth: "64rem",
          width: "100%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            background: "var(--background)",
            borderRadius: "var(--radius-lg)",
            padding: "1.5rem",
            boxShadow: "var(--shadow-lg)",
            border: "1px solid var(--border)",
          }}
        >
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: "var(--font-bold)",
              color: "var(--foreground)",
              marginBottom: "1.5rem",
              lineHeight: "var(--line-height-tight)",
            }}
            className="sm:text-3xl"
          >
            Client Stories
          </h2>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))",
            }}
            className="sm:grid-cols-3"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                  padding: "1rem",
                  background: "var(--muted)",
                  borderRadius: "var(--radius)",
                  transition: "all var(--transition-base)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-md)",
                  border: "1px solid var(--border)",
                }}
                className="group hover:shadow-xl hover:-translate-y-2"
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
                  <div style={{ marginBottom: "0.5rem" }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        style={{
                          width: "1.25rem",
                          height: "1.25rem",
                          display: "inline-block",
                          color: i < testimonial.rating ? "var(--warning)" : "var(--muted-foreground)",
                          fill: i < testimonial.rating ? "var(--warning)" : "none",
                          transition: "color var(--transition-base)",
                        }}
                        className="group-hover:text-primary-foreground group-hover:fill-primary-foreground"
                      />
                    ))}
                  </div>
                  <blockquote
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--muted-foreground)",
                      marginBottom: "0.5rem",
                      fontStyle: "italic",
                      lineHeight: "var(--line-height-relaxed)",
                      transition: "color var(--transition-base)",
                    }}
                    className="group-hover:text-primary-foreground"
                  >
                    "{testimonial.quote}"
                  </blockquote>
                  <div
                    style={{
                      fontSize: "1rem",
                      fontWeight: "var(--font-semibold)",
                      color: "var(--foreground)",
                      transition: "color var(--transition-base)",
                    }}
                    className="group-hover:text-primary-foreground"
                  >
                    {testimonial.author}
                  </div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--muted-foreground)",
                      transition: "color var(--transition-base)",
                    }}
                    className="group-hover:text-primary-foreground"
                  >
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          padding: "var(--spacing-2xl) 0",
          maxWidth: "64rem",
          width: "100%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            background: "var(--background)",
            borderRadius: "var(--radius-lg)",
            padding: "1.5rem",
            boxShadow: "var(--shadow-lg)",
            border: "1px solid var(--border)",
          }}
        >
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: "var(--font-bold)",
              color: "var(--foreground)",
              marginBottom: "1.5rem",
              lineHeight: "var(--line-height-tight)",
            }}
            className="sm:text-3xl"
          >
            Ready to Transform Your Space?
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "var(--muted-foreground)",
              marginBottom: "2rem",
              maxWidth: "32rem",
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: "var(--line-height-relaxed)",
            }}
          >
            Contact us for a free consultation to revitalize your home or business.
          </p>
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
              to="/contact"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              <CheckCircle
                style={{
                  width: "1.25rem",
                  height: "1.25rem",
                  marginRight: "0.5rem",
                }}
              />
              Start Your Project
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}