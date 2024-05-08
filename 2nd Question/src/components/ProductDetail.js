import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Fetch product details from the API
    axios.get(`http://20.244.56.144/test/companies/AMZ/categories/Laptop/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      })
  }, [id]);

  return (
    <div>
      {/* Render the product details here */}
    </div>
  );
}

export default ProductDetail;
