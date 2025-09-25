import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Payment from "./pages/Payment";
import Portfolio from "./pages/Portfolio";
import Project from "./Pages/Project";
import Quote from "./pages/Quote";
import Admin from "./pages/Admin";
import ErrorPage from "./pages/404";

import Dashboard from './pages/admin';
import DashboardLayout from './pages/Admin/DashboardLayout';
import AdminLogin from './pages/Admin/AdminLogin';
import Payments from './pages/Admin/Pages/Payments';
import Blog from './pages/Admin/Pages/Blog';
import Projects from './pages/Admin/Pages/Projects';
import Settings from './pages/Admin/Pages/Settings';

import Residential from "./Pages/Services/Residential";
import Commercial from "./Pages/Services/Commercial";
import Management from "./Pages/Services/Management";
import Renovation from "./Pages/Services/Renovation";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

// Authentication check functions
const isAdminAuthenticated = () => {
  return localStorage.getItem("adminAuthenticated") === "true";
};

const isUserAuthenticated = () => {
  return localStorage.getItem("adminToken") !== null;
};

// Protected Route component for admin dashboard
const AdminProtectedRoute = ({ children }) => {
  return isAdminAuthenticated() ? children : <Navigate to="/admin/login" replace />;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public Routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="services" element={<Services />} />
        <Route path="services/renovation" element={<Renovation />} />
        <Route path="services/commercial" element={<Commercial />} />
        <Route path="services/management" element={<Management />} />
        <Route path="services/residential" element={<Residential />} />
        <Route path="payment" element={<Payment />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="portfolio/:id" element={<Project />} />
        <Route path="quote" element={<Quote />} />
        <Route path="team" element={<Team />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>

      {/* Admin Authentication Routes */}
      <Route path="/admin/login" element={<AdminLogin />} />
      
      {/* Admin Dashboard Routes */}
      <Route 
        path="/admin" 
        element={
          <AdminProtectedRoute>
            <DashboardLayout />
          </AdminProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="payments" element={<Payments />} />
        <Route path="blog" element={<Blog />} />
        <Route path="projects" element={<Projects />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      <Route
        path="legacy-admin"
        element={
          <ProtectedRoute isAuthenticated={isUserAuthenticated} redirectPath="/">
            <Admin />
          </ProtectedRoute>
        }
      />

      {/* Redirect root admin path to dashboard */}
      <Route path="/admin" element={<Navigate to="/admin" replace />} />
    </>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;