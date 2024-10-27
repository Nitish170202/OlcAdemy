// import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbars from '../components/Navbars';

function ProductDetails() {
  const { KEY } = useParams();
console.log("*****",KEY);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/product/${KEY}`);
        if (!response.ok) throw new Error('Product not found');
        
        const data = await response.json();
        console.log("not running data",data)
      } catch (err) {
        console.log(err);
      }
    };


    fetchProduct();
  }, [KEY]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

  return (
    <div>
    <Navbars/>
    Product is fetched perfectlly
    </div>
  );
}

export default ProductDetails;
