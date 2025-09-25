import React, { useState, useEffect, useRef } from "react";
import {useNavigate} from 'react-router-dom';
import {
  ChevronRight,
  ExternalLink,
  ZoomIn,
  MapPin,
  Calendar,
  X,
} from "lucide-react";
import { Button } from "../../../components/ui/button";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();
  const projectRefs = useRef([]);

  const projects = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      category: "residential",
      image: "/api/placeholder/600/400",
      location: "Beverly Hills, CA",
      date: "2023",
      description:
        "A stunning contemporary villa with panoramic views, featuring sustainable materials and smart home technology.",
      features: ["Smart Home", "Sustainable", "360° Views", "Pool"],
    },
    {
      id: 2,
      title: "Corporate Headquarters",
      category: "commercial",
      image: "/api/placeholder/600/400",
      location: "New York, NY",
      date: "2023",
      description:
        "A state-of-the-art office building designed for collaboration and innovation with biophilic design elements.",
      features: [
        "Biophilic Design",
        "Collaborative Spaces",
        "LEED Certified",
        "Rooftop Garden",
      ],
    },
    {
      id: 3,
      title: "Historic Building Restoration",
      category: "renovation",
      image: "/api/placeholder/600/400",
      location: "Boston, MA",
      date: "2022",
      description:
        "Careful restoration of a 19th-century landmark building preserving historical elements while adding modern comforts.",
      features: [
        "Historical Preservation",
        "Modern Amenities",
        "Period Details",
        "Adaptive Reuse",
      ],
    },
    {
      id: 4,
      title: "Coastal Retreat",
      category: "residential",
      image: "/api/placeholder/600/400",
      location: "Malibu, CA",
      date: "2022",
      description:
        "A beachfront property designed to maximize ocean views while providing privacy and luxury amenities.",
      features: [
        "Oceanfront",
        "Infinity Pool",
        "Open Layout",
        "Natural Materials",
      ],
    },
    {
      id: 5,
      title: "Shopping Mall Expansion",
      category: "commercial",
      image: "/api/placeholder/600/400",
      location: "Chicago, IL",
      date: "2022",
      description:
        "Expansion and modernization of a regional shopping center with new retail spaces and dining options.",
      features: [
        "Retail Spaces",
        "Food Court",
        "Parking Structure",
        "Landscaping",
      ],
    },
    {
      id: 6,
      title: "Urban Loft Conversion",
      category: "renovation",
      image: "/api/placeholder/600/400",
      location: "San Francisco, CA",
      date: "2021",
      description:
        "Transformation of an industrial warehouse into modern loft apartments with exposed elements and high ceilings.",
      features: [
        "Industrial Design",
        "Open Concept",
        "Exposed Elements",
        "High Ceilings",
      ],
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "residential", name: "Residential" },
    { id: "commercial", name: "Commercial" },
    { id: "renovation", name: "Renovation" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("translate-y-10");
            entry.target.style.animationDelay = `${index * 100}ms`;
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [filteredProjects]);

  const addToRefs = (el) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 bg-[var(--background)] dark:bg-gray-900 transition-colors duration-500 theme-transition"
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
              backgroundColor: "var(--primary)",
              opacity: "var(--badge-opacity, 0.1)",
              padding: "var(--spacing-xs) var(--spacing-md)",
              borderRadius: "var(--radius)",
              marginBottom: "var(--spacing-md)",
            }}
            className="animate-fade-in glass dark:backdrop-blur-md"
          >
            Our Portfolio
          </span>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "var(--font-bold)",
              marginBottom: "var(--spacing-md)",
              lineHeight: "var(--line-height-tight)",
              color: "var(--foreground)",
            }}
            className="sm:text-[1.75rem] md:text-[2rem] dark:text-gray-200"
          >
            Featured{" "}
            <span
              style={{
                background:
                  "var(--gradient-primary, linear-gradient(145deg, var(--primary), var(--accent)))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
              className="dark:bg-gradient-to-r dark:from-teal-300 dark:to-cyan-400"
            >
              Projects
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
            className="animate-fade-in md:text-[1.125rem] dark:text-gray-300"
          >
            Explore our diverse portfolio of successful projects that showcase
            our expertise, attention to detail, and commitment to excellence in
            every construction endeavor.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          style={{
            marginBottom: "var(--spacing-xl)",
          }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4"
        >
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              style={{
                padding: "var(--spacing-sm) var(--spacing-lg)",
                borderRadius: "var(--radius)",
                fontWeight: "var(--font-semibold)",
                transition: "all var(--transition-base)",
                position: "relative",
                overflow: "hidden",
                animation: "fade-in 0.8s ease-out forwards",
                animationDelay: `${index * 100}ms`,
                cursor: "pointer",
              }}
              className={`${
                activeFilter === category.id
                  ? "bg-[var(--gradient-primary)] text-[var(--primary-foreground)] shadow-lg"
                  : "bg-[var(--background)] text-[var(--foreground)] border border-[var(--border)] hover:scale-105 hover:brightness-110 glass dark:backdrop-blur-md dark:bg-gray-800/30 dark:border-gray-600"
              } !hover:opacity-100 text-sm sm:text-base !cursor-pointer`}
              aria-label={`Filter by ${category.name}`}
            >
              {category.name}
              {activeFilter === category.id && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "radial-gradient(circle at center, var(--accent) 0%, transparent 70%)",
                    opacity: 0.2,
                    transition: "opacity var(--transition-base)",
                    pointerEvents: "none",
                  }}
                  className="dark:bg-gradient-to-r dark:from-teal-300 dark:to-cyan-400"
                />
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={addToRefs}
              style={{
                transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
                transition: "all var(--transition-base), transform 0.5s ease",
                background: "var(--background)",
                borderRadius: "var(--radius)",
                border: "1px solid var(--border)",
                cursor: "pointer",
              }}
              className="group relative overflow-hidden opacity-0 translate-y-10 hover:scale-105 hover:brightness-110 !hover:opacity-100 hover:rotate-x-2 hover:rotate-y-2 glass dark:backdrop-blur-md dark:bg-gray-800/30 dark:border-gray-600 !cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "16rem",
                    objectFit: "cover",
                    transition: "transform var(--transition-base)",
                    pointerEvents: "none",
                  }}
                  className="group-hover:scale-110 dark:brightness-90 dark:contrast-110"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, var(--muted) 0%, transparent 50%)",
                    opacity: 0,
                    transition: "opacity var(--transition-base)",
                    pointerEvents: "none",
                  }}
                  className="group-hover:opacity-80"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "var(--spacing-sm)",
                    right: "var(--spacing-sm)",
                    background: "var(--gradient-primary)",
                    color: "var(--primary-foreground)",
                    fontSize: "0.75rem",
                    fontWeight: "var(--font-medium)",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "var(--radius)",
                    pointerEvents: "none",
                  }}
                  className="glass dark:backdrop-blur-md capitalize"
                >
                  {project.category}
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "var(--spacing-md)",
                    left: "var(--spacing-md)",
                    right: "var(--spacing-md)",
                    opacity: 0,
                    transform: "translateY(1rem)",
                    transition: "all var(--transition-base)",
                    pointerEvents: "none",
                  }}
                  className="group-hover:opacity-100 group-hover:translate-y-0 flex flex-wrap gap-1.5"
                >
                  {project.features.slice(0, 3).map((feature, idx) => (
                    <span
                      key={idx}
                      style={{
                        background: "var(--muted)",
                        color: "var(--foreground)",
                        fontSize: "0.75rem",
                        fontWeight: "var(--font-medium)",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "var(--radius)",
                        border: "1px solid var(--border)",
                        pointerEvents: "none",
                      }}
                      className="glass dark:backdrop-blur-md dark:bg-gray-800/30 dark:border-gray-600 animate-slide-in"
                    >
                      {feature}
                    </span>
                  ))}
                  {project.features.length > 3 && (
                    <span
                      style={{
                        background: "var(--muted)",
                        color: "var(--foreground)",
                        fontSize: "0.75rem",
                        fontWeight: "var(--font-medium)",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "var(--radius)",
                        border: "1px solid var(--border)",
                        pointerEvents: "none",
                      }}
                      className="glass dark:backdrop-blur-md dark:bg-gray-800/30 dark:border-gray-600 animate-slide-in"
                    >
                      +{project.features.length - 3}
                    </span>
                  )}
                </div>
              </div>
              <div style={{ padding: "var(--spacing-lg)" }}>
                <div
                  style={{ marginBottom: "var(--spacing-md)" }}
                  className="flex items-center justify-between"
                >
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "var(--font-semibold)",
                      background: "var(--gradient-primary)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                      pointerEvents: "none",
                    }}
                    className="dark:bg-gradient-to-r dark:from-teal-300 dark:to-cyan-400"
                  >
                    {project.title}
                  </h3>
                  <button
                    onClick={() => openModal(project)}
                    style={{
                      color: "var(--primary)",
                      transition: "all var(--transition-base)",
                      cursor: "pointer",
                    }}
                    className="hover:scale-125 hover:brightness-110 !hover:opacity-100 !cursor-pointer"
                    aria-label={`View details for ${project.title}`}
                  >
                    <ZoomIn style={{ width: "1.25rem", height: "1.25rem" }} />
                  </button>
                </div>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--muted-foreground)",
                    lineHeight: "var(--line-height-relaxed)",
                    marginBottom: "var(--spacing-md)",
                    pointerEvents: "none",
                  }}
                  className="line-clamp-3 dark:text-gray-300"
                >
                  {project.description}
                </p>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--muted-foreground)",
                    pointerEvents: "none",
                  }}
                  className="flex items-center justify-between dark:text-gray-300"
                >
                  <div className="flex items-center">
                    <MapPin
                      style={{
                        width: "1rem",
                        height: "1rem",
                        marginRight: "0.5rem",
                      }}
                    />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar
                      style={{
                        width: "1rem",
                        height: "1rem",
                        marginRight: "0.5rem",
                      }}
                    />
                    <span>{project.date}</span>
                  </div>
                </div>
              </div>
              <div style={{ padding: "0 var(--spacing-lg) var(--spacing-lg)" }}>
                <Button
                  style={{
                    background: "var(--gradient-primary)",
                    color: "var(--primary-foreground)",
                    fontWeight: "var(--font-semibold)",
                    padding: "var(--spacing-sm) var(--spacing-lg)",
                    borderRadius: "var(--radius)",
                    minHeight: "44px",
                    transition: "all var(--transition-base)",
                    boxShadow: "var(--shadow-lg)",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                  className="w-full hover:scale-105 hover:brightness-110 focus-ring !hover:opacity-100 group glass dark:backdrop-blur-md dark:bg-gray-800/30 !cursor-pointer"
                  onClick={() => navigate(`/portfolio/${project.id}`)}
                  aria-label="View project details"
                >
                  <span
                    style={{
                      zIndex: 10,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    View Project Details
                    <ExternalLink style={{ width: "1rem", height: "1rem" }} />
                  </span>
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "radial-gradient(circle at center, var(--accent) 0%, transparent 70%)",
                      opacity: 0,
                      transition: "opacity var(--transition-base)",
                      pointerEvents: "none",
                    }}
                    className="group-hover:opacity-20 dark:bg-gradient-to-r dark:from-teal-300 dark:to-cyan-400"
                  />
                </Button>
              </div>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "var(--radius)",
                  border: "2px solid transparent",
                  background: "var(--gradient-primary) border-box",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "destination-out",
                  maskComposite: "exclude",
                  opacity: 0,
                  transition: "opacity var(--transition-base)",
                  pointerEvents: "none",
                }}
                className="group-hover:opacity-100 dark:bg-gradient-to-r dark:from-teal-300 dark:to-cyan-400"
              />
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "var(--modal-backdrop, rgba(0, 0, 0, 0.7))",
              backdropFilter: "blur(4px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 50,
              padding: "var(--spacing-md)",
            }}
            className="animate-fade-in"
            onClick={closeModal}
          >
            <div
              style={{
                background: "var(--background)",
                borderRadius: "var(--radius)",
                maxWidth: "48rem",
                width: "100%",
                maxHeight: "90vh",
                overflowY: "auto",
                position: "relative",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-lg)",
                cursor: "default",
              }}
              className="glass dark:backdrop-blur-md dark:bg-gray-800/30 dark:border-gray-600 animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                style={{
                  position: "absolute",
                  top: "var(--spacing-md)",
                  right: "var(--spacing-md)",
                  color: "var(--muted-foreground)",
                  transition: "all var(--transition-base)",
                  cursor: "pointer",
                }}
                className="hover:scale-110 hover:brightness-110 !hover:opacity-100 !cursor-pointer"
                aria-label="Close project details modal"
              >
                <X style={{ width: "1.5rem", height: "1.5rem" }} />
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                style={{
                  width: "100%",
                  height: "20rem",
                  objectFit: "cover",
                  borderTopLeftRadius: "var(--radius)",
                  borderTopRightRadius: "var(--radius)",
                  pointerEvents: "none",
                }}
                className="dark:brightness-90 dark:contrast-110"
              />
              <div style={{ padding: "var(--spacing-lg)" }}>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "var(--font-bold)",
                    background: "var(--gradient-primary)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    marginBottom: "var(--spacing-md)",
                    pointerEvents: "none",
                  }}
                  className="dark:bg-gradient-to-r dark:from-teal-300 dark:to-cyan-400"
                >
                  {selectedProject.title}
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "var(--muted-foreground)",
                    lineHeight: "var(--line-height-relaxed)",
                    marginBottom: "var(--spacing-lg)",
                    pointerEvents: "none",
                  }}
                  className="dark:text-gray-300"
                >
                  {selectedProject.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginBottom: "var(--spacing-lg)",
                  }}
                >
                  {selectedProject.features.map((feature, idx) => (
                    <span
                      key={idx}
                      style={{
                        background: "var(--muted)",
                        color: "var(--foreground)",
                        fontSize: "0.875rem",
                        fontWeight: "var(--font-medium)",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "var(--radius)",
                        border: "1px solid var(--border)",
                        pointerEvents: "none",
                      }}
                      className="glass dark:backdrop-blur-md dark:bg-gray-800/30 dark:border-gray-600"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--muted-foreground)",
                    pointerEvents: "none",
                  }}
                  className="flex items-center justify-between dark:text-gray-300"
                >
                  <div className="flex items-center">
                    <MapPin
                      style={{
                        width: "1rem",
                        height: "1rem",
                        marginRight: "0.5rem",
                      }}
                    />
                    <span>{selectedProject.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar
                      style={{
                        width: "1rem",
                        height: "1rem",
                        marginRight: "0.5rem",
                      }}
                    />
                    <span>{selectedProject.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div
          style={{
            marginTop: "var(--spacing-xl)",
            textAlign: "center",
          }}
        >
          <Button
            style={{
              border: "2px solid var(--primary)",
              color: "var(--primary)",
              marginBottom: "var(--spacing-lg)",
              fontWeight: "var(--font-semibold)",
              padding: "0.875rem 2.25rem",
              borderRadius: "var(--radius)",
              minHeight: "48px",
              backgroundColor: "transparent",
              transition: "all var(--transition-base)",
              position: "relative",
              overflow: "hidden",
            }}
            className="hover:scale-105 hover:brightness-110 focus-ring !hover:opacity-100 group glass dark:backdrop-blur-md dark:bg-gray-800/30 animate-pulse-slow !cursor-pointer"
            onClick={() => navigate('/portfolio')}
            aria-label="View all projects"
          >
            <span
              style={{
                zIndex: 10,
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              View All Projects
              <ChevronRight
                style={{
                  width: "1.25rem",
                  height: "1.25rem",
                  transition: "transform var(--transition-base)",
                }}
                className="group-hover:translate-x-1"
              />
            </span>
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at center, var(--accent) 0%, transparent 70%)",
                opacity: 0,
                transition: "opacity var(--transition-base)",
                pointerEvents: "none",
              }}
              className="group-hover:opacity-20 dark:bg-gradient-to-r dark:from-teal-300 dark:to-cyan-400"
            />
          </Button>
        </div>
      </div>
    </section>
  );
}
