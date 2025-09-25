import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  DollarSign,
  Home,
  MapPin,
  Phone,
  User,
  Mail,
  Building2,
  Brush,
  MessageSquare,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  ArrowRight,
  Calculator,
} from "lucide-react";
import { Button } from "./../../components/ui/button";

export default function QuotePage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [animate, setAnimate] = useState(false);
  const [formData, setFormData] = useState({
    serviceType: "",
    projectType: "",
    propertyType: "",
    area: "",
    timeline: "",
    budget: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [animations, setAnimations] = useState({
    nextStep: false,
    prevStep: false,
    submit: false,
  });

  useEffect(() => {
    setAnimate(true);
    return () => {};
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const animateStepTransition = (direction) => {
    setAnimations((prev) => ({ ...prev, [direction]: true }));
    setTimeout(() => {
      setAnimations((prev) => ({ ...prev, [direction]: false }));
      if (direction === "nextStep") setStep((prev) => prev + 1);
      else if (direction === "prevStep") setStep((prev) => prev - 1);
    }, 500);
  };

  const nextStep = () => animateStepTransition("nextStep");
  const prevStep = () => animateStepTransition("prevStep");

  const handleSubmit = (e) => {
    e.preventDefault();
    setAnimations((prev) => ({ ...prev, submit: true }));
    setTimeout(() => {
      setAnimations((prev) => ({ ...prev, submit: false }));
      setStep((prev) => prev + 1);
    }, 1000);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--background)",
        color: "var(--foreground)",
        transition: "all var(--transition-base)",
        paddingTop: "var(--spacing-4xl)",
        paddingBottom: "var(--spacing-3xl)",
        overflow: "hidden",
      }}
      className="theme-transition sm:px-6 lg:px-8"
    >
      {/* Animated background */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -10,
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
              left: `${10 + i * 20}%`,
              width: "12rem",
              height: "12rem",
              background: "var(--gradient-primary-subtle)",
              borderRadius: "50%",
              opacity: 0.1,
              filter: "blur(3rem)",
              animation: `float 8s ease-in-out ${i * 1.5}s infinite`,
            }}
          />
        ))}
      </div>

      <div
        style={{
          maxWidth: "64rem",
          width: "100%",
          margin: "0 auto",
          padding: "0 var(--spacing-md)",
        }}
      >
        {/* Header */}
        <div
          style={{
            marginBottom: "var(--spacing-xl)",
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(2.5rem)",
            transition: "all var(--transition-base)",
          }}
        >
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--muted-foreground)",
              fontWeight: "var(--font-semibold)",
              padding: "0.75rem 1rem",
              marginBottom: "var(--spacing-md)",
              transition: "all var(--transition-base)",
            }}
            className="hover:text-primary hover:gap-0.75rem focus-ring active:scale-95 group"
          >
            <ArrowLeft
              style={{
                width: "1.25rem",
                height: "1.25rem",
              }}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back
          </Button>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "var(--font-bold)",
              color: "var(--foreground)",
              marginBottom: "0.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              lineHeight: "var(--line-height-tight)",
            }}
            className="sm:text-4xl gradient-text"
          >
            Request a Quote
            <Sparkles
              style={{
                width: "1.5rem",
                height: "1.5rem",
                color: "var(--primary)",
              }}
              className="animate-pulse"
            />
          </h1>
          <p
            style={{
              fontSize: "1.125rem",
              color: "var(--muted-foreground)",
              lineHeight: "var(--line-height-relaxed)",
            }}
          >
            Let's bring your vision to life. Tell us about your project and
            we'll provide a customized estimate.
          </p>
        </div>

        {/* Progress Bar */}
        <div
          style={{
            marginBottom: "var(--spacing-xl)",
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(1.5rem)",
            transition: "all var(--transition-base) 0.1s",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "var(--spacing-sm)",
            }}
          >
            <span
              style={{
                fontSize: "0.875rem",
                fontWeight: "var(--font-medium)",
                color: "var(--foreground)",
              }}
            >
              Step {step} of 4
            </span>
            <span
              style={{
                fontSize: "0.875rem",
                color: "var(--muted-foreground)",
              }}
            >
              {step * 25}% Complete
            </span>
          </div>
          <div
            style={{
              width: "100%",
              background: "var(--muted)",
              borderRadius: "var(--radius)",
              height: "0.5rem",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                background: "var(--gradient-primary)",
                borderRadius: "var(--radius)",
                transition: "width var(--transition-slow) ease-out",
                width: `${step * 25}%`,
              }}
              className="animate-pulse"
            />
          </div>
        </div>

        {/* Form Content */}
        <div
          style={{
            background: "var(--card)",
            borderRadius: "var(--radius-lg)",
            padding: "var(--spacing-lg) var(--spacing-xl)",
            boxShadow: "var(--shadow-lg)",
            border: "1px solid var(--border)",
            position: "relative",
            overflow: "hidden",
            opacity: animate ? 1 : 0,
            transform: animate ? "translateX(0)" : "translateX(2rem)",
            transition: "all var(--transition-base) 0.2s",
          }}
          className={`glass ${
            animations.nextStep ? "animate-slide-out-left" : ""
          } ${animations.prevStep ? "animate-slide-out-right" : ""} ${
            !animations.nextStep && !animations.prevStep
              ? "animate-slide-in-right"
              : ""
          }`}
        >
          {step < 4 ? (
            <form onSubmit={handleSubmit}>
              {/* Step 1: Service */}
              {step === 1 && (
                <div style={{ marginBottom: "var(--spacing-lg)" }}>
                  <h2
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "var(--font-semibold)",
                      color: "var(--foreground)",
                      marginBottom: "var(--spacing-sm)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    What service do you need?
                  </h2>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "var(--muted-foreground)",
                      marginBottom: "var(--spacing-md)",
                    }}
                  >
                    Select the primary service you're interested in.
                  </p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(12rem, 1fr))",
                      gap: "var(--spacing-md)",
                    }}
                    className="sm:grid-cols-2"
                  >
                    {[
                      {
                        id: "design",
                        label: "Design",
                        icon: Brush,
                        color: "from-blue-500 to-cyan-500",
                        borderColor: "var(--blue-500)",
                      },
                      {
                        id: "renovation",
                        label: "Renovation",
                        icon: Building2,
                        color: "from-amber-500 to-orange-500",
                        borderColor: "var(--amber-500)",
                      },
                      {
                        id: "consultation",
                        label: "Consultation",
                        icon: MessageSquare,
                        color: "from-green-500 to-emerald-500",
                        borderColor: "var(--green-500)",
                      },
                      {
                        id: "full-project",
                        label: "Full Project",
                        icon: CheckCircle,
                        color: "from-purple-500 to-pink-500",
                        borderColor: "var(--purple-500)",
                      },
                    ].map((service, index) => {
                      const IconComponent = service.icon;
                      return (
                        <div
                          key={service.id}
                          style={{
                            padding: "var(--spacing-md)",
                            border: `2px solid ${
                              formData.serviceType === service.id
                                ? service.borderColor
                                : "var(--border)"
                            }`,
                            borderRadius: "var(--radius)",
                            cursor: "pointer",
                            transition: "all var(--transition-base)",
                            position: "relative",
                            overflow: "hidden",
                            opacity: animate ? 1 : 0,
                            transform: animate
                              ? "translateY(0)"
                              : "translateY(1rem)",
                            transitionDelay: `${index * 100}ms`,
                          }}
                          className={`group hover:shadow-xl hover:-translate-y-2 focus-ring active:scale-95 ${
                            formData.serviceType === service.id
                              ? `bg-gradient-to-r ${service.color} text-white`
                              : "bg-card"
                          }`}
                          onClick={() => {
                            setFormData((prev) => ({
                              ...prev,
                              serviceType: service.id,
                            }));
                            setTimeout(nextStep, 500);
                          }}
                        >
                          <span
                            style={{
                              position: "absolute",
                              inset: 0,
                              background: `var(--gradient-${service.color})`,
                              opacity:
                                formData.serviceType === service.id ? 1 : 0,
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
                                margin: "0 auto var(--spacing-sm)",
                                color:
                                  formData.serviceType === service.id
                                    ? "var(--white)"
                                    : "var(--primary)",
                                transition: "color var(--transition-base)",
                              }}
                              className="group-hover:text-white"
                            />
                            <span
                              style={{
                                fontSize: "0.875rem",
                                fontWeight: "var(--font-medium)",
                                color:
                                  formData.serviceType === service.id
                                    ? "var(--white)"
                                    : "var(--muted-foreground)",
                                transition: "color var(--transition-base)",
                              }}
                              className="group-hover:text-white"
                            >
                              {service.label}
                            </span>
                            {formData.serviceType === service.id && (
                              <div
                                style={{
                                  marginTop: "var(--spacing-sm)",
                                  display: "flex",
                                  justifyContent: "flex-end",
                                }}
                              >
                                <ArrowRight
                                  style={{
                                    width: "1rem",
                                    height: "1rem",
                                    color: "var(--white)",
                                  }}
                                  className="animate-bounce"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 2: Project Details */}
              {step === 2 && (
                <div style={{ marginBottom: "var(--spacing-lg)" }}>
                  <h2
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "var(--font-semibold)",
                      color: "var(--foreground)",
                      marginBottom: "var(--spacing-sm)",
                    }}
                  >
                    Tell us about your project
                  </h2>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(12rem, 1fr))",
                      gap: "var(--spacing-md)",
                    }}
                    className="sm:grid-cols-2"
                  >
                    {[
                      {
                        label: "Project Type",
                        name: "projectType",
                        type: "select",
                        options: [
                          "",
                          "Residential",
                          "Commercial",
                          "Office Space",
                          "Other",
                        ],
                        icon: Home,
                      },
                      {
                        label: "Property Type",
                        name: "propertyType",
                        type: "select",
                        options: [
                          "",
                          "Apartment",
                          "House",
                          "Villa",
                          "Commercial Space",
                        ],
                        icon: MapPin,
                      },
                      {
                        label: "Approximate Area (m²)",
                        name: "area",
                        type: "number",
                        placeholder: "e.g. 120",
                        icon: Calculator,
                      },
                      {
                        label: "Desired Timeline",
                        name: "timeline",
                        type: "select",
                        options: [
                          "",
                          "ASAP",
                          "1-3 Months",
                          "3-6 Months",
                          "6+ Months",
                        ],
                        icon: Clock,
                      },
                      {
                        label: "Budget Range",
                        name: "budget",
                        type: "select",
                        options: [
                          "",
                          "Under $10,000",
                          "$10,000 - $25,000",
                          "$25,000 - $50,000",
                          "$50,000 - $100,000",
                          "$100,000+",
                        ],
                        icon: DollarSign,
                        fullWidth: true,
                      },
                    ].map((field, index) => {
                      const IconComponent = field.icon;
                      return (
                        <div
                          key={field.name}
                          style={{
                            gridColumn: field.fullWidth ? "1 / -1" : "auto",
                            opacity: animate ? 1 : 0,
                            transform: animate
                              ? "translateY(0)"
                              : "translateY(1rem)",
                            transition: `all var(--transition-base) ${
                              index * 80
                            }ms`,
                          }}
                        >
                          <label
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.5rem",
                              fontSize: "0.875rem",
                              fontWeight: "var(--font-medium)",
                              color: "var(--foreground)",
                              marginBottom: "var(--spacing-xs)",
                            }}
                          >
                            <IconComponent
                              style={{
                                width: "1.125rem",
                                height: "1.125rem",
                                color: "var(--primary)",
                              }}
                            />
                            {field.label}
                          </label>

                          {field.type === "select" ? (
                            <select
                              name={field.name}
                              value={formData[field.name]}
                              onChange={handleInputChange}
                              required
                              style={{
                                width: "100%",
                                padding: "var(--spacing-sm) var(--spacing-md)",
                                border: "1px solid var(--border)",
                                borderRadius: "var(--radius)",
                                background: "var(--card)",
                                fontSize: "1rem",
                                color: "var(--foreground)",
                                transition: "all var(--transition-base)",
                              }}
                              className="focus:ring-2 focus:ring-primary focus:border-primary hover:shadow-md glass active:scale-95"
                            >
                              {field.options.map((option, idx) => (
                                <option
                                  key={option || idx}
                                  value={
                                    option === ""
                                      ? ""
                                      : option
                                          .toLowerCase()
                                          .replace(/\s+/g, "-")
                                  }
                                  disabled={option === ""}
                                >
                                  {option ||
                                    `Select ${field.label.toLowerCase()}`}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <input
                              type={field.type}
                              name={field.name}
                              value={formData[field.name]}
                              onChange={handleInputChange}
                              placeholder={field.placeholder || ""}
                              required
                              style={{
                                width: "100%",
                                padding: "var(--spacing-sm) var(--spacing-md)",
                                border: "1px solid var(--border)",
                                borderRadius: "var(--radius)",
                                background: "var(--card)",
                                fontSize: "1rem",
                                color: "var(--foreground)",
                                transition: "all var(--transition-base)",
                              }}
                              className="focus:ring-2 focus:ring-primary focus:border-primary hover:shadow-md glass active:scale-95"
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      paddingTop: "var(--spacing-md)",
                    }}
                  >
                    <Button
                      variant="ghost"
                      onClick={prevStep}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        color: "var(--muted-foreground)",
                        fontWeight: "var(--font-semibold)",
                        padding: "0.75rem 1.5rem",
                        transition: "all var(--transition-base)",
                      }}
                      className="hover:text-primary hover:gap-0.75rem focus-ring active:scale-95 group"
                    >
                      <ChevronLeft
                        style={{
                          width: "1.25rem",
                          height: "1.25rem",
                        }}
                        className="group-hover:-translate-x-1 transition-transform"
                      />
                      Back
                    </Button>
                    <Button
                      disabled={
                        !formData.projectType ||
                        !formData.propertyType ||
                        !formData.area ||
                        !formData.timeline ||
                        !formData.budget
                      }
                      onClick={nextStep}
                      style={{
                        background: "var(--gradient-primary)",
                        color: "var(--primary-foreground)",
                        fontWeight: "var(--font-semibold)",
                        padding: "0.75rem 1.5rem",
                        borderRadius: "var(--radius)",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        transition: "all var(--transition-base)",
                      }}
                      className="hover:opacity-90 hover:shadow-lg focus-ring active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Continue
                      <ChevronRight
                        style={{
                          width: "1.25rem",
                          height: "1.25rem",
                        }}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Info */}
              {step === 3 && (
                <div style={{ marginBottom: "var(--spacing-lg)" }}>
                  <h2
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "var(--font-semibold)",
                      color: "var(--foreground)",
                      marginBottom: "var(--spacing-sm)",
                    }}
                  >
                    Your contact information
                  </h2>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(12rem, 1fr))",
                      gap: "var(--spacing-md)",
                    }}
                    className="sm:grid-cols-2"
                  >
                    {[
                      {
                        label: "First Name",
                        name: "firstName",
                        type: "text",
                        icon: User,
                      },
                      {
                        label: "Last Name",
                        name: "lastName",
                        type: "text",
                        icon: User,
                      },
                      {
                        label: "Email Address",
                        name: "email",
                        type: "email",
                        icon: Mail,
                      },
                      {
                        label: "Phone Number",
                        name: "phone",
                        type: "tel",
                        icon: Phone,
                      },
                      {
                        label: "Address",
                        name: "address",
                        type: "text",
                        icon: MapPin,
                        fullWidth: true,
                      },
                      {
                        label: "Additional Message (Optional)",
                        name: "message",
                        type: "textarea",
                        fullWidth: true,
                      },
                    ].map((field, index) => {
                      const IconComponent = field.icon;
                      return (
                        <div
                          key={field.name}
                          style={{
                            gridColumn: field.fullWidth ? "1 / -1" : "auto",
                            opacity: animate ? 1 : 0,
                            transform: animate
                              ? "translateY(0)"
                              : "translateY(1rem)",
                            transition: `all var(--transition-base) ${
                              index * 80
                            }ms`,
                          }}
                        >
                          <label
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.5rem",
                              fontSize: "0.875rem",
                              fontWeight: "var(--font-medium)",
                              color: "var(--foreground)",
                              marginBottom: "var(--spacing-xs)",
                            }}
                          >
                            <IconComponent
                              style={{
                                width: "1.125rem",
                                height: "1.125rem",
                                color: "var(--primary)",
                              }}
                            />
                            {field.label}
                          </label>
                          {field.type === "textarea" ? (
                            <textarea
                              name={field.name}
                              value={formData[field.name]}
                              onChange={handleInputChange}
                              rows={4}
                              placeholder="Tell us more about your project..."
                              style={{
                                width: "100%",
                                padding: "var(--spacing-sm) var(--spacing-md)",
                                border: "1px solid var(--border)",
                                borderRadius: "var(--radius)",
                                background: "var(--card)",
                                fontSize: "1rem",
                                color: "var(--foreground)",
                                transition: "all var(--transition-base)",
                              }}
                              className="focus:ring-2 focus:ring-primary focus:border-primary hover:shadow-md glass active:scale-95"
                            />
                          ) : (
                            <input
                              type={field.type}
                              name={field.name}
                              value={formData[field.name]}
                              onChange={handleInputChange}
                              required={field.type !== "textarea"}
                              style={{
                                width: "100%",
                                padding: "var(--spacing-sm) var(--spacing-md)",
                                border: "1px solid var(--border)",
                                borderRadius: "var(--radius)",
                                background: "var(--card)",
                                fontSize: "1rem",
                                color: "var(--foreground)",
                                transition: "all var(--transition-base)",
                              }}
                              className="focus:ring-2 focus:ring-primary focus:border-primary hover:shadow-md glass active:scale-95"
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      paddingTop: "var(--spacing-md)",
                    }}
                  >
                    <Button
                      variant="ghost"
                      onClick={prevStep}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        color: "var(--muted-foreground)",
                        fontWeight: "var(--font-semibold)",
                        padding: "0.75rem 1.5rem",
                        transition: "all var(--transition-base)",
                      }}
                      className="hover:text-primary hover:gap-0.75rem focus-ring active:scale-95 group"
                    >
                      <ChevronLeft
                        style={{
                          width: "1.25rem",
                          height: "1.25rem",
                        }}
                        className="group-hover:-translate-x-1 transition-transform"
                      />
                      Back
                    </Button>
                    <Button
                      type="submit"
                      style={{
                        background: "var(--gradient-primary)",
                        color: "var(--primary-foreground)",
                        fontWeight: "var(--font-semibold)",
                        padding: "0.75rem 1.5rem",
                        borderRadius: "var(--radius)",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        transition: "all var(--transition-base)",
                      }}
                      className="hover:opacity-90 hover:shadow-lg focus-ring active:scale-95"
                    >
                      Submit
                      <ChevronRight
                        style={{
                          width: "1.25rem",
                          height: "1.25rem",
                        }}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Button>
                  </div>
                </div>
              )}
            </form>
          ) : (
            <div
              style={{
                textAlign: "center",
                padding: "var(--spacing-xl) 0",
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(2rem)",
                transition: "all var(--transition-base) 0.3s",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "5rem",
                  height: "5rem",
                  borderRadius: "50%",
                  background: "var(--gradient-primary-subtle)",
                  marginBottom: "var(--spacing-md)",
                }}
                className="animate-scale-in"
              >
                <CheckCircle
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    color: "var(--primary)",
                  }}
                  className="animate-tick"
                />
              </div>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "var(--font-semibold)",
                  color: "var(--foreground)",
                  marginBottom: "var(--spacing-md)",
                }}
                className="gradient-text"
              >
                Thank You for Your Request!
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--muted-foreground)",
                  marginBottom: "var(--spacing-lg)",
                  maxWidth: "28rem",
                  marginLeft: "auto",
                  marginRight: "auto",
                  lineHeight: "var(--line-height-relaxed)",
                }}
              >
                We've received your quote request and will contact you within 24
                hours to discuss your project in detail.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--spacing-md)",
                  justifyContent: "center",
                }}
                className="sm:flex-row"
              >
                <Button
                  onClick={() => navigate("/")}
                  style={{
                    background: "var(--gradient-primary)",
                    color: "var(--primary-foreground)",
                    fontWeight: "var(--font-semibold)",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "var(--radius)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    transition: "all var(--transition-base)",
                  }}
                  className="hover:opacity-90 hover:shadow-lg focus-ring active:scale-95 group"
                >
                  Return to Home
                  <Home
                    style={{
                      width: "1rem",
                      height: "1rem",
                    }}
                    className="group-hover:scale-110 transition-transform"
                  />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate("/portfolio")}
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--foreground)",
                    fontWeight: "var(--font-semibold)",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "var(--radius)",
                    background: "transparent",
                    transition: "all var(--transition-base)",
                  }}
                  className="hover:bg-muted hover:shadow-lg focus-ring active:scale-95"
                >
                  View Our Portfolio
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Support Info */}
        {step < 4 && (
          <div
            style={{
              background: "var(--muted)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--spacing-lg)",
              boxShadow: "var(--shadow-lg)",
              border: "1px solid var(--border)",
              marginTop: "var(--spacing-lg)",
              opacity: animate ? 1 : 0,
              transform: animate ? "translateY(0)" : "translateY(2rem)",
              transition: "all var(--transition-base) 0.4s",
            }}
            className="glass"
          >
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: "var(--font-semibold)",
                color: "var(--foreground)",
                marginBottom: "var(--spacing-md)",
              }}
            >
              Need immediate assistance?
            </h3>
            <div
              style={{
                display: "grid",
                gap: "var(--spacing-md)",
                gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))",
              }}
              className="sm:grid-cols-2"
            >
              <ContactInfo
                icon={
                  <Phone
                    style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      color: "var(--primary)",
                    }}
                    className="group-hover:scale-110 transition-transform"
                  />
                }
                label="Call us at"
                value="015 55637890"
              />
              <ContactInfo
                icon={
                  <Mail
                    style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      color: "var(--primary)",
                    }}
                    className="group-hover:scale-110 transition-transform"
                  />
                }
                label="Email us at"
                value="brilliantdesign56@gmail.com"
              />
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .hover-lift {
          transition: transform var(--transition-base),
            box-shadow var(--transition-base);
        }
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }
      `}</style>
    </div>
  );
}

const ContactInfo = ({ icon, label, value }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "var(--spacing-sm)",
      background: "var(--card)",
      padding: "var(--spacing-md)",
      borderRadius: "var(--radius)",
      boxShadow: "var(--shadow-md)",
      transition: "all var(--transition-base)",
      position: "relative",
      overflow: "hidden",
    }}
    className="group hover-lift hover:shadow-xl focus-ring active:scale-95"
  >
    <span
      style={{
        position: "absolute",
        inset: 0,
        background: "var(--gradient-primary-subtle)",
        opacity: 0,
        transition: "opacity var(--transition-base)",
        borderRadius: "var(--radius)",
      }}
      className="group-hover:opacity-100"
    />
    <div
      style={{
        padding: "var(--spacing-sm)",
        background: "var(--gradient-primary-subtle)",
        borderRadius: "50%",
        position: "relative",
        zIndex: 10,
      }}
    >
      {icon}
    </div>
    <div style={{ position: "relative", zIndex: 10 }}>
      <p
        style={{
          fontSize: "0.875rem",
          color: "var(--muted-foreground)",
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontSize: "1rem",
          fontWeight: "var(--font-medium)",
          color: "var(--foreground)",
        }}
      >
        {value}
      </p>
    </div>
  </div>
);
