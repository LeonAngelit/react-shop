import React, { useContext, useState } from 'react';
import AddCart from '@assets/icons/bt_add_to_cart.svg';
import AddedCart from '@assets/icons/bt_added_to_cart.svg';
import '@styles/ProductCard.scss';
import AppContext from '../context/AppContext';

const ProductCard = ({product}) => {
  const {state} = useContext(AppContext);
  const {addToCart} = useContext(AppContext);
  const {removeFromCart} = useContext(AppContext);

  const HandleClick = (item) =>{
    state.productIDs.includes(item.id) ? removeFromCart(state.productIDs.indexOf(item.id)) : addToCart(item);
  }
    return (
        <div className="home__product-card">
      <img src={product.images[0]} alt="bike" />
      <div className="home__description">
        <div className="text">
          <h3>${product.price}</h3>
          <p>{product.title}</p>
        </div>
        <figure onClick={()=>HandleClick(product)}>
          <img src={state.productIDs.includes(product.id) ? AddedCart: AddCart} alt="product" />
        </figure>
      </div>
    </div>
      );
}
 
export default ProductCard;