// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'https://dream-digit-server.onrender.com/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const resultAPI = {
  // Get today's results
  getTodayResults: async () => {
    try {
      const response = await api.get('/results/today');
      return response.data;
    } catch (error) {
      console.error('Error fetching today results:', error);
      return { success: false, data: null };
    }
  },

  // Get yesterday's results
  getYesterdayResults: async () => {
    try {
      const response = await api.get('/results/yesterday');
      return response.data;
    } catch (error) {
      console.error('Error fetching yesterday results:', error);
      return { success: false, data: null };
    }
  },

  // Get results history
  getResultsHistory: async () => {
    try {
      const response = await api.get('/results/history');
      return response.data;
    } catch (error) {
      console.error('Error fetching history:', error);
      return { success: false, data: [] };
    }
  },

  // Get specific date results
  getResultsByDate: async (date) => {
    try {
      const response = await api.get(`/results/date/${date}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching results by date:', error);
      return { success: false, data: null };
    }
  },
};

export default api;