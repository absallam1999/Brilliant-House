import React, { useState, useEffect, useRef } from "react";
import { 
  Filter, 
  ArrowRight, 
  ArrowLeft, 
  ExternalLink,
  ZoomIn,
  HardHat,
  Building,
  Home,
  Factory,
  Award,
  ChevronDown,
  Sparkles,
  MapPin,
  Calendar,
  Users
} from "lucide-react";
import { Button } from "./../../components/ui/button";
import { motion } from "framer-motion";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [animate, setAnimate] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRefs = {
    filters: useRef(null),
    projects: useRef(null),
    stats: useRef(null)
  };

  useEffect(() => {
    setAnimate(true);
    
    const observers = {};
    Object.keys(sectionRefs).forEach(key => {
      observers[key] = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [key]: true }));
          }
        },
        { threshold: 0.2 }
      );
      
      if (sectionRefs[key].current) {
        observers[key].observe(sectionRefs[key].current);
      }
    });
    
    return () => {
      Object.keys(observers).forEach(key => {
        if (observers[key]) observers[key].disconnect();
      });
    };
  }, []);

  const filters = [
    { id: "all", label: "All Projects", icon: HardHat },
    { id: "residential", label: "Residential", icon: Home },
    { id: "commercial", label: "Commercial", icon: Building },
    { id: "industrial", label: "Industrial", icon: Factory },
    { id: "award", label: "Award Winning", icon: Award }
  ];

  const projects = [
    {
      id: 1,
      title: "Skyline Tower Complex",
      category: "commercial",
      type: "Office Building",
      location: "Downtown Dubai",
      year: "2023",
      duration: "18 months",
      client: "Emaar Properties",
      teamSize: "45 specialists",
      budget: "$45M",
      awards: ["Best Commercial Design 2023"],
      description: "A state-of-the-art commercial complex featuring sustainable design and smart building technologies.",
      fullDescription: "The Skyline Tower Complex represents the future of commercial real estate with its innovative design and sustainable features. This 45-story tower includes office spaces, retail areas, and recreational facilities. We implemented advanced seismic resistance technology and energy-efficient systems that reduce carbon footprint by 40% compared to traditional buildings.",
      image: "/api/placeholder/600/400",
      images: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600"
      ],
      features: ["LEED Platinum Certified", "Smart Building Technology", "Energy Efficient Design", "Seismic Resistant Structure"]
    },
    {
      id: 2,
      title: "Luxury Beachfront Villas",
      category: "residential",
      type: "Luxury Residential",
      location: "Palm Jumeirah",
      year: "2022",
      duration: "14 months",
      client: "Private Investors",
      teamSize: "32 specialists",
      budget: "$28M",
      awards: ["Luxury Design Excellence Award"],
      description: "Exclusive beachfront properties with custom architectural designs and premium finishes.",
      fullDescription: "These luxury beachfront villas offer unparalleled views of the Arabian Gulf with bespoke architectural designs. Each villa features private pools, smart home automation, and premium finishes throughout. The project required innovative foundation solutions due to the unique geography of Palm Jumeirah.",
      image: "/api/placeholder/600/400",
      images: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600"
      ],
      features: ["Beachfront Location", "Smart Home Automation", "Private Pools", "Custom Architectural Design"]
    },
    {
      id: 3,
      title: "Advanced Manufacturing Facility",
      category: "industrial",
      type: "Industrial Complex",
      location: "Dubai Industrial Park",
      year: "2023",
      duration: "22 months",
      client: "TechManufacture Inc.",
      teamSize: "60 specialists",
      budget: "$65M",
      awards: ["Innovative Industrial Design 2023"],
      description: "A cutting-edge manufacturing plant with automated systems and sustainable operations.",
      fullDescription: "This advanced manufacturing facility was designed for efficiency and sustainability. The complex includes production areas, research facilities, and employee amenities. We incorporated renewable energy sources and water recycling systems that make it one of the most sustainable industrial buildings in the region.",
      image: "/api/placeholder/600/400",
      images: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600"
      ],
      features: ["Automated Systems", "Sustainable Operations", "Renewable Energy", "Water Recycling"]
    },
    {
      id: 4,
      title: "Heritage Museum Extension",
      category: "commercial",
      type: "Cultural Building",
      location: "Al Fahidi Historical District",
      year: "2021",
      duration: "16 months",
      client: "Dubai Culture Authority",
      teamSize: "28 specialists",
      budget: "$22M",
      awards: ["Cultural Preservation Award", "Best Restoration Project"],
      description: "A modern extension that complements traditional architecture while providing state-of-the-art facilities.",
      fullDescription: "The Heritage Museum Extension project required careful blending of modern architectural elements with traditional Emirati design. The new wing adds exhibition spaces, educational facilities, and conservation labs while maintaining the historical character of the area. Special attention was paid to using materials and techniques that honor the original structure.",
      image: "/api/placeholder/600/400",
      images: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600"
      ],
      features: ["Traditional Architecture", "Modern Facilities", "Cultural Preservation", "Historical Integration"]
    },
    {
      id: 5,
      title: "Green Oaks Residential Community",
      category: "residential",
      type: "Residential Community",
      location: "Dubai Hills",
      year: "2022",
      duration: "24 months",
      client: "Dubai Properties",
      teamSize: "50 specialists",
      budget: "$78M",
      awards: ["Sustainable Community Development"],
      description: "A sustainable residential community with green spaces, renewable energy, and community facilities.",
      fullDescription: "Green Oaks is a model for sustainable community development, featuring energy-efficient homes, extensive green spaces, and community facilities. The project includes solar panel installations, rainwater harvesting systems, and electric vehicle charging stations throughout the community.",
      image: "/api/placeholder/600/400",
      images: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600"
      ],
      features: ["Sustainable Design", "Community Facilities", "Renewable Energy", "Green Spaces"]
    },
    {
      id: 6,
      title: "Marina Bay Commercial Plaza",
      category: "commercial",
      type: "Mixed-Use Development",
      location: "Dubai Marina",
      year: "2023",
      duration: "20 months",
      client: "Nakheel Properties",
      teamSize: "55 specialists",
      budget: "$52M",
      awards: ["Best Mixed-Use Development"],
      description: "A modern mixed-use development featuring retail, dining, and office spaces with marina views.",
      fullDescription: "Marina Bay Commercial Plaza offers a perfect blend of retail, dining, and office spaces with stunning views of Dubai Marina. The development features innovative architectural elements, including a wave-inspired facade and floating gardens. The complex is designed to maximize natural light and energy efficiency.",
      image: "/api/placeholder/600/400",
      images: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600"
      ],
      features: ["Mixed-Use Development", "Marina Views", "Innovative Architecture", "Energy Efficient"]
    }
  ];

  const stats = [
    { value: "250+", label: "Projects Completed", delay: 100 },
    { value: "98%", label: "Client Satisfaction", delay: 200 },
    { value: "15+", label: "Years Experience", delay: 300 },
    { value: "45", label: "Awards Won", delay: 400 }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter || (activeFilter === "award" && project.awards.length > 0));

  const openProjectModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "var(--gradient-muted)",
      color: "var(--foreground)",
      transition: "all var(--transition-base)",
    }}>
      <div style={{
        maxWidth: "64rem",
        margin: "0 auto",
        padding: "var(--spacing-xl) var(--spacing-md)"
      }}>
        {/* Hero Section */}
        <section style={{
          padding: "var(--spacing-3xl) 0",
          textAlign: "center"
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: animate ? 1 : 0, y: animate ? 0 : 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem 1rem",
              background: "var(--primary-100)",
              color: "var(--primary-600)",
              borderRadius: "var(--radius-full)",
              fontSize: "0.875rem",
              fontWeight: "var(--font-medium)",
              marginBottom: "1rem"
            }}>
              <Sparkles style={{ width: "1rem", height: "1rem" }} />
              Our Portfolio
            </span>
            <h1 style={{
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: "var(--font-bold)",
              marginBottom: "1rem",
              background: "var(--gradient-primary)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}>
              Building <span style={{ color: "var(--primary)" }}>Excellence</span>
            </h1>
            <p style={{
              fontSize: "1.25rem",
              color: "var(--muted-foreground)",
              maxWidth: "40rem",
              margin: "0 auto",
              lineHeight: "var(--line-height-relaxed)"
            }}>
              Explore our diverse portfolio of construction projects that showcase our commitment to quality, innovation, and client satisfaction.
            </p>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section ref={sectionRefs.stats} style={{ marginBottom: "var(--spacing-3xl)" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))",
            gap: "1rem"
          }}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible.stats ? 1 : 0, y: isVisible.stats ? 0 : 20 }}
                transition={{ duration: 0.5, delay: stat.delay / 1000 }}
                style={{
                  background: "var(--background)",
                  borderRadius: "var(--radius-xl)",
                  padding: "1.5rem",
                  textAlign: "center",
                  boxShadow: "var(--shadow-lg)",
                  border: "1px solid var(--border)",
                  transition: "all var(--transition-base)"
                }}
                className="hover:shadow-xl hover:-translate-y-1"
              >
                <div style={{
                  fontSize: "1.5rem",
                  fontWeight: "var(--font-bold)",
                  color: "var(--primary)",
                  marginBottom: "0.5rem"
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: "0.875rem",
                  color: "var(--muted-foreground)"
                }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Filters Section */}
        <section ref={sectionRefs.filters} style={{
          padding: "var(--spacing-lg) 0",
          background: "var(--background)",
          borderBottom: "1px solid var(--border)",
          position: "sticky",
          top: 0,
          zIndex: 10
        }}>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.5rem",
            padding: "0.5rem"
          }}>
            {filters.map((filter) => {
              const IconComponent = filter.icon;
              return (
                <Button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0.75rem 1.5rem",
                    background: activeFilter === filter.id ? "var(--primary)" : "var(--muted)",
                    color: activeFilter === filter.id ? "var(--primary-foreground)" : "var(--muted-foreground)",
                    borderRadius: "var(--radius)",
                    border: "1px solid var(--border)",
                    fontWeight: "var(--font-semibold)",
                    fontSize: "0.875rem",
                    transition: "all var(--transition-base)"
                  }}
                  className="hover:bg-primary hover:text-primary-foreground hover:shadow-md focus-ring"
                >
                  <IconComponent style={{ width: "1rem", height: "1rem", marginRight: "0.5rem" }} />
                  {filter.label}
                </Button>
              );
            })}
          </div>
        </section>

        {/* Projects Grid */}
        <section ref={sectionRefs.projects} style={{ padding: "var(--spacing-2xl) 0" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
            gap: "1.5rem",
            opacity: isVisible.projects ? 1 : 0,
            transition: "opacity 0.5s ease-out"
          }}>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible.projects ? 1 : 0, y: isVisible.projects ? 0 : 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  background: "var(--background)",
                  borderRadius: "var(--radius-2xl)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-lg)",
                  border: "1px solid var(--border)",
                  transition: "all var(--transition-base)"
                }}
                className="hover:shadow-xl hover:-translate-y-1 group"
              >
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "14rem",
                      objectFit: "cover",
                      transition: "transform var(--transition-base)"
                    }}
                    className="group-hover:scale-110"
                  />
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "var(--gradient-primary)",
                    opacity: 0,
                    transition: "opacity var(--transition-base)",
                    display: "flex",
                    alignItems: "flex-end"
                  }}
                  className="group-hover:opacity-20"
                  >
                    <div style={{
                      padding: "1rem",
                      color: "var(--primary-foreground)"
                    }}>
                      <span style={{
                        display: "inline-block",
                        padding: "0.5rem 1rem",
                        background: "var(--primary)",
                        borderRadius: "var(--radius)",
                        fontSize: "0.75rem",
                        marginBottom: "0.5rem"
                      }}>
                        {project.type}
                      </span>
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "0.875rem"
                      }}>
                        <MapPin style={{ width: "1rem", height: "1rem", marginRight: "0.5rem" }} />
                        {project.location}
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={() => openProjectModal(project)}
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      width: "2.5rem",
                      height: "2.5rem",
                      background: "var(--background)",
                      borderRadius: "var(--radius-full)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0,
                      transition: "opacity var(--transition-base)",
                      boxShadow: "var(--shadow-md)"
                    }}
                    className="group-hover:opacity-100 hover:bg-primary hover:text-primary-foreground"
                  >
                    <ZoomIn style={{ width: "1.25rem", height: "1.25rem" }} />
                  </Button>
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <h3 style={{
                    fontSize: "1.25rem",
                    fontWeight: "var(--font-bold)",
                    color: "var(--foreground)",
                    marginBottom: "0.5rem",
                    transition: "color var(--transition-base)"
                  }}
                  className="group-hover:text-primary"
                  >
                    {project.title}
                  </h3>
                  <p style={{
                    fontSize: "0.875rem",
                    color: "var(--muted-foreground)",
                    marginBottom: "1rem",
                    lineHeight: "var(--line-height-relaxed)",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  }}>
                    {project.description}
                  </p>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}>
                    <span style={{
                      fontSize: "0.875rem",
                      color: "var(--muted-foreground)"
                    }}>
                      {project.year}
                    </span>
                    <Button
                      onClick={() => openProjectModal(project)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "var(--primary)",
                        fontWeight: "var(--font-semibold)",
                        fontSize: "0.875rem",
                        background: "transparent",
                        border: "none"
                      }}
                      className="hover:text-primary-foreground hover:bg-primary hover:shadow-md focus-ring"
                    >
                      View Details
                      <ArrowRight style={{ width: "1rem", height: "1rem", marginLeft: "0.5rem" }} />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div style={{
              textAlign: "center",
              padding: "var(--spacing-3xl) 0"
            }}>
              <p style={{
                fontSize: "1rem",
                color: "var(--muted-foreground)",
                marginBottom: "1rem"
              }}>
                No projects found for this category
              </p>
              <Button
                onClick={() => setActiveFilter("all")}
                style={{
                  padding: "0.75rem 1.5rem",
                  backgroundColor: "var(--primary)",
                  color: "var(--primary-foreground)",
                  fontWeight: "var(--font-semibold)",
                  borderRadius: "var(--radius)",
                  minHeight: "44px",
                  transition: "all var(--transition-base)"
                }}
                className="hover:opacity-90 hover:shadow-lg focus-ring"
              >
                View All Projects
              </Button>
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section style={{
          padding: "var(--spacing-3xl) 0",
          borderRadius: "var(--radius-2xl)",
          background: "var(--gradient-primary)",
          color: "var(--primary-foreground)",
          position: "relative",
          overflow: "hidden"
        }}>
          <div style={{
            position: "absolute",
            inset: 0,
            background: "var(--gradient-primary)",
            opacity: 0.9
          }}></div>
          <div style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "24rem",
            height: "24rem",
            background: "var(--primary-100)",
            borderRadius: "50%",
            transform: "translate(50%, -50%)",
            filter: "blur(5rem)",
            opacity: 0.3
          }}></div>
          <div style={{
            textAlign: "center",
            position: "relative",
            zIndex: 10
          }}>
            <h2 style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              color: "#fff",
              fontWeight: "var(--font-bold)",
              marginBottom: "1rem"
            }}>
              Ready to Start Your Project?
            </h2>
            <p style={{
              fontSize: "1.125rem",
              marginBottom: "2rem",
              maxWidth: "32rem",
              marginLeft: "auto",
              marginRight: "auto",
              opacity: 0.9
            }}>
              Let's discuss how we can bring your vision to life with our expertise and craftsmanship.
            </p>
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1rem"
            }}>
              <Button
                style={{
                  padding: "0.75rem 2rem",
                  background: "#fff",
                  color: "var(--primary)",
                  fontWeight: "var(--font-semibold)",
                  borderRadius: "var(--radius)",
                  minHeight: "44px",
                  transition: "all var(--transition-base)",
                  boxShadow: "var(--shadow-md)"
                }}
                className="hover:bg-muted hover:shadow-lg focus-ring"
              >
                Get Free Consultation
              </Button>
              <Button
                variant="outline"
                style={{
                  padding: "0.75rem 2rem",
                  border: "2px solid var(--primary-foreground)",
                  color: "var(--primary-foreground)",
                  fontWeight: "var(--font-semibold)",
                  borderRadius: "var(--radius)",
                  minHeight: "44px",
                  transition: "all var(--transition-base)"
                }}
                className="hover:bg-primary-foreground hover:text-primary hover:shadow-lg focus-ring"
              >
                View Our Services
              </Button>
            </div>
          </div>
        </section>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div style={{
            position: "fixed",
            inset: 0,
            zIndex: 50,
            overflowY: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "var(--spacing-md)"
          }}>
            <div
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0, 0, 0, 0.7)",
                backdropFilter: "blur(5px)"
              }}
              onClick={closeProjectModal}
            ></div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              style={{
                maxWidth: "64rem",
                width: "100%",
                background: "var(--background)",
                borderRadius: "var(--radius-2xl)",
                overflow: "hidden",
                boxShadow: "var(--shadow-xl)",
                position: "relative"
              }}
            >
              <div style={{ position: "relative", height: "24rem" }}>
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
                <Button
                  onClick={closeProjectModal}
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    width: "2.5rem",
                    height: "2.5rem",
                    background: "var(--background)",
                    borderRadius: "var(--radius-full)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "var(--shadow-md)",
                    transition: "all var(--transition-base)"
                  }}
                  className="hover:bg-primary hover:text-primary-foreground"
                >
                  <ArrowLeft style={{ width: "1.25rem", height: "1.25rem" }} />
                </Button>
              </div>
              
              <div style={{ padding: "2rem" }}>
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginBottom: "1rem"
                }}>
                  <span style={{
                    padding: "0.5rem 1rem",
                    background: "var(--primary-100)",
                    color: "var(--primary-600)",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.875rem"
                  }}>
                    {selectedProject.type}
                  </span>
                  <span style={{
                    padding: "0.5rem 1rem",
                    background: "var(--muted)",
                    color: "var(--muted-foreground)",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.875rem"
                  }}>
                    {selectedProject.year}
                  </span>
                  {selectedProject.awards.map((award, index) => (
                    <span
                      key={index}
                      style={{
                        padding: "0.5rem 1rem",
                        background: "var(--primary-100)",
                        color: "var(--primary-600)",
                        borderRadius: "var(--radius-full)",
                        fontSize: "0.875rem"
                      }}
                    >
                      {award}
                    </span>
                  ))}
                </div>
                
                <h2 style={{
                  fontSize: "1.75rem",
                  fontWeight: "var(--font-bold)",
                  color: "var(--foreground)",
                  marginBottom: "1rem"
                }}>
                  {selectedProject.title}
                </h2>
                
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))",
                  gap: "1rem",
                  marginBottom: "1.5rem"
                }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <MapPin style={{ width: "1.25rem", height: "1.25rem", color: "var(--primary)", marginRight: "0.75rem" }} />
                    <div>
                      <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>Location</p>
                      <p style={{ color: "var(--foreground)" }}>{selectedProject.location}</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Calendar style={{ width: "1.25rem", height: "1.25rem", color: "var(--primary)", marginRight: "0.75rem" }} />
                    <div>
                      <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>Duration</p>
                      <p style={{ color: "var(--foreground)" }}>{selectedProject.duration}</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Users style={{ width: "1.25rem", height: "1.25rem", color: "var(--primary)", marginRight: "0.75rem" }} />
                    <div>
                      <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>Team Size</p>
                      <p style={{ color: "var(--foreground)" }}>{selectedProject.teamSize}</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Award style={{ width: "1.25rem", height: "1.25rem", color: "var(--primary)", marginRight: "0.75rem" }} />
                    <div>
                      <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>Budget</p>
                      <p style={{ color: "var(--foreground)" }}>{selectedProject.budget}</p>
                    </div>
                  </div>
                </div>
                
                <div style={{ marginBottom: "1.5rem" }}>
                  <h3 style={{
                    fontSize: "1.25rem",
                    fontWeight: "var(--font-semibold)",
                    color: "var(--foreground)",
                    marginBottom: "0.75rem"
                  }}>
                    Project Overview
                  </h3>
                  <p style={{
                    fontSize: "0.875rem",
                    color: "var(--muted-foreground)",
                    lineHeight: "var(--line-height-relaxed)"
                  }}>
                    {selectedProject.fullDescription}
                  </p>
                </div>
                
                <div style={{ marginBottom: "1.5rem" }}>
                  <h3 style={{
                    fontSize: "1.25rem",
                    fontWeight: "var(--font-semibold)",
                    color: "var(--foreground)",
                    marginBottom: "0.75rem"
                  }}>
                    Key Features
                  </h3>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))",
                    gap: "0.75rem"
                  }}>
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} style={{ display: "flex", alignItems: "center" }}>
                        <div style={{
                          width: "0.5rem",
                          height: "0.5rem",
                          background: "var(--primary)",
                          borderRadius: "50%",
                          marginRight: "0.75rem"
                        }}></div>
                        <span style={{ color: "var(--muted-foreground)" }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1rem"
                }}>
                  <Button
                    style={{
                      padding: "0.75rem 1.5rem",
                      backgroundColor: "var(--primary)",
                      color: "var(--primary-foreground)",
                      fontWeight: "var(--font-semibold)",
                      borderRadius: "var(--radius)",
                      minHeight: "44px",
                      transition: "all var(--transition-base)"
                    }}
                    className="hover:opacity-90 hover:shadow-lg focus-ring"
                  >
                    <ExternalLink style={{ width: "1rem", height: "1rem", marginRight: "0.5rem" }} />
                    View Case Study
                  </Button>
                  <Button
                    variant="outline"
                    style={{
                      padding: "0.75rem 1.5rem",
                      border: "2px solid var(--border)",
                      color: "var(--foreground)",
                      fontWeight: "var(--font-semibold)",
                      borderRadius: "var(--radius)",
                      minHeight: "44px",
                      transition: "all var(--transition-base)"
                    }}
                    className="hover:bg-muted hover:shadow-lg focus-ring"
                  >
                    Similar Projects
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}