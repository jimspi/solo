import axios from 'axios';
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';
const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
export const api = axios.create({
  baseURL: API_URL,
  headers: token ? { Authorization: `Bearer ${token}` } : {},
});
