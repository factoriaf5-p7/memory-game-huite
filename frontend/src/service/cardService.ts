import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const getGameInfo = async () => {
    try {
        const response = await axios.get(`${API_URL}/game`);
        return response.data;
    } catch (error) {
        console.error('Error fetching game info:', error);
        throw error;
    }
};