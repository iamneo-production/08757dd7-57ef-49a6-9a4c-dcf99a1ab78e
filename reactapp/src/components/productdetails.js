import React from 'react';
import '../home.css';
import {Route,Switch,Redirect,NavLink} from "react-router-dom";
import ScriptTag from 'react-script-tag';
import {Helmet} from "react-helmet";

const ProductDetails = () => {
  return (
    <>
    <div className ="productdetailpage">
    <div class = "content">
        <h2 className = "exploreproduct">Explore Product</h2>
          <img className="productdetailsimage" src="images/image1.png" width="50%" alt=""/>
          <br/>
          <h5>PRODUCT DETAILS</h5>
          <h1 className="productname">Product Name</h1>
          <h4 className="productdetailsprice">Approx Rs.20</h4>
          <h3>Product Details <i class="fa fa-indent"></i></h3>
          <br/>
          <p>
          Descrption Lorem is simply dummy text of the pinting and typesetting industry. Lorem Ipsum has been the indust
          Descrption Lorem is simply dummy text of the pinting and typesetting industry. Lorem Ipsum has been the indust
          Descrption Lorem is simply dummy text of the pinting and typesetting industry. Lorem Ipsum has been the indust
          Descrption Lorem is simply dummy text of the pinting and typesetting industry. Lorem Ipsum has been the indust</p>
          <button class="btn" type="button"><NavLink to="">Buy Now</NavLink></button>
        </div>
        </div>
    </>
);
};

export default ProductDetails;