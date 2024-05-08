// src/services/productService.js

import axios from 'axios';

const BASE_URL = 'http://20.244.56.144'; // Replace with actual API base URL

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
