import React, {useContext} from 'react';
import Close from '@assets/icons/icon_close.png'
import AppContext from '../context/AppContext';

const CartItem = ({product, indexValue}) => {
  const {removeFromCart} = useContext(AppContext);
    return (
        <li className="cart-item">
      <div className="cart-item-info">
        <img src={product.images[0]} alt="bici" />
        <p>{product.title}</p>
      </div>
      <div className="cart-item-amount">
        <p>${product.price}</p>
        <img src={Close} alt="close" onClick={()=>removeFromCart(indexValue)} />
      </div>
    </li>
      );
}
 
export default CartItem;