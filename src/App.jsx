import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/index.jsx";
import About from "./pages/About/index.jsx";
import Services from "./pages/Services/index.jsx";
import Team from "./pages/Team/index.jsx";
import Pricing from "./pages/Pricing/index.jsx";
import Contact from "./pages/Contact/index.jsx";
import Payment from "./pages/Payment/index.jsx";
import Portfolio from "./pages/Portfolio/index.jsx";
import Project from "./Pages/Project/index.jsx";
import Quote from "./pages/Quote/index.jsx";
import ErrorPage from "./pages/404/index.jsx";

import Dashboard from './pages/admin/index.jsx';
import DashboardLayout from './pages/Admin/DashboardLayout.jsx';
import AdminLogin from './pages/Admin/AdminLogin.jsx';
import Payments from './pages/Admin/Pages/Payments.jsx';
import Blog from './pages/Admin/Pages/Blog.jsx';
import Projects from './pages/Admin/Pages/Projects.jsx';
import Settings from './pages/Admin/Pages/Settings.jsx';

import Residential from "./Pages/Services/Residential.jsx";
import Commercial from "./Pages/Services/Commercial.jsx";
import Management from "./Pages/Services/Management.jsx";
import Renovation from "./Pages/Services/Renovation.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
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