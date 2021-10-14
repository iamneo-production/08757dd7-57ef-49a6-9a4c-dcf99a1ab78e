import React from 'react';
import '../home.css';
import {Route,Switch,Redirect,NavLink} from "react-router-dom";
import ScriptTag from 'react-script-tag';
import {Helmet} from "react-helmet";

const Footer = () => {
    return (
      <>
<div className="footer">
  <div className="container">
    <div className="row">
      <div className="footer-col-1">
        <h3>Download our App</h3>
        <p>Download App for Android and ios moblie phone.</p>
        <div className="app-logo">
          <NavLink className="footerarc" to="#"><img src="images/play-store.png" alt=""/></NavLink>
          <NavLink className="footerarc" to="#"><img src="images/app-store.png" alt=""/></NavLink>
        </div>
      </div>
      <div className="footer-col-2">
        <img src="" alt=""/>
        <p>Our Purpose to Sustainably Make the Pleasure and
        Benefts of Sports Accessible to the Many.</p>
      </div>
      <div className="footer-col-3">
        <h3>Useful Links  </h3>
        <ul>
          <NavLink className="footerarc" to="#"><li>Coupons</li></NavLink>
          <NavLink className="footerarc" to="#"><li>Blog Post</li></NavLink>
          <NavLink className="footerarc" to="#"><li>Return Policy</li></NavLink>
          <NavLink className="footerarc" to="#"><li>Coupons</li></NavLink>
          <NavLink className="footerarc" to="#"><li>Join Affiliate</li></NavLink>
        </ul>
      </div>
      <div className="footer-col-4">
        <h3>  Follow us</h3>
        <ul>
          <NavLink className="footerarc" to="#"><li>Facebook</li></NavLink>
          <NavLink className="footerarc" to="#"><li>twitter</li></NavLink>
          <NavLink className="footerarc" to="#"><li>Instagram</li></NavLink>
          <NavLink className="footerarc" to="#"><li>YouTube</li></NavLink>
        </ul>
      </div>
    </div>
    <hr/>

    <p className="copyright">Copyright 2021</p>
  </div>
</div>

</>
);
};

export default Footer;
