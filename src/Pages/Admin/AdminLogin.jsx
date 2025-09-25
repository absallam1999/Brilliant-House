import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Eye, EyeOff, Building } from 'lucide-react';
import { Button } from "./../../components/ui/button";
import { motion } from "framer-motion";

export default function AdminLogin(){
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (password === '1234') {
        localStorage.setItem('adminAuthenticated', 'true');
        navigate('/admin');
      } else {
        setError('Invalid password. Please try again.');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "var(--gradient-muted)",
      color: "var(--foreground)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--spacing-md)",
      transition: "all var(--transition-base)"
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          maxWidth: "28rem",
          width: "100%",
          background: "var(--background)",
          borderRadius: "var(--radius-2xl)",
          padding: "var(--spacing-xl)",
          boxShadow: "var(--shadow-lg)",
          border: "1px solid var(--border)"
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }}>
          <div style={{
            margin: "0 auto",
            width: "5rem",
            height: "5rem",
            background: "var(--gradient-primary)",
            borderRadius: "var(--radius-xl)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "var(--shadow-xl)"
          }}>
            <Building style={{ width: "2.5rem", height: "2.5rem", color: "var(--primary-foreground)" }} />
          </div>
          <h2 style={{
            marginTop: "var(--spacing-md)",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: "var(--font-bold)",
            color: "var(--foreground)"
          }}>
            Admin Portal
          </h2>
          <p style={{
            marginTop: "0.5rem",
            fontSize: "0.875rem",
            color: "var(--muted-foreground)",
            lineHeight: "var(--line-height-relaxed)"
          }}>
            Enter your password to access the dashboard
          </p>
        </div>

        <form style={{ marginTop: "var(--spacing-lg)", display: "flex", flexDirection: "column", gap: "1.5rem" }} onSubmit={handleLogin}>
          <div>
            <div style={{ position: "relative" }}>
              <Lock style={{
                position: "absolute",
                left: "0.75rem",
                top: "50%",
                transform: "translateY(-50%)",
                width: "1.25rem",
                height: "1.25rem",
                color: "var(--muted-foreground)"
              }} />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password (1234)"
                style={{
                  width: "100%",
                  padding: "0.75rem 3rem",
                  background: "var(--background)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius)",
                  fontSize: "0.875rem",
                  color: "var(--foreground)",
                  transition: "all var(--transition-base)",
                  outline: "none"
                }}
                className="focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "0.75rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--muted-foreground)",
                  transition: "color var(--transition-base)"
                }}
                className="hover:text-foreground focus-ring"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff style={{ width: "1.25rem", height: "1.25rem" }} />
                ) : (
                  <Eye style={{ width: "1.25rem", height: "1.25rem" }} />
                )}
              </button>
            </div>
            {error && (
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  marginTop: "0.5rem",
                  fontSize: "0.75rem",
                  color: "var(--destructive)",
                  textAlign: "center"
                }}
              >
                {error}
              </motion.p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            style={{
              width: "100%",
              padding: "0.75rem",
              background: "var(--gradient-primary)",
              color: "var(--primary-foreground)",
              fontWeight: "var(--font-semibold)",
              borderRadius: "var(--radius)",
              minHeight: "44px",
              transition: "all var(--transition-base)",
              opacity: isLoading ? 0.5 : 1,
              cursor: isLoading ? "not-allowed" : "pointer"
            }}
            className="hover:scale-105 hover:shadow-lg focus-ring"
            aria-label="Sign in to admin portal"
          >
            {isLoading ? 'Signing in...' : 'Sign in'}
          </Button>

          <div style={{ textAlign: "center" }}>
            <p style={{
              fontSize: "0.75rem",
              color: "var(--muted-foreground)"
            }}>
              Demo password: <strong>1234</strong>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
};