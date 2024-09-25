// src/services/authService.js

import axios from 'axios';

const API_URL = 'http://tu-api-url.com/api'; // Reemplaza con tu URL de API

const login = async (identificationType, identificationNumber, birthDate) => {
    const response = await axios.post(`${API_URL}/login`, {
        identificationType,
        identificationNumber,
        birthDate,
    });
    if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

const logout = () => {
    localStorage.removeItem('user');
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

export default {
    login,
    logout,
    getCurrentUser,
};
