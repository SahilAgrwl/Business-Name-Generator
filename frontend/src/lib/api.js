import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export const generateNames = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/generate-names`, formData);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw new Error(error.response?.data?.message || 'Failed to generate names');
  }
};