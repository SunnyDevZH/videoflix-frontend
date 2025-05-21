import axios from 'axios';

// URLs definieren
const LOCAL_URL = 'http://127.0.0.1:8000/';
const GOOGLE_CLOUD_URL = 'http://34.65.22.205/';

// Aktuell verwendete URL (hier kannst du einfach wechseln)
export const CURRENT_URL = GOOGLE_CLOUD_URL; // Exportiere CURRENT_URL

// Zentrale Axios-Instanz
const API = axios.create({
  baseURL: CURRENT_URL, // Aktuelle Basis-URL
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