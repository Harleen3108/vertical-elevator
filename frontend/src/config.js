// Automatically switches between Localhost and the VITE_API_URL environment variable (set in Render)
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
