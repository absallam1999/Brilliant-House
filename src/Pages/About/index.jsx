import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Users,
  Award,
  Target,
  HeartHandshake,
  Clock,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  Play,
  Sparkles,
  Quote,
  Star,
  Lightbulb,
  TrendingUp,
  Rocket,
  MapPin,
  Phone,
  Mail,
  Palette,
  Ruler,
  Home,
  Eye,
} from "lucide-react";
import { Button } from "./../../components/ui/button";
import HeroImage from "./../../assets/about-hero.jpg";

export default function AboutPage() {
  const [animate, setAnimate] = useState(false);
  const [expandedValues, setExpandedValues] = useState([]);
  const [isVisible, setIsVisible] = useState({});
  const [countedStats, setCountedStats] = useState({});

  const navigate = useNavigate();

  const sectionRefs = {
    stats: useRef(null),
    mission: useRef(null),
    values: useRef(null),
    timeline: useRef(null),
    testimonials: useRef(null),
  };

  const timelineRefs = useRef([]);

  useEffect(() => {
    setAnimate(true);

    const observers = {};

    Object.keys(sectionRefs).forEach((key) => {
      if (!sectionRefs[key].current) return;
      observers[key] = new IntersectionObserver(
        ([entry]) => {
          setIsVisible((prev) => ({
            ...prev,
            [key]: entry.isIntersecting,
          }));
        },
        { threshold: 0.2 }
      );
      observers[key].observe(sectionRefs[key].current);
    });

    timelineRefs.current.forEach((el, index) => {
      if (!el) return;
      const refKey = `timelineItem-${index}`;
      observers[refKey] = new IntersectionObserver(
        ([entry]) => {
          setIsVisible((prev) => ({
            ...prev,
            [refKey]: entry.isIntersecting,
          }));
        },
        { threshold: 0.2 }
      );
      observers[refKey].observe(el);
    });

    return () => {
      Object.values(observers).forEach((observer) => {
        if (observer) observer.disconnect();
      });
    };
  }, []);

  const stats = [
    {
      icon: Palette,
      number: 250,
      label: "Design Projects",
      delay: 100,
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Clock,
      number: 15,
      label: "Years Experience",
      delay: 200,
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      number: 40,
      label: "Design Experts",
      delay: 300,
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Award,
      number: 99,
      label: "Client Satisfaction",
      delay: 400,
      color: "from-purple-500 to-pink-500",
    },
  ];

  const values = [
    {
      icon: HeartHandshake,
      title: "Creativity",
      description:
        "We bring innovative and unique design solutions to every project, tailored to your vision.",
      fullDescription:
        "Our creative approach combines artistic vision with practical functionality. We stay ahead of design trends while respecting timeless principles, ensuring your space is both beautiful and livable. Every project is an opportunity to create something extraordinary.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Target,
      title: "Precision",
      description:
        "Attention to detail in every aspect of design, from concept to final execution.",
      fullDescription:
        "We believe that great design is in the details. From precise measurements to perfect color matching, we ensure every element works in harmony. Our meticulous approach guarantees that the final result matches the vision exactly.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Working closely with clients to transform their ideas into beautiful, functional spaces.",
      fullDescription:
        "Your vision is our inspiration. We listen carefully to your needs, preferences, and lifestyle to create spaces that truly reflect you. Through constant communication and feedback, we ensure the final design exceeds your expectations.",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Eye,
      title: "Aesthetics",
      description:
        "Creating visually stunning spaces that balance beauty, function, and comfort.",
      fullDescription:
        "We believe that beautiful spaces enhance quality of life. Our designs combine color, texture, light, and form to create environments that are not only visually appealing but also emotionally uplifting and perfectly suited to their purpose.",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const timeline = [
    {
      year: "2016",
      title: "Foundation",
      description:
        "Established Brilliant House Design with a vision for transformative interior spaces",
      icon: Home,
      color: "from-blue-500 to-cyan-500",
    },
    {
      year: "2018",
      title: "Expansion",
      description:
        "Opened second location in Damanhur and expanded our service offerings",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
    },
    {
      year: "2020",
      title: "Innovation",
      description:
        "Integrated virtual reality technology for immersive design presentations",
      icon: Lightbulb,
      color: "from-amber-500 to-orange-500",
    },
    {
      year: "2022",
      title: "Recognition",
      description: "Awarded 'Best Interior Design Studio' in Alexandria region",
      icon: Award,
      color: "from-purple-500 to-pink-500",
    },
    {
      year: "2024",
      title: "Future",
      description:
        "Expanding into smart home integration and sustainable design solutions",
      icon: Rocket,
      color: "from-red-500 to-pink-500",
    },
  ];

  const testimonials = [
    {
      quote:
        "They completely transformed our apartment into a dream home. Their attention to detail and creative solutions were beyond our expectations.",
      author: "Nadia Hassan",
      role: "Homeowner",
      project: "Apartment Renovation",
      rating: 5,
      color: "from-blue-500 to-cyan-500",
    },
    {
      quote:
        "The team at Brilliant House Design understood our brand perfectly and created a office space that impresses our clients and inspires our team.",
      author: "Omar Khalil",
      role: "Business Owner",
      project: "Office Design",
      rating: 5,
      color: "from-green-500 to-emerald-500",
    },
    {
      quote:
        "From concept to completion, they made the process smooth and enjoyable. The result is a beautiful, functional space we love coming home to.",
      author: "Layla Mahmoud",
      role: "Interior Design Client",
      project: "Villa Interior",
      rating: 5,
      color: "from-purple-500 to-pink-500",
    },
  ];

  const toggleValue = (index) => {
    setExpandedValues((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        style={{
          width: "1rem",
          height: "1rem",
          color: i < rating ? "var(--warning)" : "var(--muted)",
          fill: i < rating ? "var(--warning)" : "none",
          pointerEvents: "none",
        }}
      />
    ));
  };

  const AnimatedCounter = ({
    value,
    label,
    delay,
    suffix = "",
    icon: Icon,
    color,
  }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let start = 0;
            const end = value;
            const duration = 2000;
            const incrementTime = 20;
            const steps = duration / incrementTime;
            const increment = end / steps;

            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(Math.ceil(start));
              }
            }, incrementTime);
          }
        },
        { threshold: 0.2 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [value, hasAnimated]);

    return (
      <div
        ref={ref}
        style={{
          textAlign: "center",
          padding: "var(--spacing-lg)",
          background: "var(--card)",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-md)",
          transition: "all var(--transition-base) 0.2s",
          opacity: hasAnimated ? 1 : 0,
          transform: hasAnimated ? "translateY(0)" : "translateY(2rem)",
          border: "1px solid var(--border)",
          position: "relative",
          overflow: "hidden",
        }}
        className="hover-lift hover:shadow-xl focus-ring animate-pulse group"
      >
        <span
          style={{
            position: "absolute",
            inset: 0,
            background: `var(--gradient-${color})`,
            opacity: 0,
            transition: "opacity var(--transition-base)",
            borderRadius: "var(--radius-lg)",
          }}
          className="group-hover:opacity-10"
        />
        <div
          style={{
            width: "4rem",
            height: "4rem",
            background: `var(--gradient-${color})`,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto var(--spacing-md)",
          }}
          className="animate-pulse"
        >
          <Icon
            style={{
              width: "2rem",
              height: "2rem",
              color: "var(--primary)",
            }}
          />
        </div>
        <div
          style={{
            fontSize: "1.875rem",
            fontWeight: "var(--font-bold)",
            color: "var(--foreground)",
            marginBottom: "var(--spacing-sm)",
          }}
        >
          {count}
          {suffix}
        </div>
        <div
          style={{
            fontSize: "0.875rem",
            fontWeight: "var(--font-medium)",
            color: "var(--muted-foreground)",
          }}
        >
          {label}
        </div>
      </div>
    );
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
      className="theme-transition"
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

      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          padding: "var(--spacing-3xl) var(--spacing-md)",
          backgroundImage: "url(" + HeroImage + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "var(--gradient-primary-dark)",
            opacity: 0.8,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "var(--black)",
            opacity: 0.2,
            mixBlendMode: "overlay",
          }}
        />
        <div
          style={{
            maxWidth: "64rem",
            margin: "0 auto",
            position: "relative",
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "var(--spacing-lg)",
              alignItems: "center",
              opacity: animate ? 1 : 0,
              transform: animate ? "translateY(0)" : "translateY(2rem)",
              transition: "all var(--transition-base)",
            }}
            className="lg:grid-cols-2"
          >
            <div>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  fontSize: "0.875rem",
                  fontWeight: "var(--font-semibold)",
                  color: "var(--primary-foreground)",
                  background: "var(--gradient-primary)",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "var(--radius)",
                  marginBottom: "var(--spacing-md)",
                }}
                className="animate-scale-in"
              >
                <Sparkles
                  style={{
                    width: "1rem",
                    height: "1rem",
                    marginRight: "0.25rem",
                  }}
                />
                About Our Studio
              </span>
              <h1
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "var(--font-bold)",
                  color: "var(--primary-foreground)",
                  marginBottom: "var(--spacing-md)",
                  lineHeight: "var(--line-height-tight)",
                }}
                className="sm:text-4xl lg:text-5xl"
              >
                Transforming Spaces,{" "}
                <span
                  style={{
                    background: "var(--gradient-primary)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Enriching Lives
                </span>
              </h1>
              <p
                style={{
                  fontSize: "1.25rem",
                  color: "var(--primary-foreground)",
                  opacity: 0.9,
                  marginBottom: "var(--spacing-lg)",
                  lineHeight: "var(--line-height-relaxed)",
                }}
              >
                For over 8 years, Brilliant House Design has been creating
                inspiring interiors that blend beauty with functionality. Our
                passion for design excellence has made us a leading interior
                design studio in Alexandria.
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "var(--spacing-md)",
                }}
              >
                <Button
                  style={{
                    background: "var(--gradient-primary)",
                    color: "var(--primary-foreground)",
                    fontWeight: "var(--font-semibold)",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "var(--radius)",
                    boxShadow: "var(--shadow-lg)",
                    transition: "all var(--transition-base)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  className="hover:opacity-90 hover:shadow-xl focus-ring active:scale-95 group"
                  onClick = {() => navigate("/portfolio")}
                >
                  <span
                    style={{
                      zIndex: 10,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    View Portfolio
                    <ArrowRight
                      style={{
                        width: "1.25rem",
                        height: "1.25rem",
                      }}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "radial-gradient(circle at center, var(--accent) 0%, transparent 70%)",
                      opacity: 0,
                      transition: "opacity var(--transition-base)",
                    }}
                    className="group-hover:opacity-20"
                  />
                </Button>
                <Button
                  variant="outline"
                  style={{
                    background: "transparent",
                    border: "2px solid var(--primary-foreground)",
                    color: "var(--primary-foreground)",
                    fontWeight: "var(--font-semibold)",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "var(--radius)",
                    boxShadow: "var(--shadow-lg)",
                    transition: "all var(--transition-base)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  className="hover:bg-primary hover:text-primary-foreground hover:shadow-xl focus-ring active:scale-95 group"
                >
                  <span
                    style={{
                      zIndex: 10,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Play
                      style={{
                        width: "1.25rem",
                        height: "1.25rem",
                      }}
                      className="group-hover:scale-110 transition-transform"
                    />
                    Watch Story
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "radial-gradient(circle at center, var(--accent) 0%, transparent 70%)",
                      opacity: 0,
                      transition: "opacity var(--transition-base)",
                    }}
                    className="group-hover:opacity-20"
                  />
                </Button>
              </div>
            </div>
            <div
              style={{
                background: "var(--glass-light)",
                borderRadius: "var(--radius-lg)",
                padding: "var(--spacing-lg)",
                boxShadow: "var(--shadow-lg)",
                border: "1px solid var(--border)",
                transition: "all var(--transition-base)",
                position: "relative",
                overflow: "hidden",
                transform: "rotate(1deg)",
              }}
              className="hover-lift hover:shadow-xl hover:rotate-0 group"
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
                className="group-hover:opacity-10"
              />
              <div style={{ position: "relative", zIndex: 10 }}>
                <Palette
                  style={{
                    width: "4rem",
                    height: "4rem",
                    color: "var(--primary)",
                    marginBottom: "var(--spacing-md)",
                  }}
                  className="animate-pulse"
                />
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "var(--font-bold)",
                    color: "var(--foreground)",
                    marginBottom: "var(--spacing-md)",
                  }}
                >
                  Why Choose Us?
                </h3>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--spacing-sm)",
                  }}
                >
                  {[
                    "Creative Design Solutions",
                    "Attention to Detail",
                    "Personalized Approach",
                    "Quality Materials",
                    "Timely Project Completion",
                  ].map((item, index) => (
                    <li
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        opacity: 0.9,
                        transition: "opacity var(--transition-base)",
                        transform: animate
                          ? "translateX(0)"
                          : "translateX(1rem)",
                        transitionDelay: `${index * 100}ms`,
                      }}
                      className="group-hover:opacity-100"
                    >
                      <CheckCircle
                        style={{
                          width: "1.25rem",
                          height: "1.25rem",
                          marginRight: "0.75rem",
                          color: "var(--primary)",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{ fontSize: "1rem", color: "var(--foreground)" }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        style={{
          padding: "var(--spacing-3xl) var(--spacing-md)",
          background: "var(--background)",
        }}
        ref={sectionRefs.stats}
      >
        <div
          style={{
            maxWidth: "64rem",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))",
              gap: "var(--spacing-md)",
            }}
            className="md:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <AnimatedCounter
                key={index}
                value={stat.number}
                label={stat.label}
                delay={stat.delay}
                suffix={index === 3 ? "%" : "+"}
                icon={stat.icon}
                color={stat.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section
        style={{
          padding: "var(--spacing-3xl) var(--spacing-md)",
          background: "var(--muted)",
        }}
      >
        <div
          style={{
            maxWidth: "64rem",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "var(--font-bold)",
              color: "var(--foreground)",
              textAlign: "center",
              marginBottom: "var(--spacing-xl)",
              opacity: animate ? 1 : 0,
              transform: animate ? "translateY(0)" : "translateY(2rem)",
              transition: "all var(--transition-base)",
            }}
          >
            Get In Touch
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))",
              gap: "var(--spacing-lg)",
              maxWidth: "48rem",
              margin: "0 auto",
            }}
            className="md:grid-cols-3"
          >
            {[
              {
                icon: MapPin,
                title: "Our Locations",
                content: ["Alexandria, Egypt", "Damanhour, Egypt"],
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Phone,
                title: "Call Us",
                content: ["015 55637890"],
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Mail,
                title: "Email Us",
                content: ["brilliantdesign56@gmail.com"],
                color: "from-purple-500 to-pink-500",
              },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  style={{
                    background: "var(--card)",
                    padding: "var(--spacing-lg)",
                    borderRadius: "var(--radius-lg)",
                    boxShadow: "var(--shadow-md)",
                    textAlign: "center",
                    transition: "all var(--transition-base)",
                    position: "relative",
                    overflow: "hidden",
                    opacity: animate ? 1 : 0,
                    transform: animate ? "translateY(0)" : "translateY(2rem)",
                    transitionDelay: `${index * 100}ms`,
                  }}
                  className="hover-lift hover:shadow-xl focus-ring group"
                >
                  <span
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `var(--gradient-${item.color})`,
                      opacity: 0,
                      transition: "opacity var(--transition-base)",
                      borderRadius: "var(--radius-lg)",
                    }}
                    className="group-hover:opacity-10"
                  />
                  <div
                    style={{
                      width: "3.5rem",
                      height: "3.5rem",
                      background: `var(--gradient-${item.color})`,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto var(--spacing-md)",
                    }}
                    className="animate-pulse"
                  >
                    <IconComponent
                      style={{
                        width: "1.75rem",
                        height: "1.75rem",
                        color: "var(--primary)",
                      }}
                    />
                  </div>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "var(--font-semibold)",
                      color: "var(--foreground)",
                      marginBottom: "var(--spacing-sm)",
                    }}
                  >
                    {item.title}
                  </h3>
                  {item.content.map((line, idx) => (
                    <p
                      key={idx}
                      style={{
                        fontSize: "1rem",
                        color: "var(--muted-foreground)",
                        lineHeight: "var(--line-height-relaxed)",
                      }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        style={{
          padding: "var(--spacing-3xl) var(--spacing-md)",
          background: "var(--background)",
          position: "relative",
        }}
        ref={sectionRefs.mission}
      >
        <div
          style={{
            maxWidth: "64rem",
            margin: "0 auto",
            position: "relative",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "var(--spacing-xl)",
            }}
          >
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "var(--font-bold)",
                color: "var(--foreground)",
                marginBottom: "var(--spacing-md)",
                lineHeight: "var(--line-height-tight)",
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(2rem)",
                transition: "all var(--transition-base)",
              }}
            >
              Our{" "}
              <span
                style={{
                  background: "var(--gradient-primary)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Philosophy
              </span>
            </h2>
            <p
              style={{
                fontSize: "1.25rem",
                color: "var(--muted-foreground)",
                maxWidth: "48rem",
                margin: "0 auto",
                lineHeight: "var(--line-height-relaxed)",
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(1rem)",
                transition: "all var(--transition-base) 0.1s",
              }}
            >
              Creating spaces that inspire, comfort, and reflect your unique
              personality
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
              gap: "var(--spacing-lg)",
              maxWidth: "48rem",
              margin: "0 auto",
            }}
            className="md:grid-cols-2"
          >
            {[
              {
                icon: Target,
                title: "Our Mission",
                description:
                  "To transform living and working spaces into beautiful, functional environments that enhance our clients' quality of life. We combine creative vision with practical solutions to deliver interior designs that inspire and endure.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Award,
                title: "Our Vision",
                description:
                  "To be the leading interior design studio in Egypt, recognized for innovative design solutions, exceptional craftsmanship, and creating spaces that positively impact how people live, work, and interact with their environment.",
                color: "from-green-500 to-emerald-500",
              },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  style={{
                    background: "var(--card)",
                    borderRadius: "var(--radius-lg)",
                    padding: "var(--spacing-lg)",
                    boxShadow: "var(--shadow-lg)",
                    border: "1px solid var(--border)",
                    transition: "all var(--transition-base)",
                    position: "relative",
                    overflow: "hidden",
                    opacity: isVisible.mission ? 1 : 0,
                    transform: isVisible.mission
                      ? "translateY(0)"
                      : "translateY(2rem)",
                    transitionDelay: `${(index + 2) * 100}ms`,
                  }}
                  className="hover-lift hover:shadow-xl focus-ring group"
                >
                  <span
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `var(--gradient-${item.color})`,
                      opacity: 0,
                      transition: "opacity var(--transition-base)",
                      borderRadius: "var(--radius-lg)",
                    }}
                    className="group-hover:opacity-10"
                  />
                  <div
                    style={{
                      width: "4rem",
                      height: "4rem",
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
                        width: "2rem",
                        height: "2rem",
                        color: "var(--primary)",
                      }}
                    />
                  </div>
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "var(--font-bold)",
                      color: "var(--foreground)",
                      marginBottom: "var(--spacing-sm)",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "var(--muted-foreground)",
                      lineHeight: "var(--line-height-relaxed)",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        style={{
          padding: "var(--spacing-3xl) var(--spacing-md)",
          background: "var(--background)",
          position: "relative",
        }}
        ref={sectionRefs.values}
      >
        <div
          style={{
            maxWidth: "64rem",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "var(--spacing-xl)",
            }}
          >
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "var(--font-bold)",
                color: "var(--foreground)",
                marginBottom: "var(--spacing-md)",
                lineHeight: "var(--line-height-tight)",
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(2rem)",
                transition: "all var(--transition-base)",
              }}
            >
              Our{" "}
              <span
                style={{
                  background: "var(--gradient-primary)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Design Values
              </span>
            </h2>
            <p
              style={{
                fontSize: "1.25rem",
                color: "var(--muted-foreground)",
                maxWidth: "48rem",
                margin: "0 auto",
                lineHeight: "var(--line-height-relaxed)",
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(1rem)",
                transition: "all var(--transition-base) 0.1s",
              }}
            >
              The principles that guide our creative process and client
              relationships
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
              gap: "var(--spacing-md)",
              maxWidth: "64rem",
              margin: "0 auto",
            }}
            className="md:grid-cols-2"
          >
            {values.map((value, index) => {
              const IconComponent = value.icon;
              const isExpanded = expandedValues.includes(index);
              const isOdd = index % 2 === 0;
              return (
                <div
                  key={index}
                  style={{
                    background: "var(--card)",
                    borderRadius: "var(--radius-lg)",
                    padding: "var(--spacing-lg)",
                    boxShadow: "var(--shadow-md)",
                    border: "1px solid var(--border)",
                    transition: "all var(--transition-base)",
                    position: "relative",
                    overflow: "hidden",
                    opacity: isVisible.values ? 1 : 0,
                    transform: isVisible.values
                      ? "translateY(0)"
                      : `translate${isOdd ? "X(-2rem)" : "X(2rem)"}`,
                    transitionDelay: `${index * 100}ms`,
                  }}
                  className="hover-lift hover:shadow-xl focus-ring group"
                  onClick={() => toggleValue(index)}
                >
                  <span
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `var(--gradient-${value.color})`,
                      opacity: 0,
                      transition: "opacity var(--transition-base)",
                      borderRadius: "var(--radius-lg)",
                    }}
                    className="group-hover:opacity-10"
                  />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "var(--spacing-md)",
                      position: "relative",
                      zIndex: 10,
                    }}
                  >
                    <div
                      style={{
                        width: "3rem",
                        height: "3rem",
                        background: `var(--gradient-${value.color})`,
                        borderRadius: "var(--radius)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
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
                    <div style={{ flex: 1 }}>
                      <h3
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: "var(--font-bold)",
                          color: "var(--foreground)",
                          marginBottom: "var(--spacing-sm)",
                        }}
                      >
                        {value.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "1rem",
                          color: "var(--muted-foreground)",
                          lineHeight: "var(--line-height-relaxed)",
                          transition: "all var(--transition-base)",
                        }}
                      >
                        {isExpanded ? value.fullDescription : value.description}
                      </p>
                      <button
                        style={{
                          marginTop: "var(--spacing-sm)",
                          fontSize: "0.875rem",
                          fontWeight: "var(--font-semibold)",
                          color: "var(--primary)",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.25rem",
                          transition: "all var(--transition-base)",
                        }}
                        className="group-hover:text-primary-dark"
                      >
                        {isExpanded ? "Read less" : "Read more"}
                        <ChevronDown
                          style={{
                            width: "1rem",
                            height: "1rem",
                            transition: "transform var(--transition-base)",
                            transform: isExpanded
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                          }}
                          className="group-hover:translate-y-0.5"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        style={{
          padding: "var(--spacing-3xl) var(--spacing-md)",
          background: "var(--muted)",
          position: "relative",
        }}
        ref={sectionRefs.timeline}
      >
        <div
          style={{
            maxWidth: "64rem",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "var(--spacing-xl)",
            }}
          >
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "var(--font-bold)",
                color: "var(--foreground)",
                marginBottom: "var(--spacing-md)",
                lineHeight: "var(--line-height-tight)",
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(2rem)",
                transition: "all var(--transition-base)",
              }}
            >
              Our{" "}
              <span
                style={{
                  background: "var(--gradient-primary)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Journey
              </span>
            </h2>
            <p
              style={{
                fontSize: "1.25rem",
                color: "var(--muted-foreground)",
                maxWidth: "48rem",
                margin: "0 auto",
                lineHeight: "var(--line-height-relaxed)",
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(1rem)",
                transition: "all var(--transition-base) 0.1s",
              }}
            >
              From a small design studio to a leading interior design company in
              Alexandria
            </p>
          </div>
          <div
            style={{
              position: "relative",
              maxWidth: "48rem",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                width: "0.25rem",
                background: "var(--primary)",
                height: "100%",
              }}
            />
            {timeline.map((item, index) => {
              const IconComponent = item.icon;
              const refKey = `timelineItem-${index}`;
              return (
                <div
                  key={index}
                  ref={(el) => (timelineRefs.current[index] = el)}
                  style={{
                    position: "relative",
                    marginBottom: "var(--spacing-xl)",
                    display: "flex",
                    flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                    alignItems: "center",
                    opacity: isVisible[refKey] ? 1 : 0,
                    transform: isVisible[refKey]
                      ? "translateY(0)"
                      : "translateY(2rem)",
                    transition: "all var(--transition-base) 0.2s",
                  }}
                  className="md:flex-row"
                >
                  <div style={{ width: "50%" }} />
                  <div
                    style={{
                      position: "absolute",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "2rem",
                      height: "2rem",
                      background: `var(--gradient-${item.color})`,
                      borderRadius: "50%",
                      border: "4px solid var(--background)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "var(--shadow-lg)",
                      zIndex: 10,
                    }}
                    className="animate-pulse"
                  >
                    <IconComponent
                      style={{
                        width: "1.75rem",
                        height: "1.75rem",
                        color: "var(--primary)",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      width: "41.67%",
                      background: "var(--card)",
                      borderRadius: "var(--radius-lg)",
                      padding: "var(--spacing-md)",
                      boxShadow: "var(--shadow-md)",
                      border: "1px solid var(--border)",
                      transition: "all var(--transition-base)",
                      position: "relative",
                      overflow: "hidden",
                      marginTop: "var(--spacing-lg)",
                    }}
                    className="hover-lift hover:shadow-xl group"
                  >
                    <span
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: `var(--gradient-${item.color})`,
                        opacity: 0,
                        transition: "opacity var(--transition-base)",
                        borderRadius: "var(--radius-lg)",
                      }}
                      className="group-hover:opacity-10"
                    />
                    <div
                      style={{
                        fontSize: "1.125rem",
                        fontWeight: "var(--font-bold)",
                        color: "var(--foreground)",
                        marginBottom: "var(--spacing-sm)",
                        background: `var(--gradient-${item.color})`,
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      {item.year}
                    </div>
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "var(--font-bold)",
                        color: "var(--foreground)",
                        marginBottom: "var(--spacing-sm)",
                        transition: "all var(--transition-base)",
                      }}
                      className="group-hover:text-primary"
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "1rem",
                        color: "var(--muted-foreground)",
                        lineHeight: "var(--line-height-relaxed)",
                      }}
                    >
                      {item.description}
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
          padding: "var(--spacing-3xl) var(--spacing-md)",
          background: "var(--background)",
        }}
        ref={sectionRefs.testimonials}
      >
        <div
          style={{
            maxWidth: "64rem",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "var(--spacing-xl)",
            }}
          >
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "var(--font-bold)",
                color: "var(--foreground)",
                marginBottom: "var(--spacing-md)",
                lineHeight: "var(--line-height-tight)",
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(2rem)",
                transition: "all var(--transition-base)",
              }}
            >
              Client{" "}
              <span
                style={{
                  background: "var(--gradient-primary)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Testimonials
              </span>
            </h2>
            <p
              style={{
                fontSize: "1.25rem",
                color: "var(--muted-foreground)",
                maxWidth: "48rem",
                margin: "0 auto",
                lineHeight: "var(--line-height-relaxed)",
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(1rem)",
                transition: "all var(--transition-base) 0.1s",
              }}
            >
              Hear what our clients have to say about working with us
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
              gap: "var(--spacing-lg)",
              maxWidth: "72rem",
              margin: "0 auto",
            }}
            className="md:grid-cols-3"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                style={{
                  background: "var(--card)",
                  borderRadius: "var(--radius-lg)",
                  padding: "var(--spacing-lg)",
                  boxShadow: "var(--shadow-md)",
                  border: "1px solid var(--border)",
                  transition: "all var(--transition-base)",
                  position: "relative",
                  overflow: "hidden",
                  opacity: animate ? 1 : 0,
                  transform: animate ? "translateY(0)" : "translateY(2rem)",
                  transitionDelay: `${index * 100}ms`,
                }}
                className="hover-lift hover:shadow-xl focus-ring group"
              >
                <span
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `var(--gradient-${testimonial.color})`,
                    opacity: 0,
                    transition: "opacity var(--transition-base)",
                    borderRadius: "var(--radius-lg)",
                  }}
                  className="group-hover:opacity-10"
                />
                <div
                  style={{
                    marginBottom: "var(--spacing-md)",
                    background: `var(--gradient-${testimonial.color})`,
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                  className="animate-scale-in"
                >
                  <Quote style={{ width: "2rem", height: "2rem" }} />
                </div>
                <div
                  style={{ display: "flex", marginBottom: "var(--spacing-sm)" }}
                >
                  {renderStars(testimonial.rating)}
                </div>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "var(--muted-foreground)",
                    marginBottom: "var(--spacing-md)",
                    fontStyle: "italic",
                    lineHeight: "var(--line-height-relaxed)",
                  }}
                >
                  "{testimonial.quote}"
                </p>
                <div
                  style={{
                    opacity: animate ? 1 : 0,
                    transform: animate ? "translateY(0)" : "translateY(1rem)",
                    transition: "all var(--transition-base) 0.1s",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: "var(--font-bold)",
                      color: "var(--foreground)",
                    }}
                  >
                    {testimonial.author}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--muted-foreground)",
                      lineHeight: "var(--line-height-relaxed)",
                    }}
                  >
                    {testimonial.role}
                  </p>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: "var(--font-medium)",
                      background: `var(--gradient-${testimonial.color})`,
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                      marginTop: "var(--spacing-xs)",
                    }}
                  >
                    {testimonial.project}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          padding: "var(--spacing-3xl) var(--spacing-md)",
          background: "var(--gradient-primary)",
          color: "var(--primary-foreground)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "var(--gradient-primary-dark)",
            opacity: 0.9,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "24rem",
            height: "24rem",
            background: "var(--primary-foreground)",
            opacity: 0.05,
            borderRadius: "50%",
            transform: "translate(50%, -50%)",
            filter: "blur(4rem)",
          }}
        />
        <div
          style={{
            maxWidth: "64rem",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            zIndex: 10,
          }}
        >
          <h2
            style={{
              color: "#fff",
              fontSize: "2rem",
              fontWeight: "var(--font-bold)",
              marginBottom: "var(--spacing-md)",
              lineHeight: "var(--line-height-tight)",
              opacity: animate ? 1 : 0,
              transform: animate ? "translateY(0)" : "translateY(2rem)",
              transition: "all var(--transition-base)",
            }}
          >
            Ready to Transform Your Space?
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              marginBottom: "var(--spacing-lg)",
              maxWidth: "32rem",
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: "var(--line-height-relaxed)",
              opacity: 0.9,
              opacity: animate ? 1 : 0,
              transform: animate ? "translateY(0)" : "translateY(1rem)",
              transition: "all var(--transition-base) 0.1s",
            }}
          >
            Let's create something beautiful together. Schedule a consultation
            with our design team today.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "var(--spacing-md)",
            }}
            className="sm:flex-row"
          >
            <Button
              style={{
                background: "#fff",
                color: "var(--primary)",
                fontWeight: "var(--font-semibold)",
                padding: "0.75rem 1.5rem",
                borderRadius: "var(--radius)",
                boxShadow: "var(--shadow-lg)",
                transition: "all var(--transition-base)",
                position: "relative",
                overflow: "hidden",
              }}
              className="hover:bg-primary hover:text-primary-foreground hover:shadow-xl focus-ring active:scale-95 group"
              onClick = {() => navigate("/quote")}
            >
              <span
                style={{
                  zIndex: 10,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                Book Consultation
                <ArrowRight
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                  }}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at center, var(--accent) 0%, transparent 70%)",
                  opacity: 0,
                  transition: "opacity var(--transition-base)",
                }}
                className="group-hover:opacity-20"
              />
            </Button>
            <Button
              variant="outline"
              style={{
                background: "transparent",
                border: "2px solid var(--primary-foreground)",
                color: "var(--primary-foreground)",
                fontWeight: "var(--font-semibold)",
                padding: "0.75rem 1.5rem",
                borderRadius: "var(--radius)",
                boxShadow: "var(--shadow-lg)",
                transition: "all var(--transition-base)",
                position: "relative",
                overflow: "hidden",
              }}
              className="hover:bg-primary hover:text-primary-foreground hover:shadow-xl focus-ring active:scale-95 group"
              onClick = {() => navigate("/portfolio")}
            >
              <span
                style={{
                  zIndex: 10,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                View Portfolio
                <ArrowRight
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                  }}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at center, var(--accent) 0%, transparent 70%)",
                  opacity: 0,
                  transition: "opacity var(--transition-base)",
                }}
                className="group-hover:opacity-20"
              />
            </Button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hover-lift {
          transition: transform var(--transition-base),
            box-shadow var(--transition-base);
        }
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
        }
      `}</style>
    </div>
  );
}
