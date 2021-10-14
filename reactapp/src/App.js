import React from "react";
import {Route,Switch,Redirect,Link} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Productpage1 from "./components/ProductPage";
import Cart from "./components/Cart";
import "./index.css";
import ProductDetails from "./components/productdetails"

const App = () => {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path='/home' component={Home}/>
    <Route exact path='/contact' component={Contact}/>
    <Route exact path='/productpage1' component={Productpage1}/>
    <Route exact path='/cart' component={Cart}/>
    <Route exact path='/productdetails' component={ProductDetails}/>
    <Redirect to="/home"/>
    // <Route component={Error}/>
    </Switch>
    <Footer/>
    </>
  );
};

export default App;
