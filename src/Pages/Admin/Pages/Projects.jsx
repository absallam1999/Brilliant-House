import React, { useState } from 'react';
import { Search, Plus, Users, Calendar, Target, MoreVertical } from 'lucide-react';
import { Button } from "./../../../components/ui/button";
import { motion } from "framer-motion";

export default function Projects(){
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    { 
      id: 1, 
      name: 'Luxury Villa Interior Design', 
      client: 'Fatima Al-Nasser', 
      status: 'in-progress', 
      progress: 75, 
      team: 4, 
      deadline: '2024-02-15',
      budget: '$45,000'
    },
    { 
      id: 2, 
      name: 'Corporate Office Redesign', 
      client: 'Ahmad Al-Mansoori', 
      status: 'completed', 
      progress: 100, 
      team: 6, 
      deadline: '2024-01-10',
      budget: '$60,000'
    },
    { 
      id: 3, 
      name: 'Boutique Hotel Renovation', 
      client: 'Noora Al-Qasimi', 
      status: 'planning', 
      progress: 25, 
      team: 3, 
      deadline: '2024-03-20',
      budget: '$80,000'
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return { background: 'var(--success-100)', color: 'var(--success)' };
      case 'in-progress': return { background: 'var(--primary-100)', color: 'var(--primary)' };
      case 'planning': return { background: 'var(--warning-100)', color: 'var(--warning)' };
      default: return { background: 'var(--muted)', color: 'var(--muted-foreground)' };
    }
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--spacing-lg)",
      padding: "var(--spacing-md)",
      background: "var(--background)",
      color: "var(--foreground)"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem"
      }}>
        <div>
          <h1 style={{
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: "var(--font-bold)",
            color: "var(--foreground)"
          }}>
            Projects
          </h1>
          <p style={{
            fontSize: "0.875rem",
            color: "var(--muted-foreground)",
            marginTop: "0.25rem"
          }}>
            Manage your ongoing and completed projects
          </p>
        </div>
        <Button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.5rem 1rem",
            background: "var(--gradient-primary)",
            color: "var(--primary-foreground)",
            borderRadius: "var(--radius)",
            fontWeight: "var(--font-medium)",
            minHeight: "44px",
            transition: "all var(--transition-base)"
          }}
          className="hover:scale-105 hover:shadow-lg focus-ring"
          aria-label="Create new project"
        >
          <Plus style={{ width: "1rem", height: "1rem" }} />
          <span>New Project</span>
        </Button>
      </div>

      {/* Search */}
      <div style={{ position: "relative", maxWidth: "20rem" }}>
        <Search style={{
          position: "absolute",
          left: "0.75rem",
          top: "50%",
          transform: "translateY(-50%)",
          width: "1rem",
          height: "1rem",
          color: "var(--muted-foreground)"
        }} />
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "100%",
            padding: "0.5rem 0.5rem 0.5rem 2.5rem",
            background: "var(--background)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            fontSize: "0.875rem",
            color: "var(--foreground)",
            transition: "all var(--transition-base)",
            outline: "none"
          }}
          className="focus:ring-2 focus:ring-primary focus:border-transparent"
          aria-label="Search projects"
        />
      </div>

      {/* Projects Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
        gap: "1.5rem"
      }}>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
              background: "var(--background)",
              borderRadius: "var(--radius-xl)",
              boxShadow: "var(--shadow-lg)",
              border: "1px solid var(--border)",
              padding: "var(--spacing-md)",
              transition: "all var(--transition-base)"
            }}
            className="hover:shadow-xl hover:-translate-y-1"
          >
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "1rem"
            }}>
              <h3 style={{
                fontSize: "1.125rem",
                fontWeight: "var(--font-semibold)",
                color: "var(--foreground)"
              }}>
                {project.name}
              </h3>
              <Button
                style={{
                  padding: "0.5rem",
                  background: "transparent",
                  color: "var(--muted-foreground)",
                  borderRadius: "var(--radius)",
                  transition: "all var(--transition-base)"
                }}
                className="hover:bg-muted hover:text-foreground focus-ring"
                aria-label={`More actions for project ${project.name}`}
              >
                <MoreVertical style={{ width: "1rem", height: "1rem" }} />
              </Button>
            </div>
            
            <p style={{
              fontSize: "0.875rem",
              color: "var(--muted-foreground)",
              marginBottom: "1rem"
            }}>
              Client: {project.client}
            </p>
            
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "1rem",
              fontSize: "0.75rem"
            }}>
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.25rem 0.75rem",
                borderRadius: "var(--radius-full)",
                fontWeight: "var(--font-medium)",
                ...getStatusColor(project.status)
              }}>
                {project.status.replace('-', ' ')}
              </span>
              <span style={{
                fontWeight: "var(--font-medium)",
                color: "var(--foreground)"
              }}>
                {project.budget}
              </span>
            </div>
            
            {/* Progress Bar */}
            <div style={{ marginBottom: "1rem" }}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "0.75rem",
                color: "var(--muted-foreground)",
                marginBottom: "0.5rem"
              }}>
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div style={{
                width: "100%",
                background: "var(--muted)",
                borderRadius: "var(--radius-full)",
                height: "0.5rem"
              }}>
                <div 
                  style={{
                    width: `${project.progress}%`,
                    background: "var(--primary)",
                    height: "0.5rem",
                    borderRadius: "var(--radius-full)",
                    transition: "width var(--transition-base)"
                  }}
                ></div>
              </div>
            </div>
            
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: "0.75rem",
              color: "var(--muted-foreground)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Users style={{ width: "1rem", height: "1rem" }} />
                <span>{project.team} members</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Calendar style={{ width: "1rem", height: "1rem" }} />
                <span>{project.deadline}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};