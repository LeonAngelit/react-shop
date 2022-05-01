import React from 'react';
import '@styles/ProductList.css';
import ProductCard from '@components/ProductCard';
import useGetProducts from '../hooks/useGetProducts';
const API = "https://api.escuelajs.co/api/v1/products";


const ProductList = () => {
  const products = useGetProducts(API);
    return ( 
        <section className="product-list-container">
        <div className="list__cards-container">
          {products.map(product =>(
             <ProductCard product={product} key={product.id}/>
          ))}
        </div>
      </section>
     );
}
 
export default ProductList;