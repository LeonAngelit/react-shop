import React from "react";
import '@styles/EmailSent.css';
import Logo from '@assets/logos/logo_yard_sale.svg';
import Email from '@assets/icons/email.svg';

const EmailSent = () => {
    return ( <div className="email-sent">
  <span className="email__main-title">
    <img src={Logo} alt="logo yard sale" />
    <h1>Email has been sent!</h1>
    <p>Please check your inbox for instructions on how to reset the password</p>
  </span>
  <div className="email-sent-container">
    <img className="email-sent-img" src={Email} alt="email" />
  </div>
  <button type="submit" className="primary-button login-button">Login</button> 
  <p className="resend">
    <span>Didn't receive the email?</span>
    <a href="/">Resend</a>
  </p>
</div>
 );
}
 
export default EmailSent;