import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/AdminLogin';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';

function AppContent() {
  const location = useLocation();
  const showLoginOverlay = location.pathname === '/admin/login';

  return (
    <>
      {/* Always render landing page as base */}
      {(location.pathname === '/' || showLoginOverlay) && <LandingPage />}
      
      {/* Show login as overlay */}
      {showLoginOverlay && <AdminLogin />}
      
      {/* Other routes */}
      {location.pathname === '/admin' && <AdminDashboard />}
      {location.pathname === '/privacy-policy' && <PrivacyPolicy />}
      {location.pathname === '/terms-and-conditions' && <TermsAndConditions />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}