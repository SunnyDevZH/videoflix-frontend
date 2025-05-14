import axios from 'axios';

// Zentrale Axios-Instanz
const API = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/', // Backend-URL
  timeout: 5000, // Timeout für Anfragen
});

// Interceptor für Anfragen (z. B. JWT-Token hinzufügen)
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;