import React from 'react';
import '@styles/DesktopMenu.css';

const DesktopMenu = () => {
    return ( <nav className="menu">
  <ul>
    <li><a href=".#/my-orders">My orders</a></li>
    <li><a href='.#/my-account'>My account</a></li>
    <li><a  className="sign-out">Sign out</a></li>
  </ul>
</nav>
 );
}
 
export default DesktopMenu;