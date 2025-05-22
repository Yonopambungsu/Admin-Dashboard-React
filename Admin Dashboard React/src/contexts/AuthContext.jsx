import React, { createContext, useContext, useState, useEffect } from 'react';
import api from 'axiosInstance';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    try {
      await api.get('api/auth/userinfo'); // pastikan cookie dikirim
      setIsAuth(true);
    } catch {
      setIsAuth(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
