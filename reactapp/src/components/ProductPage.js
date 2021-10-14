import React,{ Component } from 'react';
import '../home.css';
import {Route,Switch,Redirect,NavLink} from "react-router-dom";

class ProductPage extends Component{
  render(){
    return (
      <>
      <div className="small_container">
        <div className="row row_2">
           <h2>All Products</h2>
           <form className="cat-form" action="manage_category.php" method="post">
           <select name="cat" className="cat-btn">
              <option>All Categories</option>
              <option value="">Offers</option>
              <option value=""></option>
              <option value=""></option>
           </select>
           <input type="submit" name="submit" className="cat-btn" value="Search"/>
          </form>
        </div>
         <div className="row">
             <div className="col4forproductpage">
               <form className="" action="" method="post">
                <img src=""/>
                <h4 className="prdname">product name</h4>
                <p>Approx Rs.20</p>
                <button className="add-to-cart" name="submit2" type="submit">Add to cart</button>
                <input type="hidden" name="product_name" value=""/>
                <input type="hidden" name="product_price" value=""/>
                <input type="hidden" name="product_path" value=""/>
                <input type="hidden" name="amazon_link" value=""/>
                </form>
                  <button className="add-to-cart" name="submitpayment" type="button"><NavLink className="footerarc" to ="">Buy Now</NavLink></button>
                  <button type="button" className="add-to-cart" name="button"><NavLink className="footerarc" to="productdetails">Details</NavLink></button>
             </div>

             <div className="col4forproductpage">
               <form className="" action="" method="post">
                <img src=""/>
                <h4 className="prdname">product name</h4>
                <p>Approx Rs.20</p>
                <button className="add-to-cart" name="submit2" type="submit">Add to cart</button>
                <input type="hidden" name="product_name" value=""/>
                <input type="hidden" name="product_price" value=""/>
                <input type="hidden" name="product_path" value=""/>
                <input type="hidden" name="amazon_link" value=""/>
                </form>
                  <button className="add-to-cart" name="submitpayment" type="button"><NavLink className="footerarc" to ="">Buy Now</NavLink></button>
                  <button type="button" className="add-to-cart" name="button"><NavLink className="footerarc" to="productdetails">Details</NavLink></button>
             </div>

             <div className="col4forproductpage">
               <form className="" action="" method="post">
                <img src=""/>
                <h4 className="prdname">product name</h4>
                <p>Approx Rs.20</p>
                <button className="add-to-cart" name="submit2" type="submit">Add to cart</button>
                <input type="hidden" name="product_name" value=""/>
                <input type="hidden" name="product_price" value=""/>
                <input type="hidden" name="product_path" value=""/>
                <input type="hidden" name="amazon_link" value=""/>
                </form>
                  <button className="add-to-cart" name="submitpayment" type="button"><NavLink className="footerarc" to ="">Buy Now</NavLink></button>
                  <button type="button" className="add-to-cart" name="button"><NavLink className="footerarc" to="productdetails">Details</NavLink></button>
             </div>

             <div className="col4forproductpage">
               <form className="" action="" method="post">
                <img src=""/>
                <h4 className="prdname">product name</h4>
                <p>Approx Rs.20</p>
                <button className="add-to-cart" name="submit2" type="submit">Add to cart</button>
                <input type="hidden" name="product_name" value=""/>
                <input type="hidden" name="product_price" value=""/>
                <input type="hidden" name="product_path" value=""/>
                <input type="hidden" name="amazon_link" value=""/>
                </form>
                  <button className="add-to-cart" name="submitpayment" type="button"><NavLink className="footerarc" to ="">Buy Now</NavLink></button>
                  <button type="button" className="add-to-cart" name="button"><NavLink className="footerarc" to="productdetails">Details</NavLink></button>
             </div>

             <div className="col4forproductpage">
               <form className="" action="" method="post">
                <img src=""/>
                <h4 className="prdname">product name</h4>
                <p>Approx Rs.20</p>
                <button className="add-to-cart" name="submit2" type="submit">Add to cart</button>
                <input type="hidden" name="product_name" value=""/>
                <input type="hidden" name="product_price" value=""/>
                <input type="hidden" name="product_path" value=""/>
                <input type="hidden" name="amazon_link" value=""/>
                </form>
                  <button className="add-to-cart" name="submitpayment" type="button"><NavLink className="footerarc" to ="">Buy Now</NavLink></button>
                  <button type="button" className="add-to-cart" name="button"><NavLink className="footerarc" to="productdetails">Details</NavLink></button>
             </div>

             <div className="col4forproductpage">
               <form className="" action="" method="post">
                <img src=""/>
                <h4 className="prdname">product name</h4>
                <p>Approx Rs.20</p>
                <button className="add-to-cart" name="submit2" type="submit">Add to cart</button>
                <input type="hidden" name="product_name" value=""/>
                <input type="hidden" name="product_price" value=""/>
                <input type="hidden" name="product_path" value=""/>
                <input type="hidden" name="amazon_link" value=""/>
                </form>
                  <button className="add-to-cart" name="submitpayment" type="button"><NavLink className="footerarc" to ="">Buy Now</NavLink></button>
                  <button type="button" className="add-to-cart" name="button"><NavLink className="footerarc" to="productdetails">Details</NavLink></button>
             </div>

             <div className="col4forproductpage">
               <form className="" action="" method="post">
                <img src=""/>
                <h4 className="prdname">product name</h4>
                <p>Approx Rs.20</p>
                <button className="add-to-cart" name="submit2" type="submit">Add to cart</button>
                <input type="hidden" name="product_name" value=""/>
                <input type="hidden" name="product_price" value=""/>
                <input type="hidden" name="product_path" value=""/>
                <input type="hidden" name="amazon_link" value=""/>
                </form>
                  <button className="add-to-cart" name="submitpayment" type="button"><NavLink className="footerarc" to ="">Buy Now</NavLink></button>
                  <button type="button" className="add-to-cart" name="button"><NavLink className="footerarc" to="productdetails">Details</NavLink></button>
             </div>

             <div className="col4forproductpage">
               <form className="" action="" method="post">
                <img src=""/>
                <h4 className="prdname">product name</h4>
                <p>Approx Rs.20</p>
                <button className="add-to-cart" name="submit2" type="submit">Add to cart</button>
                <input type="hidden" name="product_name" value=""/>
                <input type="hidden" name="product_price" value=""/>
                <input type="hidden" name="product_path" value=""/>
                <input type="hidden" name="amazon_link" value=""/>
                </form>
                  <button className="add-to-cart" name="submitpayment" type="button"><NavLink className="footerarc" to ="">Buy Now</NavLink></button>
                  <button type="button" className="add-to-cart" name="button"><NavLink className="footerarc" to="productdetails">Details</NavLink></button>
             </div>
             <div className="col4forproductpage">
               <form className="" action="" method="post">
                <img src=""/>
                <h4 className="prdname">product name</h4>
                <p>Approx Rs.20</p>
                <button className="add-to-cart" name="submit2" type="submit">Add to cart</button>
                <input type="hidden" name="product_name" value=""/>
                <input type="hidden" name="product_price" value=""/>
                <input type="hidden" name="product_path" value=""/>
                <input type="hidden" name="amazon_link" value=""/>
                </form>
                  <button className="add-to-cart" name="submitpayment" type="button"><NavLink className="footerarc" to ="">Buy Now</NavLink></button>
                  <button type="button" className="add-to-cart" name="button"><NavLink className="footerarc" to="productdetails">Details</NavLink></button>
             </div>
             <div className="col4forproductpage">
               <form className="" action="" method="post">
                <img src=""/>
                <h4 className="prdname">product name</h4>
                <p>Approx Rs.20</p>
                <button className="add-to-cart" name="submit2" type="submit">Add to cart</button>
                <input type="hidden" name="product_name" value=""/>
                <input type="hidden" name="product_price" value=""/>
                <input type="hidden" name="product_path" value=""/>
                <input type="hidden" name="amazon_link" value=""/>
                </form>
                  <button className="add-to-cart" name="submitpayment" type="button"><NavLink className="footerarc" to ="">Buy Now</NavLink></button>
                  <button type="button" className="add-to-cart" name="button"><NavLink className="footerarc" to="productdetails">Details</NavLink></button>
             </div>
         </div>
         <div className="page_btn">
           <NavLink className="footerarc" to="productpage1"><span>1</span></NavLink>
           <NavLink className="footerarc" to="productpage2"><span>2</span></NavLink>
           <NavLink className="footerarc" to="productpage3"><span>3</span></NavLink>
            <span>&#8594;</span>
         </div>
      </div>
      </>
    );
  }
}

export default ProductPage;