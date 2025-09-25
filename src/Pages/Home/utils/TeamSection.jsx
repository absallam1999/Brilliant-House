import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Linkedin,
  Twitter,
  Mail,
  ChevronRight,
  Award,
  Briefcase,
  Calendar,
  Star,
} from "lucide-react";
import { Button } from "../../../components/ui/button";

export default function TeamSection() {
  const navigate = useNavigate();
  const teamMembers = [
    {
      image: "/api/placeholder/96/96",
      name: "Mohamed Hassan",
      role: "Chief Executive Officer",
      experience: "15+ years",
      projects: "120+ projects",
      description:
        "Visionary leader with extensive experience in construction management and business development.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "john@iconstruction.com",
      },
    },
    {
      image: "/api/placeholder/96/96",
      name: "Ahmed Ali",
      role: "Lead Architect",
      experience: "12+ years",
      projects: "85+ projects",
      description:
        "Creative architect specializing in sustainable design and innovative construction solutions.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@iconstruction.com",
      },
    },
    {
      image: "/api/placeholder/96/96",
      name: "Omar Tark",
      role: "Senior Project Manager",
      experience: "10+ years",
      projects: "95+ projects",
      description:
        "Detail-oriented project manager ensuring timely delivery and quality execution of all projects.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mike@iconstruction.com",
      },
    },
    {
      image: "/api/placeholder/96/96",
      name: "Yousef Rezek",
      role: "Head of Engineering",
      experience: "14+ years",
      projects: "110+ projects",
      description:
        "Structural engineering expert with a passion for innovative building techniques and safety.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@iconstruction.com",
      },
    },
  ];

  const stats = [
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Briefcase, number: "250+", label: "Projects Completed" },
    { icon: Calendar, number: "98%", label: "On-Time Delivery" },
    { icon: Star, number: "4.9/5", label: "Client Satisfaction" },
  ];

  return (
    <section
      id="team"
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
            Our Team
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
            Meet Our{" "}
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
              Expert Team
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
            Our dedicated team of professionals brings expertise, creativity,
            and passion to every project, ensuring exceptional results that
            exceed client expectations.
          </p>
        </div>

        <div
          style={{
            marginBottom: "var(--spacing-xl)",
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                style={{
                  padding: "var(--spacing-lg)",
                  background: "var(--muted)",
                  border: "1px solid var(--border)",
                }}
                className="rounded-lg text-center group hover:bg-[var(--gradient-primary)] hover:shadow-lg transition-all duration-500 glass dark:backdrop-blur-md dark:border-gray-600 animate-fade-in"
              >
                <div
                  style={{
                    width: "3rem",
                    height: "3rem",
                    background: "var(--gradient-primary)",
                    margin: "0 auto var(--spacing-sm)",
                    borderRadius: "var(--radius)",
                  }}
                  className="flex items-center justify-center group-hover:bg-[var(--background)] transition-colors duration-300"
                >
                  <IconComponent
                    style={{
                      width: "1.5rem",
                      height: "1.5rem",
                      color: "var(--primary-foreground)",
                    }}
                    className="group-hover:text-[var(--primary)] transition-colors duration-300"
                  />
                </div>
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "var(--font-bold)",
                    color: "var(--foreground)",
                    marginBottom: "var(--spacing-xs)",
                  }}
                  className="group-hover:text-[var(--primary-foreground)] dark:text-gray-200"
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--muted-foreground)",
                  }}
                  className="group-hover:text-[var(--primary-foreground)]/90 dark:text-gray-300"
                >
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              style={{
                padding: "var(--spacing-lg)",
                transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
                transition: "all var(--transition-base), transform 0.5s ease",
                background: "var(--background)",
                border: "1px solid var(--border)",
              }}
              className="group relative rounded-lg hover:border-[var(--primary)]/30 hover:shadow-lg hover:scale-105 hover:brightness-110 !hover:opacity-100 transition-all duration-500 glass dark:backdrop-blur-md dark:bg-gray-800/30 dark:border-gray-600 animate-fade-in"
            >
              <div
                style={{
                  marginBottom: "var(--spacing-sm)",
                }}
                className="relative"
              >
                <div
                  style={{
                    width: "6rem",
                    height: "6rem",
                    margin: "0 auto",
                    borderWidth: "4px",
                    borderRadius: "9999px",
                    overflow: "hidden",
                    borderColor: "var(--border)",
                  }}
                  className="group-hover:border-[var(--primary)] transition-colors duration-300"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transform: "scale(1)",
                      transition: "transform var(--transition-base)",
                    }}
                    className="group-hover:scale-110 dark:brightness-90 dark:contrast-110"
                  />
                </div>

                <div
                  style={{
                    position: "absolute",
                    bottom: "-0.5rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "var(--gradient-primary)",
                    color: "var(--primary-foreground)",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "var(--radius)",
                    fontSize: "0.75rem",
                    fontWeight: "var(--font-semibold)",
                    whiteSpace: "nowrap",
                  }}
                  className="glass dark:backdrop-blur-md"
                >
                  {member.experience}
                </div>
              </div>

              <div
                style={{
                  marginBottom: "var(--spacing-sm)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "var(--font-semibold)",
                    color: "var(--foreground)",
                    marginBottom: "var(--spacing-xs)",
                  }}
                  className="group-hover:text-[var(--primary)] dark:text-gray-200 transition-colors duration-300"
                >
                  {member.name}
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: "var(--font-medium)",
                    color: "var(--primary)",
                    marginBottom: "var(--spacing-sm)",
                  }}
                  className="dark:text-teal-300"
                >
                  {member.role}
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--muted-foreground)",
                    lineHeight: "var(--line-height-relaxed)",
                  }}
                  className="line-clamp-3 dark:text-gray-300"
                >
                  {member.description}
                </p>
              </div>

              <div
                style={{
                  marginBottom: "var(--spacing-sm)",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    background: "var(--muted)",
                    color: "var(--muted-foreground)",
                    fontSize: "0.75rem",
                    fontWeight: "var(--font-medium)",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "var(--radius)",
                    border: "1px solid var(--border)",
                  }}
                  className="glass dark:backdrop-blur-md dark:bg-gray-800/30 dark:border-gray-600"
                >
                  {member.projects} completed
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                <a
                  href={member.social.linkedin}
                  style={{
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "9999px",
                    background: "var(--muted)",
                    transition: "all var(--transition-base)",
                  }}
                  className="flex items-center justify-center text-[var(--foreground)] dark:text-gray-300 hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] !hover:opacity-100"
                  aria-label={`Visit ${member.name}'s LinkedIn profile`}
                >
                  <Linkedin style={{ width: "1rem", height: "1rem" }} />
                </a>
                <a
                  href={member.social.twitter}
                  style={{
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "9999px",
                    background: "var(--muted)",
                    transition: "all var(--transition-base)",
                  }}
                  className="flex items-center justify-center text-[var(--foreground)] dark:text-gray-300 hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] !hover:opacity-100"
                  aria-label={`Visit ${member.name}'s Twitter profile`}
                >
                  <Twitter style={{ width: "1rem", height: "1rem" }} />
                </a>
                <a
                  href={`mailto:${member.social.email}`}
                  style={{
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "9999px",
                    background: "var(--muted)",
                    transition: "all var(--transition-base)",
                  }}
                  className="flex items-center justify-center text-[var(--foreground)] dark:text-gray-300 hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] !hover:opacity-100"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail style={{ width: "1rem", height: "1rem" }} />
                </a>
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
                }}
                className="group-hover:opacity-100 dark:bg-gradient-to-r dark:from-teal-300 dark:to-cyan-400"
              />
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "var(--spacing-xl)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              background: "var(--gradient-primary)",
              padding: "var(--spacing-lg)",
              borderRadius: "var(--radius)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-lg)",
              maxWidth: "48rem",
              margin: "0 auto",
            }}
            className="glass dark:backdrop-blur-md dark:bg-gray-800/30 dark:border-gray-600 animate-fade-in"
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "var(--font-bold)",
                color: "var(--primary-foreground)",
                marginBottom: "var(--spacing-sm)",
              }}
              className="sm:text-[1.75rem] lg:text-[2rem]"
            >
              Explore Our Team
            </h3>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--primary-foreground)",
                opacity: 0.9,
                maxWidth: "32rem",
                margin: "0 auto var(--spacing-md)",
                lineHeight: "var(--line-height-relaxed)",
              }}
              className="md:text-[1.125rem]"
            >
              Meet the passionate experts behind our success. We’re here to
              bring creativity, innovation, and dedication to every project.
            </p>

            {/* Our Team Button */}
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
              }}
              className="hover:scale-105 hover:brightness-110 focus-ring !hover:opacity-100 group relative glass dark:backdrop-blur-md dark:bg-gray-800/30"
              onClick={() => navigate("/team")}
              aria-label="Our Team"
            >
              <span
                style={{
                  zIndex: 10,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                Our Team
                <ChevronRight
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    transition: "transform var(--transition-base)",
                  }}
                  className="group-hover:translate-x-1"
                />
              </span>
              {/* Hover Glow Effect */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at center, var(--accent) 0%, transparent 70%)",
                  opacity: 0,
                  transition: "opacity var(--transition-base)",
                }}
                className="group-hover:opacity-20 dark:bg-gradient-to-r dark:from-teal-300 dark:to-cyan-400"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
