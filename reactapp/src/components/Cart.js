import React, {Component} from 'react';
import '../home.css';
import {Route,Switch,Redirect,NavLink} from "react-router-dom";
import ScriptTag from 'react-script-tag';
import {Helmet} from "react-helmet";

class Cart extends Component{
  render(){
    return (
      <>
      <div className="small-containeru  cart-pageu">
      <table className="carttableu">
        <thead className="theadu">
        <tr className="tru">
        <th className = "cartth">Product</th>
        <th className = "cartth">Quantity</th>
        <th className = "cartth">Sub-Total</th>
      </tr>
      </thead>
      <tbody>
              <tr className="tru">
                <td className="carttd" >
              <div className="cart-infou">
                <img src="images/image1.png" width ="500px" height="500px"/>
              </div>
                  <h1 className="cartproductnameu"><p><b>THE BLAZZE Men's Athletic Fit Tank Topdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</b></p></h1>
                  <small><h2 className="cartpriceu"><b>Rs.20</b></h2><input type="hidden" className = "iprice" value=""/>
                  </small>
                <form className="" name="remove_product" action="" method="post">
                <button className="buttonu" name="remove">REMOVE</button>
                <button className="paymentu" type="buttonu"> <NavLink className="pay" to="">BUY NOW</NavLink></button>
                <input type="hidden" name="product_name" value=''/>
                <input type="hidden" name="product_path" value=''/>
                </form>
                </td>
                <td className="carttd" >
                <form className="" action="manage_cart.php" method="post">
                  <input type="number" className="iquantityu" name = "" onchange = ""  value="2" min="1" max="10"/>
                </form>
                </td>
              <td className="carttd">Rs. 100000</td>
              </tr>
      </tbody>
      </table>
      </div>
      <div className="total-priceu">
      <table border="0">
        <thead>
        <tr>
          <td className="carttd" ><b>Price Details</b></td>
          <td className="carttd" ></td>
        </tr>
      </thead>
        <tbody>
        <tr>
          <td className="carttd" width="100"><b>Total Amount</b></td>
          <td className="carttd" width="40" id ="gtotal" name ="total"><b>Rs. 10000</b></td>
        </tr>
        </tbody>
      </table>
        <form className="" action="payment.php" method="post">
        <button className="paymentu" type="submit" name ="cartpayment"><NavLink className="pay" to="">PAY NOW</NavLink></button>
        <input type="hidden" name="total" value=""/>
        <input type="hidden" name="secret" value=""/>
        </form>
      </div>
      </>
  );
  }
}


export default Cart;
