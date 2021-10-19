import React, {Component} from 'react';
import '../home.css';
import {Route,Switch,Redirect,NavLink} from "react-router-dom";
import ScriptTag from 'react-script-tag';
import {Helmet} from "react-helmet";

class Userorder extends Component{
  render(){
    return (
      <>
      <div className="small-containeru  cart-pageu">
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
                  <h1 className="cartproductname"><p><b>THE BLAZZE Men's Athletic Fit Tank Top</b></p></h1>
                <form className="" name="remove_product" action="" method="post">
                <input type="hidden" name="product_name" value=''/>
                <input type="hidden" name="product_path" value=''/>
                </form>
                </td>
                <td>
                <form className="" action="manage_cart.php" method="post">
                  <input type="number" className="iquantity" name = "" onchange = ""  value="2" min="1" max="10" disabled/>
                </form>
                </td>
              <td className="itotal">Rs. 100000</td>
              </tr>
      </tbody>
      </table>
      </div>
      </>
  );
  }
}


export default Userorder;
