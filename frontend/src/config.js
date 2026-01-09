// Automatically switches between Localhost and the VITE_API_URL environment variable
// For production, set VITE_API_URL in Vercel environment variables
// Example: VITE_API_URL=https://your-backend-url.com/api
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

console.log('API Base URL:', API_BASE_URL); // Debug log to check which URL is being used
