import React, {useContext, useState} from "react";
import '@styles/Header.css';
import Logo from '@assets/logos/logo_yard_sale.svg';
import Cart from '@assets/icons/icon_shopping_cart.svg';
import IconMenu from '@assets/icons/icon_menu.svg';
import DesktopMenu from '@components/DesktopMenu';
import ShoppingCart from '@containers/ShoppingCart';
import AppContext from "../context/AppContext";
import MobileMenu from "@components/MobileMenu";


const Header = () =>{
  const [toggle,setToggle] = useState(false);
  const [toggleMobile,setToggleMobile] = useState(false);
  const {state} = useContext(AppContext);
  const {handleModal} = useContext(AppContext);
  const handleToggle = ()=>{
    return setToggle(!toggle);
  }
  const handleToggleMobile = ()=>{
    return setToggleMobile(!toggleMobile);
  }
  const handleCart = () =>{
    handleModal();
  }
    return(
<header className="navbar-container">
  <div className="logo-menu" onClick={() => handleToggleMobile()} >
    <img src={IconMenu} alt="Menu" />
  </div>
  <div className="logo">
    <a onClick={() =>location.replace("./")}> <img src={Logo} alt="Logo Tienda" /></a>
  </div>
  <nav className="navigation">
    <ul className="option-list">
      <li className="nav-option"><a href>All</a></li>
      <li className="nav-option"><a href>Clothes</a></li>
      <li className="nav-option"><a href>Electronics</a></li>
      <li className="nav-option"><a href>Furniture</a></li>
      <li className="nav-option"><a href>Toys</a></li>
      <li className="nav-option"><a href>Others</a></li>
    </ul>
  </nav>
  <div className="account-state">
    <a onClick={() => handleToggle()}>exampleUser</a>
    <img src={Cart} alt="Cart"  onClick={() => handleCart()} />
   {state.cart.length > 0 ?  <div className="shopping-cart-notification">{state.cart.length}</div> : null}
  </div>
  <div className="modals-container">
  {toggle && <DesktopMenu />}
  {state.toggleModal && <ShoppingCart />}
  </div>
  {toggleMobile && <MobileMenu />}
</header>
    );

}

export default Header;