import React, {Component} from 'react';
import '../home.css';
import {Route,Switch,Redirect,NavLink} from "react-router-dom";

class Home extends Component{
  render(){
    return (
      <>
      <div className="header">
      <div className="container">
      <div className="row">
        <div className="col-2">
        <h1>Give Your Workout <br/>A New Style!</h1>
        <p>
          Success isn't always about greatness.It's about
          consistency. Consistent <br/>hard work gains success. Greatness will come.</p>
          <NavLink to="{wallpaper}" className="btn"> Explore Now &#8594;</NavLink>
        </div>
        <div className="col-2">
          <img  src="images/image1.png" alt="error" />
        </div>
      </div>
      </div>
    </div>

    <div className="categories">
      <div className="small-container">
        <div className="row">
            <div className="col-3">
              <img  src="images/image1.png" alt="error" />
            </div>
            <div className="col-3">
              <img  src="images/image1.png" alt="error" />
            </div>
            <div className="col-3">
              <img  src="images/image1.png" alt="error" />
            </div>
        </div>
      </div>
    </div>

    <div classN="small-container">
          <h2 className="title">Featured Products</h2>
          <div className="wrapper"></div>
          <span><i className="shopping-cart"></i></span>
          <div className="clear"></div>
          <div className="row">
      <div className="col-4">
        <form className="form" action="manage_cart.php" method="post">
        <img src="images/image1.png"/>
        <h4>Product name</h4>
        <p>Approx Rs.20</p>
        <button className="add-to-cart" name="submit1" type="submit">Add to cart</button>
        </form>
        <button className="add-to-cart" name="submitpayment" type="button"><NavLink className="footerarc" to="">Buy Now</NavLink></button>
        <button type="button" className="add-to-cart" name="button"><NavLink className="footerarc" to="productdetails">Details</NavLink></button>
      </div>

      <div className="col-4">
        <form className="form" action="manage_cart.php" method="post">
        <img src="images/image1.png"/>
        <h4>Product name</h4>
        <p>Approx Rs.20</p>
        <button className="add-to-cart" name="submit1" type="submit">Add to cart</button>
        </form>
        <button className="add-to-cart" name="submitpayment" type="button"><NavLink className="footerarc" to="">Buy Now</NavLink></button>
        <button type="button" className="add-to-cart" name="button"><NavLink className="footerarc" to="productdetails">Details</NavLink></button>
      </div>

      <div className="col-4">
        <form className="form" action="manage_cart.php" method="post">
        <img src="images/image1.png"/>
        <h4>Product name</h4>
        <p>Approx Rs.20</p>
        <button className="add-to-cart" name="submit1" type="submit">Add to cart</button>
        </form>
        <button className="add-to-cart" name="submitpayment" type="button"><NavLink className="footerarc" to="">Buy Now</NavLink></button>
        <button type="button" className="add-to-cart" name="button"><NavLink className="footerarc" to="productdetails">Details</NavLink></button>
      </div>

      <div className="col-4">
        <form className="form" action="manage_cart.php" method="post">
        <img src="images/image1.png"/>
        <h4>Product name</h4>
        <p>Approx Rs.20</p>
        <button className="add-to-cart" name="submit1" type="submit">Add to cart</button>
        </form>
        <button className="add-to-cart" name="submitpayment" type="button"><NavLink className="footerarc" to="">Buy Now</NavLink></button>
        <button type="button" className="add-to-cart" name="button"><NavLink className="footerarc" to="productdetails">Details</NavLink></button>
      </div>
    </div>

    <h2 className="title">Latest Products</h2>

        <div className="row">
        <div className="col-4">
          <form className="" action="manage_cart.php" method="post">
          <img src=""/>
          <h4>Product name </h4>
          <p>Approx Rs. 20</p>
          <button className="add-to-cart" name="submit1" type="submit">Add to cart</button>
          <input type="hidden" name="product_name" value=""/>
          <input type="hidden" name="product_price" value=""/>
          <input type="hidden" name="product_path" value=""/>
          <input type="hidden" name="amazon_link" value=""/>
          </form>
          <button className="add-to-cart" type="button"><NavLink className="footerarc" to ="">Buy Now</NavLink></button>
          <button type="button" className="add-to-cart" name="button"><NavLink className="footerarc" to="productdetails">Details</NavLink></button>
        </div>

        <div className="col-4">
          <form className="" action="manage_cart.php" method="post">
          <img src=""/>
          <h4>Product name </h4>
          <p>Approx Rs. 20</p>
          <button className="add-to-cart" name="submit1" type="submit">Add to cart</button>
          <input type="hidden" name="product_name" value=""/>
          <input type="hidden" name="product_price" value=""/>
          <input type="hidden" name="product_path" value=""/>
          <input type="hidden" name="amazon_link" value=""/>
          </form>
          <button className="add-to-cart" type="button"><NavLink className="footerarc" to ="">Buy Now</NavLink></button>
          <button type="button" className="add-to-cart" name="button"><NavLink className="footerarc" to="productdetails">Details</NavLink></button>
        </div>

        <div className="col-4">
          <form className="" action="manage_cart.php" method="post">
          <img src=""/>
          <h4>Product name </h4>
          <p>Approx Rs. 20</p>
          <button className="add-to-cart" name="submit1" type="submit">Add to cart</button>
          <input type="hidden" name="product_name" value=""/>
          <input type="hidden" name="product_price" value=""/>
          <input type="hidden" name="product_path" value=""/>
          <input type="hidden" name="amazon_link" value=""/>
          </form>
          <button className="add-to-cart" type="button"><NavLink className="footerarc" to ="">Buy Now</NavLink></button>
          <button type="button" className="add-to-cart" name="button"><NavLink className="footerarc" to="productdetails">Details</NavLink></button>
        </div>

        <div className="col-4">
          <form className="" action="manage_cart.php" method="post">
          <img src=""/>
          <h4>Product name </h4>
          <p>Approx Rs. 20</p>
          <button className="add-to-cart" name="submit1" type="submit">Add to cart</button>
          <input type="hidden" name="product_name" value=""/>
          <input type="hidden" name="product_price" value=""/>
          <input type="hidden" name="product_path" value=""/>
          <input type="hidden" name="amazon_link" value=""/>
          </form>
          <button className="add-to-cart" type="button"><NavLink className="footerarc" to ="">Buy Now</NavLink></button>
          <button type="button" className="add-to-cart" name="button"><NavLink className="footerarc" to="productdetails">Details</NavLink></button>
        </div>

        <div className="col-4">
          <form className="" action="manage_cart.php" method="post">
          <img src=""/>
          <h4>Product name Product name vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
          jaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </h4>
          <p>Approx Rs. 20</p>
          <button className="add-to-cart" name="submit1" type="submit">Add to cart</button>
          <input type="hidden" name="product_name" value=""/>
          <input type="hidden" name="product_price" value=""/>
          <input type="hidden" name="product_path" value=""/>
          <input type="hidden" name="amazon_link" value=""/>
          </form>
          <button className="add-to-cart" type="button"><NavLink className="footerarc" to ="">Buy Now</NavLink></button>
          <button type="button" className="add-to-cart" name="button"><NavLink className="footerarc" to="productdetails">Details</NavLink></button>
        </div>

        <div className="col-4">
          <form className="" action="manage_cart.php" method="post">
          <img src=""/>
          <h4>Product name Product name vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
          jaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h4>
          <p>Approx Rs. 20</p>
          <button className="add-to-cart" name="submit1" type="submit">Add to cart</button>
          <input type="hidden" name="product_name" value=""/>
          <input type="hidden" name="product_price" value=""/>
          <input type="hidden" name="product_path" value=""/>
          <input type="hidden" name="amazon_link" value=""/>
          </form>
          <button className="add-to-cart" type="button"><NavLink className="footerarc" to ="">Buy Now</NavLink></button>
          <button type="button" className="add-to-cart" name="button"><NavLink className="footerarc" to="productdetails">Details</NavLink></button>
        </div>

        <div className="col-4">
          <form className="" action="manage_cart.php" method="post">
          <img src=""/>
          <h4>Product name Product name vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
          jaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h4>
          <p>Approx Rs. 20</p>
          <button className="add-to-cart" name="submit1" type="submit">Add to cart</button>
          <input type="hidden" name="product_name" value=""/>
          <input type="hidden" name="product_price" value=""/>
          <input type="hidden" name="product_path" value=""/>
          <input type="hidden" name="amazon_link" value=""/>
          </form>
          <button className="add-to-cart" type="button"><NavLink className="footerarc" to ="">Buy Now</NavLink></button>
          <button type="button" className="add-to-cart" name="button"><NavLink className="footerarc" to="productdetails">Details</NavLink></button>
        </div>

        <div className="col-4">
          <form className="" action="manage_cart.php" method="post">
          <img src=""/>
          <h4>Product name vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
          jaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h4>
          <p>Approx Rs. 20</p>
          <button className="add-to-cart" name="submit1" type="submit">Add to cart</button>
          <input type="hidden" name="product_name" value=""/>
          <input type="hidden" name="product_price" value=""/>
          <input type="hidden" name="product_path" value=""/>
          <input type="hidden" name="amazon_link" value=""/>
          </form>
          <button className="add-to-cart" type="button"><NavLink className="footerarc" to ="">Buy Now</NavLink></button>
          <button type="button" className="add-to-cart" name="button"><NavLink className="footerarc" to="productdetails">Details</NavLink></button>
        </div>
  </div>
</div>


<div className="offer">
  <div className="small-container">
    <div className="row">
      <div className="col-2">
        <img src="images/image1.png" class="offer-img"/>
      </div>
      <div className="col-2">
        <p>Exculsively Availabe on Instrument Delight</p>
        <h1>product Name</h1>

      <small>Description Lorem is simply dummy text of the pinting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</small>
      <NavLink to="https://amzn.to/3h8YNnB" className="btn">Buy Now &#8594;</NavLink>
    </div>
  </div>
  </div>
</div>

<div className="testimonial">
  <div className="small-container">
    <div className="row">
        <div className="col-3">
          <i  className="fa fa-quote-left"></i><br/>
          <center>Lorem is simply dummy text of the pinting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
          </center>
            <img src="images/user-2.png" alt=""/>
            <h3>Name</h3>
        </div>
        <div className="col-3">
          <i  className="fa fa-quote-left"></i><br/>
          <center>Lorem is simply dummy text of the pinting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
          </center>
            <img src="images/user-3.png" alt=""/>
            <h3>Name</h3>
        </div>
        <div className="col-3">
          <i  className="fa fa-quote-left"></i><br/>
          <center>Lorem is simply dummy text of the pinting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
          </center>
            <img src="images/user-1.png" alt=""/>
            <h3>Name</h3>
        </div>
    </div>
  </div>
</div>


<div className="brands">
  <div className="small-container">
    <div className="row">
        <div className="col-5">
          <img src="images/image1.png"/>
        </div>
        <div className="col-5">
          <img src="images/image1.png"/>
        </div>
        <div className="col-5">
          <img src="images/image1.png"/>
        </div>
        <div className="col-5">
          <img src="images/image1.png"/>
        </div>
        <div className="col-5">
          <img src="images/image1.png"/>
        </div>
    </div>
  </div>
</div>
      </>

    );
  }
}

export default Home;
