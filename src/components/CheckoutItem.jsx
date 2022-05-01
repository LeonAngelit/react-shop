import React from 'react';
import '@styles/CheckoutItem.css';


const CheckoutItem = ({product}) => {
    return ( 
  <li className="item">
  <div className="item-info">
    <img src={product.images[0]} alt="bici" />
    <p>{product.title}</p>
  </div>
  <div className="item-amount">
    <p>${product.price}</p>
  </div>
</li>

     );
}
 
export default CheckoutItem;