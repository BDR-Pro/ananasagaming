// authService.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}token/`, {
            username,
            password,
        });
        return response.data.access;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};

// Other authentication-related functions...

export default {
    login,
    // Other functions...
};
