import React, {useContext} from 'react';
import '@styles/MyOrders.css';
import Flechita from '@assets/icons/flechita.svg';
import TotalOrder from './TotalOrder';
import AppContext from '../context/AppContext';

const MyOrders = () => {
  const {state} = useContext(AppContext);
    return (
<div className="orders-container">
  <h2>My orders</h2>
  <ul className="orders-list">
    {state.checkouts.map((checkout, index) =>(
       <TotalOrder params={checkout} image={Flechita} index={index}/>
    ))}
  </ul>
</div>

      );
}
 
export default MyOrders;