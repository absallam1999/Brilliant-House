import React from 'react';
import { Users, DollarSign, FileText, TrendingUp, Eye, Download } from 'lucide-react';
import { Button } from "../../components/ui/button";
import { motion } from "framer-motion";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

export default function Dashboard() {
  const stats = [
    { icon: Users, label: 'Total Clients', value: '2,847', change: '+12%', trend: 'up' },
    { icon: DollarSign, label: 'Revenue', value: '$185,000', change: '+8%', trend: 'up' },
    { icon: FileText, label: 'Design Projects', value: '156', change: '+5%', trend: 'up' },
    { icon: Eye, label: 'Portfolio Views', value: '48.2K', change: '-2%', trend: 'down' },
  ];

  const recentActivities = [
    { user: 'Fatima Al-Nasser', action: 'created new design project', time: '2 min ago' },
    { user: 'Noora Al-Qasimi', action: 'updated payment status', time: '10 min ago' },
    { user: 'Ahmad Al-Mansoori', action: 'published blog post', time: '1 hour ago' },
    { user: 'Sara Al-Hamadi', action: 'completed interior design project', time: '2 hours ago' },
  ];

  const getTrendColor = (trend) => {
    return trend === 'up' 
      ? { background: 'var(--success-100)', color: 'var(--success)' }
      : { background: 'var(--destructive-100)', color: 'var(--destructive)' };
  };

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    datasets: [{
      label: "Revenue (AED)",
      data: [15000, 18000, 22000, 20000, 25000, 30000, 28000, 32000, 35000],
      borderColor: "var(--primary)",
      backgroundColor: "rgba(var(--primary-rgb), 0.2)",
      fill: true,
      tension: 0.4
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Revenue (AED)",
          color: "var(--foreground)"
        },
        grid: {
          color: "var(--muted)"
        },
        ticks: {
          color: "var(--foreground)"
        }
      },
      x: {
        title: {
          display: true,
          text: "Month",
          color: "var(--foreground)"
        },
        grid: {
          display: false
        },
        ticks: {
          color: "var(--foreground)"
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: "var(--foreground)"
        }
      }
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
            Dashboard
          </h1>
          <p style={{
            fontSize: "0.875rem",
            color: "var(--muted-foreground)",
            marginTop: "0.25rem"
          }}>
            Welcome back, Fatima Al-Nasser! Here's what's happening today.
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
          aria-label="Generate report"
        >
          <Download style={{ width: "1rem", height: "1rem" }} />
          <span>Generate Report</span>
        </Button>
      </div>

      {/* Stats Grid */}
      <section
        role="region"
        aria-labelledby="stats-heading"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
          gap: "1.5rem"
        }}
      >
        <h2 id="stats-heading" style={{ display: "none" }}>Statistics</h2>
        {stats.map((stat, index) => (
          <motion.div
            key={index}
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
              gap: "1rem"
            }}>
              <div>
                <p style={{
                  fontSize: "0.875rem",
                  fontWeight: "var(--font-medium)",
                  color: "var(--muted-foreground)"
                }}>
                  {stat.label}
                </p>
                <p style={{
                  fontSize: "1.5rem",
                  fontWeight: "var(--font-bold)",
                  color: "var(--foreground)",
                  marginTop: "0.25rem"
                }}>
                  {stat.value}
                </p>
              </div>
              <div style={{
                padding: "0.75rem",
                borderRadius: "var(--radius)",
                ...getTrendColor(stat.trend)
              }}>
                <stat.icon style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  color: stat.trend === 'up' ? "var(--success)" : "var(--destructive)"
                }} />
              </div>
            </div>
            <div style={{
              display: "flex",
              alignItems: "center",
              marginTop: "0.75rem",
              fontSize: "0.75rem",
              ...getTrendColor(stat.trend)
            }}>
              <TrendingUp style={{ width: "1rem", height: "1rem", marginRight: "0.25rem" }} />
              <span>{stat.change} from last month</span>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Revenue Chart */}
      <section
        role="region"
        aria-labelledby="revenue-chart-heading"
        style={{
          background: "var(--background)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "var(--shadow-lg)",
          border: "1px solid var(--border)",
          padding: "var(--spacing-md)"
        }}
      >
        <h2 id="revenue-chart-heading" style={{
          fontSize: "1.125rem",
          fontWeight: "var(--font-semibold)",
          color: "var(--foreground)",
          marginBottom: "1rem"
        }}>
          Monthly Revenue Trend
        </h2>
        <div style={{
          position: "relative",
          height: "250px"
        }}>
          <Line
            data={chartData}
            options={chartOptions}
            aria-label="Monthly revenue trend chart"
          />
        </div>
      </section>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
        gap: "1.5rem"
      }}>
        {/* Recent Activity */}
        <section
          role="region"
          aria-labelledby="recent-activity-heading"
          style={{
            background: "var(--background)",
            borderRadius: "var(--radius-xl)",
            boxShadow: "var(--shadow-lg)",
            border: "1px solid var(--border)",
            padding: "var(--spacing-md)"
          }}
        >
          <h2 id="recent-activity-heading" style={{
            fontSize: "1.125rem",
            fontWeight: "var(--font-semibold)",
            color: "var(--foreground)",
            marginBottom: "1rem"
          }}>
            Recent Activity
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {recentActivities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.75rem",
                  borderRadius: "var(--radius)",
                  transition: "all var(--transition-base)"
                }}
                className="hover:bg-muted"
              >
                <div style={{
                  width: "2rem",
                  height: "2rem",
                  background: "var(--primary-100)",
                  borderRadius: "var(--radius-full)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <Users style={{ width: "1rem", height: "1rem", color: "var(--primary)" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{
                    fontSize: "0.875rem",
                    fontWeight: "var(--font-medium)",
                    color: "var(--foreground)"
                  }}>
                    {activity.user} <span style={{ color: "var(--muted-foreground)", fontWeight: "var(--font-normal)" }}>{activity.action}</span>
                  </p>
                  <p style={{
                    fontSize: "0.75rem",
                    color: "var(--muted-foreground)"
                  }}>
                    {activity.time}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section
          role="region"
          aria-labelledby="quick-actions-heading"
          style={{
            background: "var(--background)",
            borderRadius: "var(--radius-xl)",
            boxShadow: "var(--shadow-lg)",
            border: "1px solid var(--border)",
            padding: "var(--spacing-md)"
          }}
        >
          <h2 id="quick-actions-heading" style={{
            fontSize: "1.125rem",
            fontWeight: "var(--font-semibold)",
            color: "var(--foreground)",
            marginBottom: "1rem"
          }}>
            Quick Actions
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(8rem, 1fr))",
            gap: "1rem"
          }}>
            {[
              { label: 'New Design Project', icon: FileText, color: 'var(--primary)' },
              { label: 'View Payments', icon: DollarSign, color: 'var(--success)' },
              { label: 'Write Blog Post', icon: FileText, color: 'var(--purple-500)' },
              { label: 'Settings', icon: Users, color: 'var(--orange-500)' },
            ].map((action, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                style={{
                  padding: "1rem",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius)",
                  background: "transparent",
                  textAlign: "left",
                  transition: "all var(--transition-base)",
                  minHeight: "44px"
                }}
                className="hover:bg-muted hover:border-primary focus-ring"
                aria-label={action.label}
              >
                <action.icon style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  color: action.color,
                  marginBottom: "0.5rem"
                }} />
                <p style={{
                  fontSize: "0.875rem",
                  fontWeight: "var(--font-medium)",
                  color: "var(--foreground)"
                }}>
                  {action.label}
                </p>
              </motion.button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};