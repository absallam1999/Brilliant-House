import React, { useState } from 'react';
import { Search, Plus, Edit, Trash2, Eye, Calendar, User } from 'lucide-react';
import { Button } from "./../../../components/ui/button";
import { motion } from "framer-motion";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    { 
      id: 1, 
      title: 'Top Trends in Modern Interior Design for 2025', 
      excerpt: 'Discover the latest trends in interior design, from sustainable materials to bold color palettes...', 
      author: 'Fatima Al-Nasser', 
      date: '2024-01-15', 
      status: 'published', 
      views: 1240 
    },
    { 
      id: 2, 
      title: 'How to Create a Minimalist Living Space', 
      excerpt: 'A step-by-step guide to designing a serene and functional minimalist interior...', 
      author: 'Noora Al-Qasimi', 
      date: '2024-01-14', 
      status: 'draft', 
      views: 0 
    },
    { 
      id: 3, 
      title: 'Maximizing Small Spaces with Smart Design', 
      excerpt: 'Learn how to make the most of compact interiors with clever furniture and layout solutions...', 
      author: 'Ahmad Al-Mansoori', 
      date: '2024-01-12', 
      status: 'published', 
      views: 856 
    },
  ];

  const getStatusColor = (status) => {
    return status === 'published' 
      ? { background: 'var(--success-100)', color: 'var(--success)' }
      : { background: 'var(--warning-100)', color: 'var(--warning)' };
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
            Blog Management
          </h1>
          <p style={{
            fontSize: "0.875rem",
            color: "var(--muted-foreground)",
            marginTop: "0.25rem"
          }}>
            Create and manage your blog content
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
          aria-label="Create new blog post"
        >
          <Plus style={{ width: "1rem", height: "1rem" }} />
          <span>New Post</span>
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
          placeholder="Search blog posts..."
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
          aria-label="Search blog posts"
        />
      </div>

      {/* Blog Posts Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
        gap: "1.5rem"
      }}>
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
              background: "var(--background)",
              borderRadius: "var(--radius-xl)",
              boxShadow: "var(--shadow-lg)",
              border: "1px solid var(--border)",
              overflow: "hidden",
              transition: "all var(--transition-base)"
            }}
            className="hover:shadow-xl hover:-translate-y-1"
          >
            <div style={{
              height: "12rem",
              background: "var(--gradient-primary)"
            }}></div>
            <div style={{ padding: "var(--spacing-md)" }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "0.75rem"
              }}>
                <span style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.75rem",
                  fontWeight: "var(--font-medium)",
                  ...getStatusColor(post.status)
                }}>
                  {post.status}
                </span>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                  fontSize: "0.75rem",
                  color: "var(--muted-foreground)"
                }}>
                  <Eye style={{ width: "1rem", height: "1rem" }} />
                  <span>{post.views}</span>
                </div>
              </div>
              
              <h3 style={{
                fontSize: "1.125rem",
                fontWeight: "var(--font-semibold)",
                color: "var(--foreground)",
                marginBottom: "0.5rem",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden"
              }}>
                {post.title}
              </h3>
              
              <p style={{
                fontSize: "0.875rem",
                color: "var(--muted-foreground)",
                marginBottom: "1rem",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden"
              }}>
                {post.excerpt}
              </p>
              
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "0.75rem",
                color: "var(--muted-foreground)"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <User style={{ width: "1rem", height: "1rem" }} />
                  <span>{post.author}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Calendar style={{ width: "1rem", height: "1rem" }} />
                  <span>{post.date}</span>
                </div>
              </div>
              
              <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
                <Button
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.25rem",
                    padding: "0.5rem",
                    background: "transparent",
                    color: "var(--muted-foreground)",
                    borderRadius: "var(--radius)",
                    fontSize: "0.75rem",
                    minHeight: "44px",
                    transition: "all var(--transition-base)"
                  }}
                  className="hover:bg-muted hover:text-foreground focus-ring"
                  aria-label={`Edit post: ${post.title}`}
                >
                  <Edit style={{ width: "1rem", height: "1rem" }} />
                  <span>Edit</span>
                </Button>
                <Button
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.25rem",
                    padding: "0.5rem",
                    background: "transparent",
                    color: "var(--destructive)",
                    borderRadius: "var(--radius)",
                    fontSize: "0.75rem",
                    minHeight: "44px",
                    transition: "all var(--transition-base)"
                  }}
                  className="hover:bg-destructive-100 hover:text-destructive-foreground focus-ring"
                  aria-label={`Delete post: ${post.title}`}
                >
                  <Trash2 style={{ width: "1rem", height: "1rem" }} />
                  <span>Delete</span>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};