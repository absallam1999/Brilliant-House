import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Settings, 
  CreditCard, 
  Folder,
  LogOut,
  Menu,
  X,
  Sun,
  Moon,
  Bell,
  Search,
  User
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from "./../../components/ui/button";
import { motion } from "framer-motion";

export default function DashboardLayout({ children }){
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
    { icon: CreditCard, label: 'Payments', path: '/admin/payments' },
    { icon: FileText, label: 'Blog', path: '/admin/blog' },
    { icon: Folder, label: 'Projects', path: '/admin/projects' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    navigate('/admin/login');
  };

  return (
    <div style={{
      display: "flex",
      height: "100vh",
      background: "var(--gradient-muted)",
      color: "var(--foreground)",
      transition: "all var(--transition-base)"
    }}>
      {/* Sidebar */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100%",
        width: "16rem",
        background: "var(--background)",
        boxShadow: "var(--shadow-lg)",
        borderRight: "1px solid var(--border)",
        transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)",
        transition: "transform var(--transition-base) ease-in-out",
        zIndex: 50,
        '@media (min-width: 1024px)': {
          position: "static",
          transform: "translateX(0)"
        }
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "var(--spacing-md)",
          borderBottom: "1px solid var(--border)"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{
              width: "2.5rem",
              height: "2.5rem",
              background: "var(--gradient-primary)",
              borderRadius: "var(--radius)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <span style={{
                color: "var(--primary-foreground)",
                fontWeight: "var(--font-bold)",
                fontSize: "1.25rem"
              }}>A</span>
            </div>
            <div>
              <h1 style={{
                fontSize: "1.25rem",
                fontWeight: "var(--font-bold)",
                color: "var(--foreground)"
              }}>AdminPanel</h1>
              <p style={{
                fontSize: "0.75rem",
                color: "var(--muted-foreground)"
              }}>Dashboard</p>
            </div>
          </div>
          <Button
            onClick={() => setSidebarOpen(false)}
            style={{
              display: "none",
              padding: "0.5rem",
              background: "transparent",
              borderRadius: "var(--radius)",
              '@media (max-width: 1023px)': {
                display: "block"
              }
            }}
            className="hover:bg-muted focus-ring"
            aria-label="Close sidebar"
          >
            <X style={{ width: "1.25rem", height: "1.25rem", color: "var(--muted-foreground)" }} />
          </Button>
        </div>

        <nav style={{ padding: "var(--spacing-sm)", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <motion.button
                key={item.path}
                onClick={() => {
                  navigate(item.path);
                  setSidebarOpen(false);
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.75rem 1rem",
                  borderRadius: "var(--radius)",
                  background: isActive ? "var(--primary-100)" : "transparent",
                  color: isActive ? "var(--primary)" : "var(--muted-foreground)",
                  border: isActive ? "1px solid var(--primary-200)" : "none",
                  transition: "all var(--transition-base)",
                  width: "100%",
                  textAlign: "left",
                  fontWeight: "var(--font-medium)",
                  minHeight: "44px"
                }}
                className={isActive ? "" : "hover:bg-muted hover:text-foreground focus-ring"}
                aria-label={`Navigate to ${item.label}`}
              >
                <Icon style={{ width: "1.25rem", height: "1.25rem" }} />
                <span>{item.label}</span>
              </motion.button>
            );
          })}
        </nav>

        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "var(--spacing-sm)",
          borderTop: "1px solid var(--border)"
        }}>
          <Button
            onClick={handleLogout}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.75rem 1rem",
              borderRadius: "var(--radius)",
              background: "transparent",
              color: "var(--destructive)",
              width: "100%",
              textAlign: "left",
              fontWeight: "var(--font-medium)",
              minHeight: "44px",
              transition: "all var(--transition-base)"
            }}
            className="hover:bg-destructive-100 hover:text-destructive-foreground focus-ring"
            aria-label="Log out"
          >
            <LogOut style={{ width: "1.25rem", height: "1.25rem" }} />
            <span>Logout</span>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Header */}
        <header style={{
          background: "var(--background)",
          borderBottom: "1px solid var(--border)",
          boxShadow: "var(--shadow-sm)"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "var(--spacing-sm) var(--spacing-md)"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <Button
                onClick={() => setSidebarOpen(true)}
                style={{
                  display: "none",
                  padding: "0.5rem",
                  background: "transparent",
                  borderRadius: "var(--radius)",
                  '@media (max-width: 1023px)': {
                    display: "block"
                  }
                }}
                className="hover:bg-muted focus-ring"
                aria-label="Open sidebar"
              >
                <Menu style={{ width: "1.25rem", height: "1.25rem", color: "var(--muted-foreground)" }} />
              </Button>
              
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
                  placeholder="Search..."
                  style={{
                    width: "100%",
                    padding: "0.5rem 0.5rem 0.5rem 2.5rem",
                    background: "var(--muted)",
                    borderRadius: "var(--radius)",
                    border: "none",
                    fontSize: "0.875rem",
                    color: "var(--foreground)",
                    transition: "all var(--transition-base)",
                    outline: "none"
                  }}
                  className="focus:ring-2 focus:ring-primary focus:bg-background"
                />
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <Button
                onClick={() => setDarkMode(!darkMode)}
                style={{
                  padding: "0.5rem",
                  background: "transparent",
                  borderRadius: "var(--radius)",
                  transition: "all var(--transition-base)"
                }}
                className="hover:bg-muted focus-ring"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? (
                  <Sun style={{ width: "1.25rem", height: "1.25rem", color: "var(--yellow-500)" }} />
                ) : (
                  <Moon style={{ width: "1.25rem", height: "1.25rem", color: "var(--muted-foreground)" }} />
                )}
              </Button>
              
              <Button
                style={{
                  padding: "0.5rem",
                  background: "transparent",
                  borderRadius: "var(--radius)",
                  position: "relative",
                  transition: "all var(--transition-base)"
                }}
                className="hover:bg-muted focus-ring"
                aria-label="Notifications"
              >
                <Bell style={{ width: "1.25rem", height: "1.25rem", color: "var(--muted-foreground)" }} />
                <span style={{
                  position: "absolute",
                  top: "0.25rem",
                  right: "0.25rem",
                  width: "0.5rem",
                  height: "0.5rem",
                  background: "var(--destructive)",
                  borderRadius: "50%"
                }}></span>
              </Button>
              
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{
                  width: "2rem",
                  height: "2rem",
                  background: "var(--gradient-primary)",
                  borderRadius: "var(--radius-full)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <User style={{ width: "1rem", height: "1rem", color: "var(--primary-foreground)" }} />
                </div>
                <div style={{
                  display: "none",
                  '@media (min-width: 640px)': {
                    display: "block"
                  }
                }}>
                  <div style={{
                    fontSize: "0.875rem",
                    fontWeight: "var(--font-medium)",
                    color: "var(--foreground)"
                  }}>Admin User</div>
                  <div style={{
                    fontSize: "0.75rem",
                    color: "var(--muted-foreground)"
                  }}>Administrator</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main style={{
          flex: 1,
          overflow: "auto",
          padding: "var(--spacing-md)"
        }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </main>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "var(--black)",
            opacity: 0.5,
            zIndex: 40,
            '@media (min-width: 1024px)': {
              display: "none"
            }
          }}
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};