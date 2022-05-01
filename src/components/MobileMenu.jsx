import React from 'react';
import '../styles/MobileMenu.css';

const MobileMenu = () => {
    return ( 
<nav className="mobile-menu">
  <h2>CATEGORIES</h2>
  <ul className="section1">
    <li><a href>All</a></li>
    <li><a href>Clothes</a></li>
    <li><a href>Electronics</a></li>
    <li><a href>Furniture</a></li>
    <li><a href>Toys</a></li>
    <li><a href>Others</a></li>
  </ul>
  <ul className="section2">
    <li><a href='/My-orders'>My orders</a></li>
    <li><a href='/my-account'>My account</a></li>
  </ul>
  <div className="session-info">
    <p>camilayakoo@gmail.com</p>
    <a href>Sign out</a>
  </div>
</nav>

     );
}
 
export default MobileMenu;