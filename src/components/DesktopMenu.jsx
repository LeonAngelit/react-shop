import React from 'react';
import '@styles/DesktopMenu.css';
//Okey
const DesktopMenu = () => {
    return ( <nav className="menu">
  <ul>
    <li><a onClick={() =>location.replace("./#/my-orders")}>My orders</a></li>
    <li><a onClick={() =>location.replace("./#/my-account")}>My account</a></li>
    <li><a  className="sign-out">Sign out</a></li>
  </ul>
</nav>
 );
}
 
export default DesktopMenu;