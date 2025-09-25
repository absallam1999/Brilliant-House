import React, { useState } from 'react';
import { Save, Bell, Shield, User, Globe, CreditCard } from 'lucide-react';
import { Button } from "./../../../components/ui/button";
import { motion } from "framer-motion";

export default function Settings(){
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: false,
      sms: true,
    },
    security: {
      twoFactor: false,
      loginAlerts: true,
    },
    profile: {
      name: 'Fatima Al-Nasser',
      email: 'fatima@designstudio.com',
      phone: '+971 (50) 123-4567',
    },
  });

  const updateSettings = (category, key, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value
      }
    }));
  };

  const settingSections = [
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Manage how you receive notifications',
      settings: [
        { key: 'email', label: 'Email Notifications', type: 'toggle' },
        { key: 'push', label: 'Push Notifications', type: 'toggle' },
        { key: 'sms', label: 'SMS Alerts', type: 'toggle' },
      ]
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Manage your security preferences',
      settings: [
        { key: 'twoFactor', label: 'Two-Factor Authentication', type: 'toggle' },
        { key: 'loginAlerts', label: 'Login Alerts', type: 'toggle' },
      ]
    },
    {
      icon: User,
      title: 'Profile',
      description: 'Update your personal information',
      settings: [
        { key: 'name', label: 'Full Name', type: 'text' },
        { key: 'email', label: 'Email Address', type: 'email' },
        { key: 'phone', label: 'Phone Number', type: 'tel' },
      ]
    },
  ];

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
            Settings
          </h1>
          <p style={{
            fontSize: "0.875rem",
            color: "var(--muted-foreground)",
            marginTop: "0.25rem"
          }}>
            Manage your account settings and preferences
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
          aria-label="Save changes"
        >
          <Save style={{ width: "1rem", height: "1rem" }} />
          <span>Save Changes</span>
        </Button>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
        gap: "1.5rem"
      }}>
        {settingSections.map((section, index) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={section.title}
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
                gap: "0.75rem",
                marginBottom: "1rem"
              }}>
                <div style={{
                  width: "3rem",
                  height: "3rem",
                  background: "var(--primary-100)",
                  borderRadius: "var(--radius)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <Icon style={{ width: "1.5rem", height: "1.5rem", color: "var(--primary)" }} />
                </div>
                <div>
                  <h3 style={{
                    fontSize: "1.125rem",
                    fontWeight: "var(--font-semibold)",
                    color: "var(--foreground)"
                  }}>
                    {section.title}
                  </h3>
                  <p style={{
                    fontSize: "0.75rem",
                    color: "var(--muted-foreground)"
                  }}>
                    {section.description}
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {section.settings.map((setting) => (
                  <div key={setting.key} style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}>
                    <label style={{
                      fontSize: "0.875rem",
                      fontWeight: "var(--font-medium)",
                      color: "var(--foreground)"
                    }}>
                      {setting.label}
                    </label>
                    {setting.type === 'toggle' ? (
                      <Button
                        onClick={() => updateSettings(section.title.toLowerCase(), setting.key, !settings[section.title.toLowerCase()][setting.key])}
                        style={{
                          position: "relative",
                          display: "inline-flex",
                          height: "1.5rem",
                          width: "2.75rem",
                          alignItems: "center",
                          borderRadius: "var(--radius-full)",
                          background: settings[section.title.toLowerCase()][setting.key] ? "var(--primary)" : "var(--muted)",
                          transition: "all var(--transition-base)"
                        }}
                        className="focus-ring"
                        aria-label={`${setting.label} ${settings[section.title.toLowerCase()][setting.key] ? 'enabled' : 'disabled'}`}
                      >
                        <span style={{
                          display: "inline-block",
                          height: "1rem",
                          width: "1rem",
                          borderRadius: "50%",
                          background: "var(--background)",
                          transform: settings[section.title.toLowerCase()][setting.key] ? "translateX(1.25rem)" : "translateX(0.25rem)",
                          transition: "transform var(--transition-base)"
                        }} />
                      </Button>
                    ) : (
                      <input
                        type={setting.type}
                        value={settings[section.title.toLowerCase()][setting.key]}
                        onChange={(e) => updateSettings(section.title.toLowerCase(), setting.key, e.target.value)}
                        style={{
                          width: "8rem",
                          padding: "0.25rem 0.75rem",
                          border: "1px solid var(--border)",
                          borderRadius: "var(--radius)",
                          fontSize: "0.75rem",
                          background: "var(--background)",
                          color: "var(--foreground)",
                          transition: "all var(--transition-base)",
                          outline: "none"
                        }}
                        className="focus:ring-2 focus:ring-primary focus:border-transparent"
                        aria-label={`Edit ${setting.label}`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Additional Settings Cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
        gap: "1.5rem"
      }}>
        <div style={{
          background: "var(--background)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "var(--shadow-lg)",
          border: "1px solid var(--border)",
          padding: "var(--spacing-md)"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "1rem"
          }}>
            <Globe style={{ width: "1.5rem", height: "1.5rem", color: "var(--primary)" }} />
            <h3 style={{
              fontSize: "1.125rem",
              fontWeight: "var(--font-semibold)",
              color: "var(--foreground)"
            }}>
              Language & Region
            </h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <select
              style={{
                width: "100%",
                padding: "0.5rem",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                background: "var(--background)",
                color: "var(--foreground)",
                fontSize: "0.875rem",
                transition: "all var(--transition-base)",
                outline: "none"
              }}
              className="focus:ring-2 focus:ring-primary focus:border-transparent"
              aria-label="Select language"
            >
              <option>English (US)</option>
              <option>Arabic</option>
              <option>French</option>
            </select>
            <select
              style={{
                width: "100%",
                padding: "0.5rem",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                background: "var(--background)",
                color: "var(--foreground)",
                fontSize: "0.875rem",
                transition: "all var(--transition-base)",
                outline: "none"
              }}
              className="focus:ring-2 focus:ring-primary focus:border-transparent"
              aria-label="Select currency"
            >
              <option>United Arab Emirates (AED)</option>
              <option>United States (USD)</option>
              <option>Europe (EUR)</option>
            </select>
          </div>
        </div>

        <div style={{
          background: "var(--background)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "var(--shadow-lg)",
          border: "1px solid var(--border)",
          padding: "var(--spacing-md)"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "1rem"
          }}>
            <CreditCard style={{ width: "1.5rem", height: "1.5rem", color: "var(--primary)" }} />
            <h3 style={{
              fontSize: "1.125rem",
              fontWeight: "var(--font-semibold)",
              color: "var(--foreground)"
            }}>
              Billing Information
            </h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <p style={{
              fontSize: "0.75rem",
              color: "var(--muted-foreground)"
            }}>
              Current Plan: <strong>Premium Design Studio</strong>
            </p>
            <p style={{
              fontSize: "0.75rem",
              color: "var(--muted-foreground)"
            }}>
              Next Billing Date: January 30, 2025
            </p>
            <Button
              style={{
                width: "100%",
                padding: "0.5rem",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                background: "transparent",
                color: "var(--muted-foreground)",
                fontSize: "0.75rem",
                minHeight: "44px",
                transition: "all var(--transition-base)"
              }}
              className="hover:bg-muted hover:text-foreground focus-ring"
              aria-label="Update payment method"
            >
              Update Payment Method
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};