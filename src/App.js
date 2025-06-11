// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Halaman publik
import LandingPage from './pages/LandingPage';
import Register from './pages/Register';
import LoginUMKM from './pages/LoginUMKM';

// Halaman pribadi / UMKM
import StreamlitDashboard from './pages/StreamlitDashboard'; // ← Ganti ini
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';

// Komponen proteksi
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login-umkm" element={<LoginUMKM />} />
        <Route path="/login" element={<Navigate to="/login-umkm" replace />} />

        {/* Protected Routes (hanya untuk UMKM) */}
        <Route
          path="/dashboard-umkm"
          element={
            <PrivateRoute allowedRole="umkm">
              <StreamlitDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute allowedRole="umkm">
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit-profile"
          element={
            <PrivateRoute allowedRole="umkm">
              <EditProfile />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
