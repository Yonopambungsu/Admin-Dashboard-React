// src/axiosInstance.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL || 'http://localhost:8080',  // Menggunakan VITE_ untuk variabel env
  headers: {
    'Content-Type': 'application/json',
  },
   withCredentials: true  // untuk kirim cookie!
});

export default api;
