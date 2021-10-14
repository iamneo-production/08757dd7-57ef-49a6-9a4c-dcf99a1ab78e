import React, { useState,Component} from 'react';
import '../home.css';
import {Route,Switch,Redirect,NavLink} from "react-router-dom";
import ScriptTag from 'react-script-tag';
import {Helmet} from "react-helmet";


<Helmet>
  <script src="menutoggle.js" type="text/javascript"/>
</Helmet>


const Navbar = () => {

  const [toggle, setToggle] = useState(false)
  const handleToggle=()=>{
    setToggle(!toggle)
  }

    return (
      <>
      <div className="header">
      <div className="container">
        <div className="navbar" id="userNavbar">
          <div className="logo">
            <marquee direction="">
            <NavLink className="navlink" to="about"><img src="" width="125px" alt="no"/></NavLink>
            </marquee>
          </div>
          <nav>
            <ul id="menuitems" className={toggle ? "yes" : "no"} >
              <li><NavLink className="navarc" id="instrumentHomeButton" to ="home">Home</NavLink></li>
              <li><NavLink className="navarc" to ="productpage1">Products</NavLink></li>
              <li><NavLink className="navarc" to ="contact">Contact</NavLink></li>
              <li><NavLink className="navarc" to ="login">Account</NavLink></li>
              <li><NavLink className="navarc" to ="UserOrders">My Orders</NavLink></li>
              <li><NavLink className="navarc" to ="admin-login">Admin</NavLink></li>
              <li><NavLink className="navarc" id="logoutButton" to="logout">Log Out</NavLink></li>
            </ul>
            <NavLink to="Cart"><img  src="images/cart.png" alt="" width="30px" height="30px" id="instrumentCartButton"/></NavLink>
          </nav>
          <img src="images/menu.png" className="menu-icon" alt="no image" onClick={handleToggle}></img>
        </div>
        </div>
        </div>
      </>
    );
};
export default Navbar;