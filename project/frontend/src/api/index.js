import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({ baseURL: API_BASE });

export const getServices = () => api.get('/services');
export const getServiceBySlug = (slug) => api.get(`/services/${slug}`);
export const getTestimonials = () => api.get('/testimonials');
export const getPortfolios = () => api.get('/portfolios');
export const getPortfolioBySlug = (slug) => api.get(`/portfolios/${slug}`);
export const getTeamMembers = () => api.get('/team');
export const submitLead = (data) => api.post('/leads', data);

export default api;
