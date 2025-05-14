import API from './api';

// Benutzer registrieren
export const registerUser = async (username, email, password) => {
  const response = await API.post('accounts/register/', { username, email, password });
  return response.data;
};

// Benutzer einloggen
export const loginUser = async (username, password) => {
  const response = await API.post('accounts/token/', { username, password });
  return response.data;
};

// Token erneuern
export const refreshToken = async (refresh) => {
  const response = await API.post('accounts/token/refresh/', { refresh });
  return response.data;
};