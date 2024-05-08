// src/components/AllProducts.js

import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/productService';

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        // Handle error
      }
    };

    getProducts();
  }, []);

  // Render product list using 'products' state

  return (
    <div>
      {/* Render product list */}
    </div>
  );
};

export default AllProducts;
