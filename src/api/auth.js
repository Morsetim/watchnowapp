import axios from 'axios';

const API_URL = 'https://watchnow-bcknd-morsetim.onrender.com/api/auth';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Registration failed";
  }
};