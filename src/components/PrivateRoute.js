import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  if (!isAuthenticated) {
    // Jika belum login, redirect ke halaman login UMKM
    return <Navigate to="/login-umkm" replace />;
  }

  // Jika sudah login, langsung render komponen anak (children)
  return children;
}

export default PrivateRoute;
