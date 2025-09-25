import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Users,
  Award,
  Briefcase,
  Linkedin,
  Twitter,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  Sparkles
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { motion } from "framer-motion";

export default function TeamPage() {
  const [animate, setAnimate] = useState(false);
  const [expandedBio, setExpandedBio] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    setAnimate(true);
  }, []);

  const teamMembers = [
    {
      name: "Ahmad Al-Mansoori",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "With over 20 years in the construction industry, Ahmad leads our team with a vision for excellence and innovation. His strategic insight ensures every project meets the highest standards.",
      linkedin: "#",
      twitter: "#",
      stats: { projects: "150+", experience: "20+ years", awards: "5" },
    },
    {
      name: "Fatima Al-Nasser",
      role: "Lead Architect",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Fatima's creative designs blend functionality with aesthetic appeal. Her expertise in sustainable architecture has earned her multiple industry awards.",
      linkedin: "#",
      twitter: "#",
      stats: { projects: "100+", experience: "15+ years", awards: "3" },
    },
    {
      name: "Mohammed Al-Khalidi",
      role: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Mohammed oversees project execution with precision, ensuring timelines and budgets are met without compromising quality. His leadership drives our team’s success.",
      linkedin: "#",
      twitter: "#",
      stats: { projects: "120+", experience: "12+ years", awards: "2" },
    },
    {
      name: "Noora Al-Qasimi",
      role: "Interior Designer",
      image:
        "https://images.unsplash.com/photo-1517365830460-955ce3f6b1f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Noora transforms spaces with her innovative interior design solutions. Her keen eye for detail creates environments that inspire and delight our clients.",
      linkedin: "#",
      twitter: "#",
      stats: { projects: "80+", experience: "10+ years", awards: "4" },
    },
  ];

  const companyStats = [
    { icon: Users, value: "40+", label: "Team Members" },
    { icon: Award, value: "15+", label: "Industry Awards" },
    { icon: Briefcase, value: "250+", label: "Projects Completed" },
    { icon: CheckCircle, value: "98%", label: "Client Satisfaction" },
  ];

  const toggleBio = (index) => {
    setExpandedBio(expandedBio === index ? null : index);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "var(--gradient-muted)",
      color: "var(--foreground)",
      transition: "all var(--transition-base)"
    }}>
      {/* Hero Section */}
      <section style={{
        marginTop: "var(--spacing-2xl)",
        position: "relative",
        padding: "var(--spacing-3xl) var(--spacing-md)",
        backgroundImage: "url('https://images.unsplash.com/photo-1664638413739-d571590cb51b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        color: "var(--primary-foreground)"
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          background: "var(--gradient-primary)",
          opacity: 0.6
        }}></div>
        <div style={{
          position: "relative",
          zIndex: 10,
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
              Our Team
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
              Meet Our <span style={{ color: "var(--primary)" }}>Expert Team</span>
            </h1>
            <p style={{
              fontSize: "1.25rem",
              maxWidth: "40rem",
              margin: "0 auto",
              lineHeight: "var(--line-height-relaxed)",
              opacity: 0.9
            }}>
              Our dedicated professionals bring expertise, passion, and innovation to every project, ensuring exceptional results.
            </p>
            <Button
              style={{
                marginTop: "2rem",
                padding: "0.75rem 2rem",
                background: "var(--primary)",
                color: "var(--primary-foreground)",
                fontWeight: "var(--font-semibold)",
                borderRadius: "var(--radius)",
                minHeight: "44px",
                transition: "all var(--transition-base)"
              }}
              className="hover:opacity-90 hover:shadow-lg focus-ring"
              aria-label="Contact our team"
            >
              Contact Our Team
              <ArrowRight style={{ width: "1.25rem", height: "1.25rem", marginLeft: "0.5rem" }} />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
      <section style={{
        padding: "var(--spacing-3xl) var(--spacing-md)",
        background: "var(--background)"
      }}>
        <div style={{ textAlign: "center", marginBottom: "var(--spacing-2xl)" }}>
          <h2 style={{
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: "var(--font-bold)",
            color: "var(--foreground)",
            marginBottom: "1rem"
          }}>
            Why Choose <span style={{ color: "var(--primary)" }}>Our Team</span>
          </h2>
          <p style={{
            fontSize: "1.125rem",
            color: "var(--muted-foreground)",
            maxWidth: "40rem",
            margin: "0 auto",
            lineHeight: "var(--line-height-relaxed)"
          }}>
            Our team combines expertise, dedication, and innovation to deliver outstanding results.
          </p>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))",
          gap: "1rem"
        }}>
          {companyStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: animate ? 1 : 0, y: animate ? 0 : 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
                <IconComponent style={{
                  width: "2rem",
                  height: "2rem",
                  color: "var(--primary)",
                  margin: "0 auto 1rem"
                }} />
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
            );
          })}
        </div>
      </section>

      {/* Team Members */}
      <section style={{
        padding: "var(--spacing-3xl) var(--spacing-md)",
        background: "var(--muted)"
      }}>
        <div style={{ textAlign: "center", marginBottom: "var(--spacing-2xl)" }}>
          <h2 style={{
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: "var(--font-bold)",
            color: "var(--foreground)",
            marginBottom: "1rem"
          }}>
            Our <span style={{ color: "var(--primary)" }}>Leadership Team</span>
          </h2>
          <p style={{
            fontSize: "1.125rem",
            color: "var(--muted-foreground)",
            maxWidth: "40rem",
            margin: "0 auto",
            lineHeight: "var(--line-height-relaxed)"
          }}>
            Meet the professionals driving our success with expertise and dedication.
          </p>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
          gap: "1.5rem"
        }}>
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: animate ? 1 : 0, y: animate ? 0 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                background: "var(--background)",
                borderRadius: "var(--radius-2xl)",
                padding: "1.5rem",
                boxShadow: "var(--shadow-lg)",
                border: "1px solid var(--border)",
                transition: "all var(--transition-base)"
              }}
              className="hover:shadow-xl hover:-translate-y-1"
            >
              <img
                src={member.image}
                alt={member.name}
                style={{
                  width: "100%",
                  height: "12rem",
                  objectFit: "cover",
                  borderRadius: "var(--radius-xl)",
                  marginBottom: "1rem"
                }}
              />
              <h3 style={{
                fontSize: "1.25rem",
                fontWeight: "var(--font-bold)",
                color: "var(--foreground)",
                marginBottom: "0.5rem"
              }}>
                {member.name}
              </h3>
              <p style={{
                fontSize: "0.875rem",
                color: "var(--muted-foreground)",
                marginBottom: "1rem"
              }}>
                {member.role}
              </p>
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "1rem"
              }}>
                <div style={{
                  display: "flex",
                  gap: "0.5rem"
                }}>
                  <a
                    href={member.linkedin}
                    style={{
                      color: "var(--primary)",
                      transition: "color var(--transition-base)"
                    }}
                    className="hover:text-primary-foreground"
                    aria-label={`LinkedIn profile for ${member.name}`}
                  >
                    <Linkedin style={{ width: "1.25rem", height: "1.25rem" }} />
                  </a>
                  <a
                    href={member.twitter}
                    style={{
                      color: "var(--primary)",
                      transition: "color var(--transition-base)"
                    }}
                    className="hover:text-primary-foreground"
                    aria-label={`Twitter profile for ${member.name}`}
                  >
                    <Twitter style={{ width: "1.25rem", height: "1.25rem" }} />
                  </a>
                </div>
                <Button
                  style={{
                    padding: 0,
                    background: "transparent",
                    color: "var(--primary)",
                    transition: "all var(--transition-base)"
                  }}
                  className="hover:bg-muted hover:shadow-md focus-ring"
                  onClick={() => toggleBio(index)}
                  aria-label={`Toggle bio for ${member.name}`}
                >
                  <ChevronDown style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    transition: "transform var(--transition-base)",
                    transform: expandedBio === index ? "rotate(180deg)" : "rotate(0deg)"
                  }} />
                </Button>
              </div>
              {expandedBio === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p style={{
                    fontSize: "0.875rem",
                    color: "var(--muted-foreground)",
                    marginBottom: "1rem",
                    lineHeight: "var(--line-height-relaxed)"
                  }}>
                    {member.bio}
                  </p>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "0.5rem",
                    textAlign: "center"
                  }}>
                    <div>
                      <div style={{
                        fontSize: "0.875rem",
                        fontWeight: "var(--font-bold)",
                        color: "var(--primary)"
                      }}>
                        {member.stats.projects}
                      </div>
                      <div style={{
                        fontSize: "0.75rem",
                        color: "var(--muted-foreground)"
                      }}>
                        Projects
                      </div>
                    </div>
                    <div>
                      <div style={{
                        fontSize: "0.875rem",
                        fontWeight: "var(--font-bold)",
                        color: "var(--primary)"
                      }}>
                        {member.stats.experience}
                      </div>
                      <div style={{
                        fontSize: "0.75rem",
                        color: "var(--muted-foreground)"
                      }}>
                        Experience
                      </div>
                    </div>
                    <div>
                      <div style={{
                        fontSize: "0.875rem",
                        fontWeight: "var(--font-bold)",
                        color: "var(--primary)"
                      }}>
                        {member.stats.awards}
                      </div>
                      <div style={{
                        fontSize: "0.75rem",
                        color: "var(--muted-foreground)"
                      }}>
                        Awards
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: "var(--spacing-3xl) var(--spacing-md)",
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
            color: "#fff",
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: "var(--font-bold)",
            marginBottom: "1rem"
          }}>
            Work with Our Expert Team
          </h2>
          <p style={{
            fontSize: "1.125rem",
            marginBottom: "2rem",
            maxWidth: "32rem",
            marginLeft: "auto",
            marginRight: "auto",
            opacity: 0.9
          }}>
            Ready to start your project? Connect with our team for a free consultation.
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
                background: "var(--background)",
                color: "var(--primary)",
                fontWeight: "var(--font-semibold)",
                borderRadius: "var(--radius)",
                minHeight: "44px",
                transition: "all var(--transition-base)",
                boxShadow: "var(--shadow-md)"
              }}
              className="hover:bg-muted hover:shadow-lg focus-ring"
              onClick = {() => navigate('/contact')}
              aria-label="Get in touch with our team"
            >
              Get in Touch
              <ArrowRight style={{ width: "1.25rem", height: "1.25rem", marginLeft: "0.5rem" }} />
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
              onClick = {() => navigate('/portfolio')}
              aria-label="View our projects"
            >
              View Our Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}