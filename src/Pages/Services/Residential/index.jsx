import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Sparkles,
  Shield,
  Leaf,
  Paintbrush,
  Clock,
  Users,
  CheckCircle,
  Star,
  ArrowRight,
} from "lucide-react";
import { Button } from "./../../../components/ui/button";

export default function ResidentialPage() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const features = [
    {
      icon: Paintbrush,
      title: "Custom Home Designs",
      description: "Tailored designs to match your unique vision and lifestyle.",
      delay: 150,
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Materials",
      description: "Sustainable materials for energy-efficient, green homes.",
      delay: 300,
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Premium craftsmanship with rigorous quality checks.",
      delay: 450,
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Efficient project management for on-schedule completion.",
      delay: 600,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation & Planning",
      description: "We align your vision, budget, and timeline with a custom plan.",
      delay: 150,
    },
    {
      step: "02",
      title: "Design & Approval",
      description: "Our architects create designs and secure all permits.",
      delay: 300,
    },
    {
      step: "03",
      title: "Construction",
      description: "Skilled builders craft your home with precision.",
      delay: 450,
    },
    {
      step: "04",
      title: "Final Inspection & Handover",
      description: "We perfect every detail before delivering your dream home.",
      delay: 600,
    },
  ];

  const testimonials = [
    {
      quote: "The team turned our vision into a stunning home. Impeccable work!",
      author: "Sarah & Amr M.",
      role: "Homeowners",
      rating: 5,
      delay: 150,
    },
    {
      quote: "Eco-friendly and timely—our build was stress-free. Highly recommend!",
      author: "Ali S.",
      role: "Client",
      rating: 5,
      delay: 300,
    },
    {
      quote: "From consultation to handover, the process was seamless. Perfect!",
      author: "Moustafa H.",
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
          <Home
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
            <Home
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
            Build Your <span style={{ color: "var(--primary)" }}>Dream Home</span>
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
            Create a home that reflects your style with our expert residential construction services, blending quality and sustainability.
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
              Get a Free Quote
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
            Why Choose Our Residential Construction?
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
              { value: "80+", label: "Homes Built" },
              { value: "99%", label: "Client Satisfaction" },
              { value: "20+", label: "Years of Expertise" },
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
            Our residential construction services deliver innovative, sustainable homes with unmatched craftsmanship.
          </p>
        </div>
      </section>

      {/* Features Section */}
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
            Our Construction Features
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

      {/* Process Timeline Section */}
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
            Our Construction Process
          </h2>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))",
            }}
            className="sm:grid-cols-2"
          >
            {processSteps.map((step, index) => (
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
                      width: "3rem",
                      height: "3rem",
                      background: "var(--primary)",
                      color: "var(--primary-foreground)",
                      borderRadius: "var(--radius)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "var(--font-bold)",
                      fontSize: "1.25rem",
                      margin: "0 auto 0.5rem",
                    }}
                  >
                    {step.step}
                  </div>
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
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--muted-foreground)",
                      transition: "color var(--transition-base)",
                    }}
                    className="group-hover:text-primary-foreground"
                  >
                    {step.description}
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
            Ready to Build Your Dream Home?
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
            Contact us for a free consultation to turn your vision into reality.
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