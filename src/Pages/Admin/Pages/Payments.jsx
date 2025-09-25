import React, { useState } from 'react';
import { Search, Filter, Download, MoreVertical, CheckCircle, XCircle, Clock } from 'lucide-react';
import { Button } from "./../../../components/ui/button";
import { motion } from "framer-motion";

export default function Payments(){
  const [searchTerm, setSearchTerm] = useState('');
  
  const payments = [
    { id: '#INV-001', customer: 'Fatima Al-Nasser', amount: '$5,500', status: 'completed', date: '2024-01-15', method: 'Credit Card', description: 'Residential Redesign' },
    { id: '#INV-002', customer: 'Noora Al-Qasimi', amount: '$8,750', status: 'pending', date: '2024-01-14', method: 'PayPal', description: 'Office Renovation' },
    { id: '#INV-003', customer: 'Ahmad Al-Mansoori', amount: '$3,200', status: 'completed', date: '2024-01-14', method: 'Bank Transfer', description: 'Apartment Styling' },
    { id: '#INV-004', customer: 'Mohammed Al-Khalidi', amount: '$1,900', status: 'failed', date: '2024-01-13', method: 'Credit Card', description: 'Kitchen Remodel' },
    { id: '#INV-005', customer: 'Sara Al-Hamadi', amount: '$6,400', status: 'completed', date: '2024-01-12', method: 'PayPal', description: 'Commercial Interior Design' },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle style={{ width: "1rem", height: "1rem", color: "var(--success)" }} />;
      case 'pending': return <Clock style={{ width: "1rem", height: "1rem", color: "var(--warning)" }} />;
      case 'failed': return <XCircle style={{ width: "1rem", height: "1rem", color: "var(--destructive)" }} />;
      default: return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return { background: 'var(--success-100)', color: 'var(--success)' };
      case 'pending': return { background: 'var(--warning-100)', color: 'var(--warning)' };
      case 'failed': return { background: 'var(--destructive-100)', color: 'var(--destructive)' };
      default: return {};
    }
  };

  const filteredPayments = payments.filter(payment =>
    payment.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    payment.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            Payments
          </h1>
          <p style={{
            fontSize: "0.875rem",
            color: "var(--muted-foreground)",
            marginTop: "0.25rem"
          }}>
            Manage and track all payment transactions
          </p>
        </div>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <Button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem 1rem",
              background: "transparent",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              color: "var(--muted-foreground)",
              fontWeight: "var(--font-medium)",
              minHeight: "44px",
              transition: "all var(--transition-base)"
            }}
            className="hover:bg-muted hover:text-foreground focus-ring"
            aria-label="Filter payments"
          >
            <Filter style={{ width: "1rem", height: "1rem" }} />
            <span>Filter</span>
          </Button>
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
            aria-label="Export payments"
          >
            <Download style={{ width: "1rem", height: "1rem" }} />
            <span>Export</span>
          </Button>
        </div>
      </div>

      {/* Search and Stats */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
        gap: "1.5rem"
      }}>
        <div style={{ gridColumn: "span 3 / span 3", '@media (max-width: 1024px)': { gridColumn: "span 1 / span 1" } }}>
          <div style={{ position: "relative" }}>
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
              placeholder="Search payments..."
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
              aria-label="Search payments"
            />
          </div>
        </div>
        <div style={{
          background: "var(--primary-100)",
          borderRadius: "var(--radius-xl)",
          padding: "1rem",
          boxShadow: "var(--shadow-lg)",
          border: "1px solid var(--border)"
        }}>
          <p style={{
            fontSize: "0.75rem",
            color: "var(--primary)",
            marginBottom: "0.5rem"
          }}>
            Total Revenue
          </p>
          <p style={{
            fontSize: "1.5rem",
            fontWeight: "var(--font-bold)",
            color: "var(--primary-900)"
          }}>
            $25,750
          </p>
        </div>
      </div>

      {/* Payments Table */}
      <div style={{
        background: "var(--background)",
        borderRadius: "var(--radius-xl)",
        boxShadow: "var(--shadow-lg)",
        border: "1px solid var(--border)",
        overflow: "hidden"
      }}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead style={{ background: "var(--muted)" }}>
              <tr>
                {['Invoice ID', 'Customer', 'Amount', 'Description', 'Status', 'Date', 'Method', 'Actions'].map((header) => (
                  <th
                    key={header}
                    style={{
                      padding: "0.75rem 1.5rem",
                      textAlign: "left",
                      fontSize: "0.75rem",
                      fontWeight: "var(--font-medium)",
                      color: "var(--muted-foreground)",
                      textTransform: "uppercase"
                    }}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody style={{ borderTop: "1px solid var(--border)" }}>
              {filteredPayments.map((payment, index) => (
                <motion.tr
                  key={payment.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  style={{
                    borderBottom: "1px solid var(--border)",
                    transition: "all var(--transition-base)"
                  }}
                  className="hover:bg-muted"
                >
                  <td style={{
                    padding: "1rem 1.5rem",
                    fontSize: "0.875rem",
                    fontWeight: "var(--font-medium)",
                    color: "var(--foreground)",
                    whiteSpace: "nowrap"
                  }}>
                    {payment.id}
                  </td>
                  <td style={{
                    padding: "1rem 1.5rem",
                    fontSize: "0.875rem",
                    color: "var(--foreground)",
                    whiteSpace: "nowrap"
                  }}>
                    {payment.customer}
                  </td>
                  <td style={{
                    padding: "1rem 1.5rem",
                    fontSize: "0.875rem",
                    fontWeight: "var(--font-medium)",
                    color: "var(--foreground)",
                    whiteSpace: "nowrap"
                  }}>
                    {payment.amount}
                  </td>
                  <td style={{
                    padding: "1rem 1.5rem",
                    fontSize: "0.875rem",
                    color: "var(--foreground)",
                    whiteSpace: "nowrap"
                  }}>
                    {payment.description}
                  </td>
                  <td style={{ padding: "1rem 1.5rem", whiteSpace: "nowrap" }}>
                    <span style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.25rem",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "var(--radius-full)",
                      fontSize: "0.75rem",
                      fontWeight: "var(--font-medium)",
                      ...getStatusColor(payment.status)
                    }}>
                      {getStatusIcon(payment.status)}
                      <span style={{ textTransform: "capitalize" }}>{payment.status}</span>
                    </span>
                  </td>
                  <td style={{
                    padding: "1rem 1.5rem",
                    fontSize: "0.875rem",
                    color: "var(--muted-foreground)",
                    whiteSpace: "nowrap"
                  }}>
                    {payment.date}
                  </td>
                  <td style={{
                    padding: "1rem 1.5rem",
                    fontSize: "0.875rem",
                    color: "var(--muted-foreground)",
                    whiteSpace: "nowrap"
                  }}>
                    {payment.method}
                  </td>
                  <td style={{ padding: "1rem 1.5rem", whiteSpace: "nowrap" }}>
                    <Button
                      style={{
                        padding: "0.5rem",
                        background: "transparent",
                        color: "var(--muted-foreground)",
                        borderRadius: "var(--radius)",
                        transition: "all var(--transition-base)"
                      }}
                      className="hover:bg-muted hover:text-foreground focus-ring"
                      aria-label={`More actions for invoice ${payment.id}`}
                    >
                      <MoreVertical style={{ width: "1rem", height: "1rem" }} />
                    </Button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};