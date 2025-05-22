import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'contexts/AuthContext';

const ProtectedRoute = () => {
  const { isAuth, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
