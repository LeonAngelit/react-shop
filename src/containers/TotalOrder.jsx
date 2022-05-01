import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import '@styles/TotalOrder.scss';

const TotalOrder = ({params, image, index}) => {
  const {setOrder} = useContext(AppContext);
    return(
      <div className="total-order">
      <div className="order-info">
        <p className="date">{params ? params.date: null}</p>
        <p>{params ? params.articles.length : null} articles</p>
      </div>
      <div className="total-amount">
        <p> ${params ? params.amount: null}</p>
          {image ? <a onClick={() => setOrder(index)} href="my-order"><img src={image} alt="" /></a> : null}
      </div>
      </div>
    );
 
}
 
export default TotalOrder;