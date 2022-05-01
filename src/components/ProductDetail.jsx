import React from 'react';
import '../styles/ProductDetail.css';
import Bici from '../../public/assets/images/bici.jpg';
import Close from '../../public/assets/icons/icon_close.png';

const ProductDetail = () => {
    return ( 
        <section className="product-detail">
  <div className="detail__cards-container">
    <div className="detail__product-card">
      <img src={Bici} alt="bike" />
      <div className="points">
        <li />
        <li />
        <li />
      </div>
      <div className="description">
        <div className="text">
          <h3>$ 120.00</h3>
          <p>Urban bike</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus atque soluta quam eius tempora vitae sapiente rerum autem quasi numquam</p>
        </div>
      </div>
      <div className="close"><img src={Close} alt /></div>
      <button className="primary-button">
        <span className="carrito" />
        Add to cart</button>
    </div>
  </div>
</section>

     );
}
 
export default ProductDetail;