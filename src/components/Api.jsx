import axios from 'axios';

export const fetchLandingData = async () => {
  try {
    const response = await axios.get('http://localhost:5000/landing');
    return response.data;
  } catch (error) {
    throw error;
  }
};