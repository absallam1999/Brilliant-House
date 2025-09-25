import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Users,
  Award,
  Building,
  HardHat,
  Sparkles,
  Brush,
} from "lucide-react";
import { Button } from "./../../components/ui/button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    projectType: "",
    budget: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setIsLoading(false);

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        projectType: "",
        budget: "",
      });
      setIsSubmitted(false);
    }, 4000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Number",
      content: "+2 015 55637890",
      description: "Sat-Fri from 8am to 6pm",
      delay: 100,
      action: "tel:+01555637890",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Mail,
      title: "Email Address",
      content: "brilliantdesign56@gmail.com",
      description: "We'll respond within 24 hours",
      delay: 200,
      action: "mailto:brilliantdesign56@gmail.com",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      title: "Office Location",
      content: "Alexandria. Egypt",
      description: "Visit our headquarters",
      delay: 300,
      action: "https://maps.google.com",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Sat - Thu: 8:00 - 18:00",
      description: "Friday: 9:00 - 14:00",
      delay: 400,
      action: null,
      color: "from-purple-500 to-pink-500",
    },
  ];

  const services = [
    { name: "Residential Construction", icon: Building, color: "from-blue-500 to-cyan-500" },
    { name: "Commercial Projects", icon: HardHat, color: "from-green-500 to-emerald-500" },
    { name: "Renovation Services", icon: Award, color: "from-amber-500 to-orange-500" },
    { name: "Project Consultation", icon: Users, color: "from-purple-500 to-pink-500" },
    { name: "Design Planning", icon: Brush, color: "from-red-500 to-pink-500" },
    { name: "Quality Inspection", icon: CheckCircle, color: "from-blue-500 to-cyan-500" },
  ];

  return (
    <section
      style={{
        minHeight: "100vh",
        marginTop: "2rem",
        background: "var(--background)",
        padding: "var(--spacing-3xl) var(--spacing-md)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at top right, var(--primary) 0%, transparent 50%)",
          opacity: 0.05,
          zIndex: -1,
          animation: "pulse 12s ease-in-out infinite",
        }}
      />
      <div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "var(--spacing-2xl)",
            position: "relative",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              fontSize: "1rem",
              fontWeight: "var(--font-semibold)",
              color: "var(--primary-foreground)",
              background: "var(--gradient-primary)",
              padding: "0.5rem 1rem",
              borderRadius: "var(--radius-lg)",
              marginBottom: "var(--spacing-md)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            }}
            className="animate-pulse"
          >
            <Sparkles
              style={{
                width: "1.25rem",
                height: "1.25rem",
                marginRight: "0.5rem",
                color: "#fff"
              }}
              className="animate-spin-slow"
            />
            Connect with Us
          </span>
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: "var(--font-bold)",
              color: "var(--foreground)",
              lineHeight: "var(--line-height-tight)",
              display: "flex",
              justifyContent: "center",
              gap: "0.5rem",
              flexWrap: "wrap",
            }}
            className="sm:text-4xl lg:text-5xl"
          >
            {["Let's", "Build", "Your", "Vision"].map((word, index) => (
              <span
                key={index}
                style={{
                  opacity: animate ? 1 : 0,
                  transform: animate ? "translateY(0)" : "translateY(1.5rem)",
                  transition: `all var(--transition-base) ${index * 0.1}s`,
                  background: index === 1 || index === 3 ? "var(--gradient-primary)" : "none",
                  WebkitBackgroundClip: index === 1 || index === 3 ? "text" : "none",
                  color: index === 1 || index === 3 ? "transparent" : "var(--foreground)",
                }}
              >
                {word}
              </span>
            ))}
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              color: "var(--muted-foreground)",
              maxWidth: "48rem",
              margin: "var(--spacing-md) auto 0",
              lineHeight: "var(--line-height-relaxed)",
              opacity: animate ? 1 : 0,
              transform: animate ? "translateY(0)" : "translateY(1rem)",
              transition: "all var(--transition-base) 0.3s",
            }}
          >
            Ready to transform your space? Reach out for a free consultation, and let our expert team bring your dream project to life.
          </p>
        </div>

        {/* Main Content: Two-Sided Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "var(--spacing-xl)",
            marginBottom: "var(--spacing-2xl)",
          }}
          className="lg:grid-cols-2"
        >
          {/* Left Side: Contact Info */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-lg)",
            }}
          >
            <div
              style={{
                background: "var(--card)",
                borderRadius: "var(--radius-lg)",
                padding: "var(--spacing-lg)",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                border: "2px solid var(--gradient-primary)",
                backdropFilter: "blur(8px)",
                position: "relative",
                overflow: "hidden",
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(2rem)",
                transition: "all var(--transition-base) 0.3s",
              }}
              className="hover-lift hover:shadow-2xl group"
            >
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "var(--gradient-primary)",
                  opacity: 0,
                  transition: "opacity var(--transition-base)",
                  borderRadius: "var(--radius-lg)",
                }}
                className="group-hover:opacity-15"
              />
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "var(--font-semibold)",
                  color: "var(--foreground)",
                  marginBottom: "var(--spacing-md)",
                }}
              >
                Contact Information
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))",
                  gap: "var(--spacing-md)",
                }}
                className="sm:grid-cols-2"
              >
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  const ContactElement = item.action ? "a" : "div";
                  return (
                    <ContactElement
                      key={index}
                      href={item.action || undefined}
                      target={item.action && item.action.startsWith("http") ? "_blank" : undefined}
                      rel={item.action && item.action.startsWith("http") ? "noopener noreferrer" : undefined}
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "var(--radius)",
                        padding: "var(--spacing-md)",
                        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
                        border: `2px solid var(--gradient-${item.color})`,
                        transition: "all var(--transition-base) 0.3s",
                        opacity: animate ? 1 : 0,
                        transform: animate ? `translateY(0) rotate(${index % 2 === 0 ? "-2deg" : "2deg"})` : `translateY(2rem) rotate(${index % 2 === 0 ? "-2deg" : "2deg"})`,
                        transitionDelay: `${item.delay}ms`,
                        position: "relative",
                        overflow: "hidden",
                        cursor: item.action ? "pointer" : "default",
                        backdropFilter: "blur(4px)",
                      }}
                      className="hover-lift hover:shadow-xl hover:scale-105 hover:rotate-0 group"
                    >
                      <span
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: `var(--gradient-${item.color})`,
                          opacity: 0,
                          transition: "opacity var(--transition-base)",
                          borderRadius: "var(--radius)",
                        }}
                        className="group-hover:opacity-15"
                      />
                      <div
                        style={{
                          width: "3rem",
                          height: "3rem",
                          background: `var(--gradient-${item.color})`,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "var(--spacing-md)",
                        }}
                        className="animate-pulse"
                      >
                        <IconComponent
                          style={{
                            width: "1.5rem",
                            height: "1.5rem",
                            color: "var(--primary)",
                          }}
                        />
                      </div>
                      <h4
                        style={{
                          fontSize: "1.125rem",
                          fontWeight: "var(--font-semibold)",
                          color: "var(--foreground)",
                          marginBottom: "var(--spacing-xs)",
                        }}
                      >
                        {item.title}
                      </h4>
                      <p
                        style={{
                          fontSize: "1rem",
                          color: "var(--primary)",
                          marginBottom: "var(--spacing-xs)",
                        }}
                      >
                        {item.content}
                      </p>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "var(--muted-foreground)",
                          lineHeight: "var(--line-height-relaxed)",
                        }}
                      >
                        {item.description}
                      </p>
                    </ContactElement>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            id="contact-form"
            style={{
              background: "var(--card)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--spacing-lg)",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
              border: "2px solid var(--gradient-primary)",
              backdropFilter: "blur(8px)",
              position: "relative",
              overflow: "hidden",
              opacity: animate ? 1 : 0,
              transform: animate ? "translateY(0)" : "translateY(2rem)",
              transition: "all var(--transition-base) 0.5s",
            }}
            className="hover-lift hover:shadow-2xl group"
          >
            <span
              style={{
                position: "absolute",
                inset: 0,
                background: "var(--gradient-primary)",
                opacity: 0,
                transition: "opacity var(--transition-base)",
                borderRadius: "var(--radius-lg)",
              }}
              className="group-hover:opacity-15"
            />
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "var(--font-semibold)",
                color: "var(--foreground)",
                marginBottom: "var(--spacing-md)",
              }}
            >
              Send Us a Message
            </h3>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--muted-foreground)",
                marginBottom: "var(--spacing-lg)",
                lineHeight: "var(--line-height-relaxed)",
              }}
            >
              Fill out the form below, and our team will respond within 24 hours with a free consultation and project estimate.
            </p>

            {isSubmitted ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "var(--spacing-2xl) 0",
                  opacity: animate ? 1 : 0,
                  transform: animate ? "translateY(0)" : "translateY(1rem)",
                  transition: "all var(--transition-base) 0.3s",
                }}
              >
                <CheckCircle
                  style={{
                    width: "3rem",
                    height: "3rem",
                    color: "var(--primary)",
                    margin: "0 auto var(--spacing-md)",
                  }}
                  className="animate-pulse"
                />
                <h4
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "var(--font-semibold)",
                    color: "var(--foreground)",
                    marginBottom: "var(--spacing-sm)",
                  }}
                >
                  Message Sent Successfully!
                </h4>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "var(--muted-foreground)",
                    lineHeight: "var(--line-height-relaxed)",
                  }}
                >
                  Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--muted-foreground)",
                    marginTop: "var(--spacing-sm)",
                  }}
                >
                  Check your email for a confirmation message.
                </p>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--spacing-md)",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))",
                    gap: "var(--spacing-md)",
                  }}
                  className="sm:grid-cols-2"
                >
                  <div
                    style={{
                      position: "relative",
                    }}
                  >
                    <label
                      htmlFor="name"
                      style={{
                        position: "absolute",
                        top: formData.name ? "0" : "var(--spacing-sm)",
                        left: "var(--spacing-sm)",
                        fontSize: formData.name ? "0.75rem" : "0.875rem",
                        fontWeight: "var(--font-medium)",
                        color: formData.name ? "var(--muted-foreground)" : "var(--foreground)",
                        transition: "all var(--transition-base)",
                        pointerEvents: "none",
                      }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      style={{
                        width: "100%",
                        padding: "var(--spacing-md) var(--spacing-sm) var(--spacing-xs)",
                        border: "1px solid var(--border)",
                        borderRadius: "var(--radius)",
                        background: "rgba(255, 255, 255, 0.05)",
                        color: "var(--foreground)",
                        transition: "all var(--transition-base)",
                        backdropFilter: "blur(4px)",
                      }}
                      className="focus:ring-2 focus:ring-[var(--gradient-primary)] focus:border-transparent"
                    />
                  </div>
                  <div
                    style={{
                      position: "relative",
                    }}
                  >
                    <label
                      htmlFor="email"
                      style={{
                        position: "absolute",
                        top: formData.email ? "0" : "var(--spacing-sm)",
                        left: "var(--spacing-sm)",
                        fontSize: formData.email ? "0.75rem" : "0.875rem",
                        fontWeight: "var(--font-medium)",
                        color: formData.email ? "var(--muted-foreground)" : "var(--foreground)",
                        transition: "all var(--transition-base)",
                        pointerEvents: "none",
                      }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      style={{
                        width: "100%",
                        padding: "var(--spacing-md) var(--spacing-sm) var(--spacing-xs)",
                        border: "1px solid var(--border)",
                        borderRadius: "var(--radius)",
                        background: "rgba(255, 255, 255, 0.05)",
                        color: "var(--foreground)",
                        transition: "all var(--transition-base)",
                        backdropFilter: "blur(4px)",
                      }}
                      className="focus:ring-2 focus:ring-[var(--gradient-primary)] focus:border-transparent"
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))",
                    gap: "var(--spacing-md)",
                  }}
                  className="sm:grid-cols-2"
                >
                  <div
                    style={{
                      position: "relative",
                    }}
                  >
                    <label
                      htmlFor="phone"
                      style={{
                        position: "absolute",
                        top: formData.phone ? "0" : "var(--spacing-sm)",
                        left: "var(--spacing-sm)",
                        fontSize: formData.phone ? "0.75rem" : "0.875rem",
                        fontWeight: "var(--font-medium)",
                        color: formData.phone ? "var(--muted-foreground)" : "var(--foreground)",
                        transition: "all var(--transition-base)",
                        pointerEvents: "none",
                      }}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      style={{
                        width: "100%",
                        padding: "var(--spacing-md) var(--spacing-sm) var(--spacing-xs)",
                        border: "1px solid var(--border)",
                        borderRadius: "var(--radius)",
                        background: "rgba(255, 255, 255, 0.05)",
                        color: "var(--foreground)",
                        transition: "all var(--transition-base)",
                        backdropFilter: "blur(4px)",
                      }}
                      className="focus:ring-2 focus:ring-[var(--gradient-primary)] focus:border-transparent"
                    />
                  </div>
                  <div
                    style={{
                      position: "relative",
                    }}
                  >
                    <label
                      htmlFor="projectType"
                      style={{
                        position: "absolute",
                        top: formData.projectType ? "0" : "var(--spacing-sm)",
                        left: "var(--spacing-sm)",
                        fontSize: formData.projectType ? "0.75rem" : "0.875rem",
                        fontWeight: "var(--font-medium)",
                        color: formData.projectType ? "var(--muted-foreground)" : "var(--foreground)",
                        transition: "all var(--transition-base)",
                        pointerEvents: "none",
                      }}
                    >
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleInputChange}
                      style={{
                        width: "100%",
                        padding: "var(--spacing-md) var(--spacing-sm) var(--spacing-xs)",
                        border: "1px solid var(--border)",
                        borderRadius: "var(--radius)",
                        background: "rgba(255, 255, 255, 0.05)",
                        color: "var(--foreground)",
                        transition: "all var(--transition-base)",
                        backdropFilter: "blur(4px)",
                      }}
                      className="focus:ring-2 focus:ring-[var(--gradient-primary)] focus:border-transparent"
                    >
                      <option value="">Select project type</option>
                      <option value="residential">Residential Construction</option>
                      <option value="commercial">Commercial Building</option>
                      <option value="renovation">Renovation</option>
                      <option value="design">Design & Planning</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))",
                    gap: "var(--spacing-md)",
                  }}
                  className="sm:grid-cols-2"
                >
                  <div
                    style={{
                      position: "relative",
                    }}
                  >
                    <label
                      htmlFor="budget"
                      style={{
                        position: "absolute",
                        top: formData.budget ? "0" : "var(--spacing-sm)",
                        left: "var(--spacing-sm)",
                        fontSize: formData.budget ? "0.75rem" : "0.875rem",
                        fontWeight: "var(--font-medium)",
                        color: formData.budget ? "var(--muted-foreground)" : "var(--foreground)",
                        transition: "all var(--transition-base)",
                        pointerEvents: "none",
                      }}
                    >
                      Estimated Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      style={{
                        width: "100%",
                        padding: "var(--spacing-md) var(--spacing-sm) var(--spacing-xs)",
                        border: "1px solid var(--border)",
                        borderRadius: "var(--radius)",
                        background: "rgba(255, 255, 255, 0.05)",
                        color: "var(--foreground)",
                        transition: "all var(--transition-base)",
                        backdropFilter: "blur(4px)",
                      }}
                      className="focus:ring-2 focus:ring-[var(--gradient-primary)] focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-50k">Under $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-250k">$100,000 - $250,000</option>
                      <option value="250k-500k">$250,000 - $500,000</option>
                      <option value="over-500k">Over $500,000</option>
                    </select>
                  </div>
                  <div
                    style={{
                      position: "relative",
                    }}
                  >
                    <label
                      htmlFor="subject"
                      style={{
                        position: "absolute",
                        top: formData.subject ? "0" : "var(--spacing-sm)",
                        left: "var(--spacing-sm)",
                        fontSize: formData.subject ? "0.75rem" : "0.875rem",
                        fontWeight: "var(--font-medium)",
                        color: formData.subject ? "var(--muted-foreground)" : "var(--foreground)",
                        transition: "all var(--transition-base)",
                        pointerEvents: "none",
                      }}
                    >
                      Priority Level
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      style={{
                        width: "100%",
                        padding: "var(--spacing-md) var(--spacing-sm) var(--spacing-xs)",
                        border: "1px solid var(--border)",
                        borderRadius: "var(--radius)",
                        background: "rgba(255, 255, 255, 0.05)",
                        color: "var(--foreground)",
                        transition: "all var(--transition-base)",
                        backdropFilter: "blur(4px)",
                      }}
                      className="focus:ring-2 focus:ring-[var(--gradient-primary)] focus:border-transparent"
                    >
                      <option value="">Select priority</option>
                      <option value="urgent">Urgent (Start within 1 month)</option>
                      <option value="soon">Soon (Start in 1-3 months)</option>
                      <option value="planning">Planning Phase (3+ months)</option>
                      <option value="consultation">Just Exploring Options</option>
                    </select>
                  </div>
                </div>

                <div
                  style={{
                    position: "relative",
                  }}
                >
                  <label
                    htmlFor="message"
                    style={{
                      position: "absolute",
                      top: formData.message ? "0" : "var(--spacing-sm)",
                      left: "var(--spacing-sm)",
                      fontSize: formData.message ? "0.75rem" : "0.875rem",
                      fontWeight: "var(--font-medium)",
                      color: formData.message ? "var(--muted-foreground)" : "var(--foreground)",
                      transition: "all var(--transition-base)",
                      pointerEvents: "none",
                    }}
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      padding: "var(--spacing-md) var(--spacing-sm) var(--spacing-xs)",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius)",
                      background: "rgba(255, 255, 255, 0.05)",
                      color: "var(--foreground)",
                      transition: "all var(--transition-base)",
                      backdropFilter: "blur(4px)",
                      resize: "none",
                    }}
                    className="focus:ring-2 focus:ring-[var(--gradient-primary)] focus:border-transparent"
                  />
                </div>

                <Button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  style={{
                    background: "var(--gradient-primary)",
                    color: "var(--primary-foreground)",
                    fontWeight: "var(--font-semibold)",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "var(--radius)",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                    transition: "all var(--transition-base) 0.3s",
                    position: "relative",
                    overflow: "hidden",
                    cursor: isLoading ? "not-allowed" : "pointer",
                  }}
                  className="hover-lift hover:shadow-2xl hover:scale-105 focus-ring group"
                >
                  <span
                    style={{
                      zIndex: 10,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      justifyContent: "center",
                    }}
                  >
                    {isLoading ? (
                      <>
                        <div
                          style={{
                            width: "1.25rem",
                            height: "1.25rem",
                            border: "2px solid var(--primary-foreground)",
                            borderBottomColor: "transparent",
                            borderRadius: "50%",
                            animation: "spin 1s linear infinite",
                            marginRight: "0.5rem",
                          }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send
                          style={{
                            width: "1.5rem",
                            height: "1.5rem",
                            color: "var(--primary-foreground)",
                          }}
                          className="group-hover:scale-110 transition-transform"
                        />
                        Send Message
                      </>
                    )}
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "radial-gradient(circle at center, var(--accent) 0%, transparent 70%)",
                      opacity: 0,
                      transition: "opacity var(--transition-base)",
                    }}
                    className="group-hover:opacity-20"
                  />
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Map Section */}
        <div
          style={{
            background: "var(--card)",
            borderRadius: "var(--radius-lg)",
            padding: "var(--spacing-lg)",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
            border: "2px solid var(--gradient-primary)",
            backdropFilter: "blur(8px)",
            position: "relative",
            overflow: "hidden",
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(2rem)",
            transition: "all var(--transition-base) 0.6s",
          }}
          className="hover-lift hover:shadow-2xl group"
        >
          <span
            style={{
              position: "absolute",
              inset: 0,
              background: "var(--gradient-primary)",
              opacity: 0,
              transition: "opacity var(--transition-base)",
              borderRadius: "var(--radius-lg)",
            }}
            className="group-hover:opacity-15"
          />
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "var(--font-semibold)",
              color: "var(--foreground)",
              marginBottom: "var(--spacing-md)",
              textAlign: "center",
            }}
          >
            Visit Our Office
          </h3>
          <div
            style={{
              aspectRatio: "16/9",
              background: "var(--gradient-primary)",
              borderRadius: "var(--radius)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
              transition: "transform var(--transition-base) 0.3s",
            }}
            className="group-hover:scale-[1.02] group-hover:rotate-[0.5deg]"
          >
            <span
              style={{
                position: "absolute",
                inset: 0,
                background: "radial-gradient(circle at center, var(--accent) 0%, transparent 70%)",
                opacity: 0.1,
                transition: "opacity var(--transition-base)",
              }}
              className="group-hover:opacity-20"
            />
            <div
              style={{
                textAlign: "center",
                zIndex: 10,
                padding: "var(--spacing-md)",
              }}
            >
              <MapPin
                style={{
                  width: "3rem",
                  height: "3rem",
                  color: "var(--primary-dark)",
                  margin: "0 auto var(--spacing-md)",
                }}
                className="animate-pulse"
              />
              <p
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "var(--font-semibold)",
                  color: "var(--primary-foreground)",
                  marginBottom: "var(--spacing-sm)",
                }}
              >
                Interactive Map Coming Soon
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--primary-foreground)",
                  opacity: 0.8,
                }}
              >
                Alexandria, Egypt
              </p>
              <Button
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "var(--gradient-primary)",
                  color: "var(--primary)",
                  fontWeight: "var(--font-semibold)",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "var(--radius)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                  border: "2px solid var(--gradient-primary)",
                  transition: "all var(--transition-base) 0.3s",
                  position: "relative",
                  overflow: "hidden",
                  marginTop: "var(--spacing-md)",
                }}
                className="hover-lift hover:shadow-2xl hover:scale-105 focus-ring group"
              >
                <span
                  style={{
                    zIndex: 10,
                    display: "flex",
                    alignItems: "center",
                    color: "var(--primary-foreground)",
                    gap: "0.5rem",
                  }}
                >
                  Get Directions
                </span>
                <span
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "radial-gradient(circle at center, var(--accent) 0%, transparent 70%)",
                    opacity: 0,
                    transition: "opacity var(--transition-base)",
                  }}
                  className="group-hover:opacity-20"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hover-lift {
          transition: transform var(--transition-base), box-shadow var(--transition-base), scale var(--transition-base);
        }
        .hover-lift:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </section>
  );
}