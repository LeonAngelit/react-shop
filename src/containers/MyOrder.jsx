import React, {useContext} from 'react';
import TotalOrder from '@containers/TotalOrder';
import '@styles/Checkout.css';
import CheckoutItem from "@components/CheckoutItem"
import AppContext from '../context/AppContext';
const MyOrder = () => {
     const {state} = useContext(AppContext);
    return ( 
 <div className="checkout-container">
  <h2>My order</h2>
  <TotalOrder params={state.checkouts[state.selectedOrder]}/>
  <ul className="items">
  {state.checkouts[state.selectedOrder].articles.map((product) =>(
       <CheckoutItem product ={product}/>
    ))}
  </ul>
</div>

     );
}
 
export default MyOrder;