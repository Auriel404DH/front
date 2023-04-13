import axios from 'axios';

export const mainInstance = axios.create({
  baseURL: 'http://localhost:4444',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});
