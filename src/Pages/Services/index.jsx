import React, { useState, useEffect } from "react";
import {
  Building2,
  Home,
  Wrench,
  ClipboardCheck,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Shield,
  ChevronDown,
  Sparkles,
  Play,
  Quote,
  Star,
  Calendar,
  Users,
  Award,
  Clock,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  HeartHandshake,
  Target,
  Zap,
  Globe,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { useNavigate } from "react-router-dom";

export default function ServicesPage() {
  const [animate, setAnimate] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setAnimate(true);
  }, []);

  const services = [
    {
      id: "residential",
      icon: Home,
      title: "Residential Design",
      description:
        "Custom homes and residential projects built with precision and care",
      fullDescription:
        "We specialize in creating dream homes that reflect your unique lifestyle and preferences. From modern minimalist designs to traditional family homes, our team handles every aspect of residential construction with meticulous attention to detail.",
      features: [
        "Custom home design and build",
        "Home renovations and additions",
        "Kitchen and bathroom remodeling",
        "Outdoor living spaces",
        "Sustainable building practices",
        "Smart home integration",
      ],
      image:
        "https://www.kassavello.com/blog/wp-content/uploads/2020/07/a-modern-residential-project-designed-by-homes-one-interiors_4.jpg",
      stats: {
        projects: "80+",
        satisfaction: "99%",
        timeline: "6-12 months",
        team: "15 Experts",
      },
      highlights: [
        "3D Visualization",
        "Smart Home Ready",
        "Eco-Friendly",
        "Warranty Included",
      ],
      page: "/services/residential",
    },
    {
      id: "commercial",
      icon: Building2,
      title: "Commercial Design",
      description:
        "Professional spaces designed for productivity and brand excellence",
      fullDescription:
        "We build commercial spaces that inspire productivity and reflect your brand identity. Our expertise includes office buildings, retail spaces, restaurants, and mixed-use developments that stand the test of time.",
      features: [
        "Office buildings and complexes",
        "Retail and shopping centers",
        "Restaurants and hospitality",
        "Healthcare facilities",
        "Educational institutions",
        "Industrial buildings",
      ],
      image:
        "https://www.andacademy.com/resources/wp-content/uploads/2025/05/image2-1.jpg",
      stats: {
        projects: "50+",
        satisfaction: "98%",
        timeline: "12-24 months",
        team: "25 Experts",
      },
      highlights: [
        "Brand Integration",
        "Scalable Solutions",
        "Compliance Ready",
        "24/7 Support",
      ],
      page: "/services/commercial",
    },
    {
      id: "renovation",
      icon: Wrench,
      title: "Renovation Services",
      description:
        "Transform existing spaces with our expert renovation solutions",
      fullDescription:
        "Breathe new life into your property with our comprehensive renovation services. We combine innovative design with practical solutions to maximize your space's potential while maintaining structural integrity.",
      features: [
        "Structural renovations",
        "Interior redesign",
        "Historical restoration",
        "Space optimization",
        "Energy efficiency upgrades",
        "Modernization projects",
      ],
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: {
        projects: "100+",
        satisfaction: "97%",
        timeline: "3-9 months",
        team: "20 Experts",
      },
      highlights: [
        "Minimal Disruption",
        "Cost-Effective",
        "Quality Materials",
        "Fast Turnaround",
      ],
      page: "/services/renovation",
    },
    {
      id: "project-management",
      icon: ClipboardCheck,
      title: "Project Management",
      description:
        "End-to-end project oversight ensuring quality and timely delivery",
      fullDescription:
        "Our expert project management team ensures your construction project runs smoothly from conception to completion. We handle scheduling, budgeting, quality control, and coordination of all stakeholders.",
      features: [
        "Comprehensive planning",
        "Budget management",
        "Timeline coordination",
        "Quality assurance",
        "Stakeholder communication",
        "Risk management",
      ],
      image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: {
        projects: "20+",
        satisfaction: "100%",
        timeline: "Varies",
        team: "30 Experts",
      },
      highlights: [
        "Real-time Tracking",
        "Risk Mitigation",
        "Transparent Communication",
        "Quality Control",
      ],
      page: "/services/management",
    },
    {
      id: "design",
      icon: Lightbulb,
      title: "Design & Consultation",
      description:
        "Creative solutions and expert advice for your construction needs",
      fullDescription:
        "Our design team works closely with you to create innovative, functional, and beautiful spaces. We provide expert consultation to help you make informed decisions about your project.",
      features: [
        "Architectural design",
        "Interior design services",
        "3D modeling and visualization",
        "Material selection",
        "Sustainability consulting",
        "Cost estimation",
      ],
      image:
        "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: {
        projects: "50+",
        satisfaction: "98%",
        timeline: "1-3 months",
        team: "12 Experts",
      },
      highlights: [
        "3D Rendering",
        "Material Samples",
        "Cost Analysis",
        "Sustainable Options",
      ],
      page: "/services/renovation",
    },
    {
      id: "maintenance",
      icon: Shield,
      title: "Maintenance Services",
      description: "Ongoing care and maintenance to preserve your investment",
      fullDescription:
        "Protect your investment with our comprehensive maintenance services. We offer regular inspections, repairs, and upgrades to keep your property in optimal condition for years to come.",
      features: [
        "Preventive maintenance",
        "Emergency repairs",
        "System upgrades",
        "Facility management",
        "Warranty services",
        "24/7 support",
      ],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: {
        projects: "Ongoing",
        satisfaction: "96%",
        timeline: "As needed",
        team: "18 Experts",
      },
      highlights: [
        "24/7 Emergency",
        "Preventive Plans",
        "Warranty Coverage",
        "Expert Technicians",
      ],
      page: "/services/residential",
    },
  ];

  const process = [
    {
      step: "01",
      icon: HeartHandshake,
      title: "Consultation & Planning",
      description:
        "We discuss your vision, requirements, and budget to create a comprehensive project plan",
      color: "from-blue-500 to-cyan-500",
    },
    {
      step: "02",
      icon: Target,
      title: "Design & Development",
      description:
        "Our team creates detailed plans, 3D models, and precise project timelines",
    },
    {
      step: "03",
      icon: Zap,
      title: "Execution & Construction",
      description:
        "Skilled professionals bring your project to life with precision and care",
    },
    {
      step: "04",
      icon: Award,
      title: "Completion & Handover",
      description:
        "Final inspection and handover with ongoing support and maintenance",
    },
  ];

  const faqs = [
    {
      question: "How long does a typical construction project take?",
      answer:
        "Project timelines vary based on scope and complexity. Residential projects typically take 6-12 months, while commercial projects can take 12-24 months. We provide detailed timelines during the planning phase.",
    },
    {
      question: "Do you handle permits and regulations?",
      answer:
        "Yes, we manage all necessary permits, zoning requirements, and building regulations to ensure your project is fully compliant with local laws and standards.",
    },
    {
      question: "Can you work with my architect?",
      answer:
        "Absolutely! We frequently collaborate with architects and designers to bring their visions to life while ensuring structural integrity and practical implementation.",
    },
    {
      question: "What sets your construction services apart?",
      answer:
        "Our commitment to quality, attention to detail, use of premium materials, and dedicated project management ensure exceptional results that exceed client expectations.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Ibrahim",
      role: "Homeowner",
      content:
        "The team transformed our outdated home into a modern masterpiece. Their attention to detail and communication throughout the process was exceptional.",
      rating: 5,
    },
    {
      name: "Omar Hassan",
      role: "Business Owner",
      content:
        "Our commercial space was completed on time and within budget. The quality of work exceeded our expectations, and our customers love the new environment.",
      rating: 5,
    },
    {
      name: "Gourge Said",
      role: "Property Developer",
      content:
        "I've worked with many construction companies, but none match their professionalism and expertise. They handle complex projects with ease and precision.",
      rating: 5,
    },
  ];

  const stats = [
    { icon: Building2, value: "250+", label: "Projects Completed" },
    { icon: Users, value: "40+", label: "Expert Team Members" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Globe, value: "25+", label: "Cities Served" },
  ];

  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        style={{
          width: "1.25rem",
          height: "1.25rem",
          display: "inline-block",
          color: i < count ? "var(--warning)" : "var(--muted-foreground)",
          fill: i < count ? "var(--warning)" : "none",
          transition: "color var(--transition-base)",
        }}
      />
    ));
  };

  const handleServiceClick = (serviceIndex) => {
    setActiveService(serviceIndex);
    document.getElementById("service-details")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const navigateToService = (servicePage) => {
    navigate(servicePage);
  };

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
          <Building2
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
            <Sparkles
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
            Building <span style={{ color: "var(--primary)" }}>Dreams</span>{" "}
            Into Reality
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
            From visionary concepts to exceptional craftsmanship, we deliver
            construction solutions with innovation and precision.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            <Button
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
              onClick={() => navigateToService(services[activeService].page)}
              aria-label="Start your construction project"
            >
              <ArrowRight
                style={{
                  width: "1.25rem",
                  height: "1.25rem",
                  marginRight: "0.5rem",
                }}
              />
              Start Your Project
            </Button>
            <Button
              variant="outline"
              style={{
                border: "2px solid var(--border)",
                color: "var(--foreground)",
                fontWeight: "var(--font-semibold)",
                padding: "0.75rem 2rem",
                borderRadius: "var(--radius)",
                minHeight: "44px",
                minWidth: "44px",
                transition: "all var(--transition-base)",
              }}
              className="hover:bg-muted hover:shadow-lg focus-ring"
            >
              <Play
                style={{
                  width: "1.25rem",
                  height: "1.25rem",
                  marginRight: "0.5rem",
                }}
              />
              Watch Our Story
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
            Our Achievements
          </h2>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))",
              marginBottom: "2rem",
            }}
            className="sm:grid-cols-4"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
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
            Comprehensive{" "}
            <span style={{ color: "var(--primary)" }}>
              Construction Solutions
            </span>
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "var(--muted-foreground)",
              marginBottom: "2rem",
              maxWidth: "40rem",
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: "var(--line-height-relaxed)",
            }}
          >
            Discover our full spectrum of professional services designed to
            bring your vision to life with unmatched quality.
          </p>
          <Tabs value={services[activeService].id} className="space-y-4">
            <TabsList
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                justifyContent: "center",
                padding: "0.5rem",
                background: "var(--muted)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--border)",
                maxWidth: "100%",
                overflowX: "auto",
              }}
            >
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    style={{
                      position: "relative",
                      padding: "0.75rem 1.5rem",
                      background:
                        activeService === index
                          ? "var(--primary)"
                          : "var(--background)",
                      color:
                        activeService === index
                          ? "var(--primary-foreground)"
                          : "var(--muted-foreground)",
                      borderRadius: "var(--radius)",
                      transition: "all var(--transition-base)",
                      overflow: "hidden",
                      boxShadow:
                        activeService === index ? "var(--shadow-sm)" : "none",
                      border: "1px solid var(--border)",
                      flex: "1 1 auto",
                      minWidth: "10rem",
                      maxWidth: "12rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "var(--font-semibold)",
                      fontSize: "0.875rem",
                    }}
                    className="group hover:bg-primary hover:text-primary-foreground hover:shadow-md focus-ring"
                    onClick={() => handleServiceClick(index)}
                    onMouseEnter={() => setHoveredService(index)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <span
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "var(--gradient-primary)",
                        opacity:
                          hoveredService === index && activeService !== index
                            ? 0.2
                            : 0,
                        transition: "opacity var(--transition-base)",
                        borderRadius: "var(--radius)",
                      }}
                      className="group-hover:opacity-20"
                    />
                    <div
                      style={{
                        position: "relative",
                        zIndex: 10,
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <IconComponent
                        style={{
                          width: "1.25rem",
                          height: "1.25rem",
                          color:
                            activeService === index
                              ? "var(--primary-foreground)"
                              : "var(--muted-foreground)",
                          transition: "color var(--transition-base)",
                        }}
                        className="group-hover:text-primary-foreground"
                      />
                      <span
                        style={{
                          transition: "color var(--transition-base)",
                        }}
                      >
                        {service.title}
                      </span>
                    </div>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {services.map((service, index) => (
              <TabsContent
                key={service.id}
                value={service.id}
                id="service-details"
              >
                <div
                  style={{
                    display: "grid",
                    gap: "2rem",
                    gridTemplateColumns: "1fr 1fr",
                    alignItems: "center",
                    padding: "1rem",
                    background: "var(--muted)",
                    borderRadius: "var(--radius-lg)",
                    boxShadow: "var(--shadow-lg)",
                    border: "1px solid var(--border)",
                  }}
                  className="sm:grid-cols-2"
                >
                  <div style={{ padding: "1rem" }}>
                    <Badge
                      style={{
                        background: "var(--primary)",
                        color: "var(--primary-foreground)",
                        padding: "0.5rem 1rem",
                        borderRadius: "var(--radius)",
                        marginBottom: "1rem",
                      }}
                    >
                      Featured Service
                    </Badge>
                    <h3
                      style={{
                        fontSize: "2rem",
                        fontWeight: "var(--font-bold)",
                        color: "var(--foreground)",
                        marginBottom: "1rem",
                        lineHeight: "var(--line-height-tight)",
                      }}
                      className="sm:text-3xl"
                    >
                      {service.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "1rem",
                        color: "var(--muted-foreground)",
                        marginBottom: "1.5rem",
                        lineHeight: "var(--line-height-relaxed)",
                      }}
                    >
                      {service.fullDescription}
                    </p>
                    <div
                      style={{
                        display: "grid",
                        gap: "1rem",
                        gridTemplateColumns:
                          "repeat(auto-fit, minmax(12rem, 1fr))",
                        marginBottom: "1.5rem",
                      }}
                    >
                      <Card
                        style={{
                          background: "var(--background)",
                          borderRadius: "var(--radius)",
                          padding: "1rem",
                          boxShadow: "var(--shadow-md)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        <CardContent style={{ padding: 0 }}>
                          <Calendar
                            style={{
                              width: "2rem",
                              height: "2rem",
                              color: "var(--primary)",
                              marginBottom: "0.5rem",
                            }}
                          />
                          <div
                            style={{
                              fontSize: "1.5rem",
                              fontWeight: "var(--font-bold)",
                              color: "var(--foreground)",
                              marginBottom: "0.25rem",
                            }}
                          >
                            {service.stats.timeline}
                          </div>
                          <div
                            style={{
                              fontSize: "0.875rem",
                              color: "var(--muted-foreground)",
                            }}
                          >
                            Average Timeline
                          </div>
                        </CardContent>
                      </Card>
                      <Card
                        style={{
                          background: "var(--background)",
                          borderRadius: "var(--radius)",
                          padding: "1rem",
                          boxShadow: "var(--shadow-md)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        <CardContent style={{ padding: 0 }}>
                          <CheckCircle
                            style={{
                              width: "2rem",
                              height: "2rem",
                              color: "var(--primary)",
                              marginBottom: "0.5rem",
                            }}
                          />
                          <div
                            style={{
                              fontSize: "1.5rem",
                              fontWeight: "var(--font-bold)",
                              color: "var(--foreground)",
                              marginBottom: "0.25rem",
                            }}
                          >
                            {service.stats.satisfaction}
                          </div>
                          <div
                            style={{
                              fontSize: "0.875rem",
                              color: "var(--muted-foreground)",
                            }}
                          >
                            Success Rate
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <div style={{ marginBottom: "1.5rem" }}>
                      <h4
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: "var(--font-semibold)",
                          color: "var(--foreground)",
                          marginBottom: "0.5rem",
                        }}
                      >
                        Service Highlights
                      </h4>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.5rem",
                        }}
                      >
                        {service.highlights.map((highlight, idx) => (
                          <Badge
                            key={idx}
                            style={{
                              background: "var(--muted)",
                              border: "1px solid var(--border)",
                              padding: "0.5rem 1rem",
                              borderRadius: "var(--radius)",
                              color: "var(--foreground)",
                            }}
                          >
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div
                      style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}
                    >
                      <Button
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
                        onClick={() => navigateToService(service.page)}
                        aria-label={`Explore ${service.title}`}
                      >
                        <ArrowUpRight
                          style={{
                            width: "1.25rem",
                            height: "1.25rem",
                            marginRight: "0.5rem",
                          }}
                        />
                        Explore {service.title}
                      </Button>
                    </div>
                  </div>
                  <div style={{ position: "relative", overflow: "hidden" }}>
                    <img
                      src={service.image}
                      alt={service.title}
                      style={{
                        width: "100%",
                        height: "24rem",
                        objectFit: "cover",
                        borderRadius: "var(--radius-lg)",
                        transition: "filter var(--transition-base)",
                      }}
                      className="group-hover:brightness-90"
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "var(--gradient-primary)",
                        opacity: 0,
                        transition: "opacity var(--transition-base)",
                        borderRadius: "var(--radius-lg)",
                      }}
                      className="group-hover:opacity-20"
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: "1rem",
                        left: "1rem",
                        color: "var(--primary-foreground)",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: "var(--font-bold)",
                        }}
                      >
                        {service.stats.projects} Projects
                      </div>
                      <div style={{ fontSize: "1rem" }}>
                        {service.stats.team} Team
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
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
            How We{" "}
            <span style={{ color: "var(--primary)" }}>Deliver Excellence</span>
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "var(--muted-foreground)",
              marginBottom: "2rem",
              maxWidth: "40rem",
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: "var(--line-height-relaxed)",
            }}
          >
            A carefully crafted process that ensures your project's success from
            start to finish.
          </p>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))",
            }}
            className="sm:grid-cols-4"
          >
            {process.map((step, index) => {
              const IconComponent = step.icon;
              return (
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
              );
            })}
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
            What Our{" "}
            <span style={{ color: "var(--primary)" }}>Clients Say</span>
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "var(--muted-foreground)",
              marginBottom: "2rem",
              maxWidth: "40rem",
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: "var(--line-height-relaxed)",
            }}
          >
            Don't just take our word for it. Here's what our satisfied clients
            have to say.
          </p>
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
                  <Quote
                    style={{
                      width: "2rem",
                      height: "2rem",
                      color: "var(--primary)",
                      marginBottom: "0.5rem",
                      transition: "color var(--transition-base)",
                    }}
                    className="group-hover:text-primary-foreground"
                  />
                  <div style={{ marginBottom: "0.5rem" }}>
                    {renderStars(testimonial.rating)}
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
                    "{testimonial.content}"
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
                    {testimonial.name}
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

      {/* FAQ Section */}
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
            Frequently Asked{" "}
            <span style={{ color: "var(--primary)" }}>Questions</span>
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "var(--muted-foreground)",
              marginBottom: "2rem",
              maxWidth: "40rem",
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: "var(--line-height-relaxed)",
            }}
          >
            Get instant answers to common questions about our construction
            services.
          </p>
          <Accordion
            type="single"
            collapsible
            style={{ maxWidth: "40rem", margin: "0 auto" }}
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                style={{
                  background: "var(--background)",
                  borderRadius: "var(--radius)",
                  marginBottom: "1rem",
                  boxShadow: "var(--shadow-md)",
                  border: "1px solid var(--border)",
                  overflow: "hidden",
                }}
              >
                <AccordionTrigger
                  style={{
                    padding: "1rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "var(--background)",
                    transition:
                      "background var(--transition-base), color var(--transition-base)",
                    width: "100%",
                    textAlign: "left",
                    position: "relative",
                  }}
                  className="hover:bg-muted focus-ring"
                >
                  <span
                    style={{
                      fontSize: "1rem",
                      fontWeight: "var(--font-semibold)",
                      color: "var(--foreground)",
                      flex: "1",
                      paddingRight: "2rem",
                    }}
                  >
                    {faq.question}
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "1.5rem",
                      height: "1.5rem",
                      position: "absolute",
                      right: "1rem",
                    }}
                  >
                    <ChevronDown
                      style={{
                        width: "1.5rem",
                        height: "1.5rem",
                        color: "var(--primary)",
                        transition:
                          "transform var(--transition-base), color var(--transition-base)",
                      }}
                      className="group-data-[state=open]:rotate-180"
                    />
                  </span>
                </AccordionTrigger>
                <AccordionContent
                  style={{
                    padding: "1rem",
                    background: "var(--muted)",
                    borderTop: "1px solid var(--border)",
                    fontSize: "0.875rem",
                    color: "var(--muted-foreground)",
                    lineHeight: "var(--line-height-relaxed)",
                  }}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
            Let's Build Something{" "}
            <span style={{ color: "var(--primary)" }}>Amazing</span> Together
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
            Your vision deserves the best. Contact us today for a free
            consultation.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
              marginBottom: "1.5rem",
            }}
          >
            <Button
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
              onClick={() => navigateToService("/contact")}
              aria-label="Start your construction project"
            >
              <MapPin
                style={{
                  width: "1.25rem",
                  height: "1.25rem",
                  marginRight: "0.5rem",
                }}
              />
              Start Your Project
            </Button>
            <Button
              variant="outline"
              style={{
                border: "2px solid var(--border)",
                color: "var(--foreground)",
                fontWeight: "var(--font-semibold)",
                padding: "0.75rem 2rem",
                borderRadius: "var(--radius)",
                minHeight: "44px",
                minWidth: "44px",
                transition: "all var(--transition-base)",
              }}
              className="hover:bg-muted hover:shadow-lg focus-ring"
              onClick={() => navigateToService("/quote")}
            >
              <Mail
                style={{
                  width: "1.25rem",
                  height: "1.25rem",
                  marginRight: "0.5rem",
                }}
              />
              Get Free Quote
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            {[
              { icon: Clock, text: "24/7 Support" },
              { icon: Award, text: "Quality Guaranteed" },
              { icon: Shield, text: "Insured & Licensed" },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.875rem",
                    color: "var(--muted-foreground)",
                  }}
                >
                  <IconComponent
                    style={{ width: "1.25rem", height: "1.25rem" }}
                  />
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
