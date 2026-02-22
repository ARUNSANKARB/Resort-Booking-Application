// src/api/axios.js
// Simple axios wrapper so all API calls use the same baseURL & error handling.
// Edit baseURL if your backend is hosted somewhere else.

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8081", // backend URL
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

// optional: response interceptor to handle auth / errors globally
api.interceptors.response.use(
  (res) => res,
  (err) => {
    // Simple friendly error message for beginners
    const message =
      err?.response?.data?.message ||
      err?.message ||
      "Network error. Check backend or CORS.";
    return Promise.reject(new Error(message));
  }
);

export default api;
