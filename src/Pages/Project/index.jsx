import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MapPin, Calendar, ArrowLeft, ExternalLink, Zap, Target, Users } from "lucide-react";
import { Button } from "../../components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    fetch("/Data/Projects.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => String(p.id) === id);
        setProject(found);
      });
  }, [id]);

  if (!project) {
    return (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh',
        color: 'var(--muted-foreground)'
      }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center' }}
        >
          <div style={{
            width: '4rem',
            height: '4rem',
            border: '4px solid var(--primary-200)',
            borderTop: '4px solid var(--primary-500)',
            borderRadius: '50%',
            animation: 'spin 2s linear infinite',
            margin: '0 auto 1rem'
          }}></div>
          <p style={{ fontSize: '1.125rem', fontWeight: 'var(--font-medium)' }}>Loading project...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--background)',
      color: 'var(--foreground)',
      transition: 'all var(--transition-base)',
    }}>
      <div style={{
        maxWidth: '64rem',
        margin: '2rem auto',
        padding: 'var(--spacing-2xl) var(--spacing-md)',
        textAlign: 'center'
      }}>
        
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ marginBottom: 'var(--spacing-2xl)', textAlign: 'left' }}
        >
          <button
            onClick={() => navigate(-1)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              color: 'var(--foreground)',
              background: 'var(--muted)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              cursor: 'pointer',
              transition: 'all var(--transition-base)',
              fontWeight: 'var(--font-medium)',
              fontSize: '1rem'
            }}
            className="hover:bg-background hover:shadow-md focus-ring"
          >
            <ArrowLeft style={{ width: '1rem', height: '1rem' }} />
            Back to Projects
          </button>
        </motion.div>

        {/* Hero Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'var(--spacing-2xl)',
          marginBottom: 'var(--spacing-3xl)'
        }}>
          {/* Image Container */}
          <motion.div
            style={{ position: 'relative' }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div style={{
              position: 'relative',
              borderRadius: 'var(--radius-2xl)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-2xl)',
              background: 'var(--muted)',
              border: '1px solid var(--border)'
            }}>
              <div style={{
                aspectRatio: '16/9',
                background: 'var(--gradient-primary-subtle)'
              }}>
                <AnimatePresence>
                  {!imageLoaded && (
                    <motion.div
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <div style={{
                        width: '3rem',
                        height: '3rem',
                        border: '3px solid var(--primary-200)',
                        borderTop: '3px solid var(--primary-500)',
                        borderRadius: '50%',
                        animation: 'spin 2s linear infinite'
                      }}></div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'opacity 0.5s',
                    opacity: imageLoaded ? 1 : 0
                  }}
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
              
              {/* Image Overlay Gradient */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, var(--background) 20%, transparent 50%)',
                opacity: 0.6
              }}></div>
              
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem'
                }}
              >
                <span style={{
                  padding: '0.5rem 1rem',
                  background: 'var(--background)',
                  opacity: 0.8,
                  backdropFilter: 'blur(10px)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.875rem',
                  fontWeight: 'var(--font-medium)',
                  color: 'var(--primary)',
                  border: '1px solid var(--primary-200)'
                }}>
                  {project.status || "Completed"}
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Category */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                background: 'var(--primary-100)',
                color: 'var(--primary-600)',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.875rem',
                fontWeight: 'var(--font-medium)',
                marginBottom: '1rem',
                border: '1px solid var(--primary-200)',
                width: 'fit-content'
              }}
            >
              <Zap style={{ width: '1rem', height: '1rem' }} />
              {project.category || "Web Development"}
            </motion.span>

            {/* Title */}
            <motion.h1
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                fontWeight: 'var(--font-bold)',
                marginBottom: '1rem',
                background: 'var(--gradient-primary)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {project.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              style={{
                fontSize: '1rem',
                color: 'var(--muted-foreground)',
                lineHeight: 'var(--line-height-relaxed)',
                marginBottom: '1.5rem'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {project.description}
            </motion.p>

            {/* Meta Information */}
            <motion.div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1rem',
                color: 'var(--muted-foreground)',
                marginBottom: '1.5rem'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin style={{ width: '1rem', height: '1rem', color: 'var(--primary)' }} />
                {project.location}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Calendar style={{ width: '1rem', height: '1rem', color: 'var(--primary)' }} />
                {project.date}
              </span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Button
                onClick={() => navigate("/contact")}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                  fontWeight: 'var(--font-semibold)',
                  borderRadius: 'var(--radius)',
                  minHeight: "44px",
                  transition: "all var(--transition-base)",
                }}
                className="hover:opacity-90 hover:shadow-lg focus-ring"
              >
                Start Your Project
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ marginBottom: 'var(--spacing-3xl)' }}
        >
          <div style={{
            background: 'var(--background)',
            borderRadius: 'var(--radius-2xl)',
            padding: 'var(--spacing-2xl)',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid var(--border)'
          }}>
            <motion.h2
              style={{
                fontSize: '1.75rem',
                fontWeight: 'var(--font-bold)',
                marginBottom: 'var(--spacing-2xl)',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-md)'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <div style={{
                padding: 'var(--spacing-sm)',
                background: 'var(--primary-100)',
                borderRadius: 'var(--radius-lg)'
              }}>
                <Target style={{ width: '1.25rem', height: '1.25rem', color: 'var(--primary)' }} />
              </div>
              Key Features
            </motion.h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr))',
              gap: 'var(--spacing-md)'
            }}>
              {project.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -2,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  style={{
                    padding: 'var(--spacing-md)',
                    background: 'var(--muted)',
                    borderRadius: 'var(--radius-xl)',
                    border: '1px solid var(--border)',
                    transition: 'var(--transition-base)',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{
                    width: '2rem',
                    height: '2rem',
                    background: 'var(--gradient-primary-subtle)',
                    borderRadius: 'var(--radius)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--spacing-md)',
                    transition: 'var(--transition-transform)'
                  }}>
                    <div style={{
                      width: '0.5rem',
                      height: '0.5rem',
                      background: 'var(--primary)',
                      borderRadius: '50%'
                    }}></div>
                  </div>
                  <p style={{
                    fontWeight: 'var(--font-medium)',
                    color: 'var(--foreground)'
                  }}>
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          style={{ textAlign: 'center' }}
        >
          <div style={{
            background: 'var(--muted)',
            borderRadius: 'var(--radius-2xl)',
            padding: 'var(--spacing-2xl)',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <motion.h3
              style={{
                fontSize: '1.75rem',
                fontWeight: 'var(--font-bold)',
                marginBottom: 'var(--spacing-md)'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
            >
              Ready to Start Your Project?
            </motion.h3>
            <motion.p
              style={{
                color: 'var(--muted-foreground)',
                marginBottom: 'var(--spacing-2xl)',
                maxWidth: '32rem',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              Let's work together to bring your ideas to life with the same level of craftsmanship and attention to detail.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, type: "spring", stiffness: 300 }}
            >
              <Button
                onClick={() => navigate("/contact")}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                  fontWeight: 'var(--font-semibold)',
                  borderRadius: 'var(--radius)',
                  minHeight: "44px",
                  transition: "all var(--transition-base)",
                }}
                className="hover:opacity-90 hover:shadow-lg focus-ring"
              >
                Start Your Project Today
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}