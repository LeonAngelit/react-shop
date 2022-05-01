import React, {useContext} from 'react';
import '@styles/ShoppingCart.css';
import Back from '@assets/icons/flechita.svg'
import CartItem from '@components/CartItem';
import AppContext from '../context/AppContext';


const ShoppingCart = () => {
  const {state} = useContext(AppContext);
  const {handleModal} = useContext(AppContext);
  const {addCheckout} = useContext(AppContext);
  const handleCart = () =>{
    console.log(state.checkouts);
    handleModal();
  }

  const sumTotal = () =>{
    return state.cart.reduce((a,b) => a+b.price,0)
  }


    return (    
<div className="cart-container">
  <div className='cart-title'>
  <img src={Back} alt="Back" onClick={() => handleCart()}/>
  <h2>Shopping cart</h2>
  </div>
  <ul className="cart-items">
    {state.cart.map((product,index) =>(
       <CartItem product ={product} key={`cart-item-${index}`} indexValue={index}/>
    ))}
  </ul>
  <div>
  <div className="cart-total-order">
    <p>Total</p>
    <p> {state.cart.length > 0 ? `$${sumTotal()}`: 'No hay productos'}</p>
  </div>
  <button className="primary-button" onClick={() => addCheckout({amount: sumTotal(), articles: state.cart, date: new Date().toDateString()})}>Checkout</button>
  </div>
</div>
 );
}
 
export default ShoppingCart;