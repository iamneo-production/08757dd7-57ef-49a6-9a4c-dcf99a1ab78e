import React, {Component} from 'react';
import '../home.css';
import {Route,Switch,Redirect,NavLink} from "react-router-dom";
import ScriptTag from 'react-script-tag';
import {Helmet} from "react-helmet";

class Cart extends Component{
  render(){
    return (
      <>
      <div className="small-container  cart-page">
      <table className="carttable">
        <thead>
        <tr>
        <th>Product</th>
        <th>Quantity</th>
        <th>Sub-Total</th>
      </tr>
      </thead>
      <tbody>
              <tr>
                <td>
              <div className="cart-info">
                <img src="images/image1.png" width ="500px" height="500px"/>
              </div>
                  <h1 className="cartproductname"><p><b>THE BLAZZE Men's Athletic Fit Tank Topdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</b></p></h1>
                  <small><h2 className="cartprice"><b>Rs.20</b></h2><input type="hidden" className = "iprice" value=""/>
                  </small>
                <form className="" name="remove_product" action="" method="post">
                <button className="button" name="remove">REMOVE</button>
                <button className="payment" type="button"> <NavLink className="pay" to="">BUY NOW</NavLink></button>
                <input type="hidden" name="product_name" value=''/>
                <input type="hidden" name="product_path" value=''/>
                </form>
                </td>
                <td>
                <form className="" action="manage_cart.php" method="post">
                  <input type="number" className="iquantity" name = "" onchange = ""  value="2" min="1" max="10"/>
                </form>
                </td>
              <td className="itotal">Rs. 100000</td>
              </tr>
      </tbody>
      </table>
      </div>
      <div className="total-price">
      <table border="0">
        <thead>
        <tr>
          <td><b>Price Details</b></td>
          <td></td>
        </tr>
      </thead>
        <tbody>
        <tr>
          <td width="100"><b>Total Amount</b></td>
          <td width="40" id ="gtotal" name ="total"><b>Rs. 10000</b></td>
        </tr>
        </tbody>
      </table>
        <form className="" action="payment.php" method="post">
        <button className="payment" type="submit" name ="cartpayment"><NavLink className="pay" to="">PAY NOW</NavLink></button>
        <input type="hidden" name="total" value=""/>
        <input type="hidden" name="secret" value=""/>
        </form>
      </div>
      </>
  );
  }
}


export default Cart;