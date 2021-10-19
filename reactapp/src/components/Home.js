import React, {Component} from 'react';
import '../home.css';
import {Route,Switch,Redirect,NavLink} from "react-router-dom";

class Home extends Component{
  render(){
    return (
      <>
      <div className="headeru">
      <div className="containeru">
      <div className="rowu">
        <div className="col-2u">
        <h1>Give Your Workout <br/>A New Style!</h1>
        <p>
          Success isn't always about greatness.It's about
          consistency. Consistent <br/>hard work gains success. Greatness will come.</p>
          <NavLink to="{wallpaper}" className="btnu"> Explore Now &#8594;</NavLink>
        </div>
        <div className="col-2u">
          <img  src="images/image1.png" alt="error" />
        </div>
      </div>
      </div>
    </div>

    <div className="categories">
      <div className="small-containeru">
        <div className="rowu">
            <div className="col-3u">
              <img  src="images/image1.png" alt="error" />
            </div>
            <div className="col-3u">
              <img  src="images/image1.png" alt="error" />
            </div>
            <div className="col-3u">
              <img  src="images/image1.png" alt="error" />
            </div>
        </div>
      </div>
    </div>

    <div className="small-containeru">
          <h2 className="titleu">Featured Products</h2>
          <div className="wrapper"></div>
          <span><i className="shopping-cart"></i></span>
          <div className="clear"></div>
          <div className="rowu">
      <div className="col-4u">
        <form className="formu" action="manage_cart.php" method="post">
        <img src="images/image1.png"/>
        <h4>Product name</h4>
        <p>Approx Rs.20</p>
        <button className="add-to-cartu" name="submit1" type="submit">Add to cart</button>
        </form>
        <button className="add-to-cartu" name="submitpayment" type="button"><NavLink className="footerarc" to="">Buy Now</NavLink></button>
        <button type="button" className="add-to-cartu" name="button"><NavLink className="footerarc" to="productdetails">Details</NavLink></button>
      </div>

      <div className="col-4u">
        <form className="formu" action="manage_cart.php" method="post">
        <img src="images/image1.png"/>
        <h4>Product name</h4>
        <p>Approx Rs.20</p>
        <button className="add-to-cartu" name="submit1" type="submit">Add to cart</button>
        </form>
        <button className="add-to-cartu" name="submitpayment" type="button"><NavLink className="footerarc" to="">Buy Now</NavLink></button>
        <button type="button" className="add-to-cartu" name="button"><NavLink className="footerarc" to="productdetails">Details</NavLink></button>
      </div>

      <div className="col-4u">
        <form className="formu" action="manage_cart.php" method="post">
        <img src="images/image1.png"/>
        <h4>Product name</h4>
        <p>Approx Rs.20</p>
        <button className="add-to-cartu" name="submit1" type="submit">Add to cart</button>
        </form>
        <button className="add-to-cartu" name="submitpayment" type="button"><NavLink className="footerarc" to="">Buy Now</NavLink></button>
        <button type="button" className="add-to-cartu" name="button"><NavLink className="footerarc" to="productdetails">Details</NavLink></button>
      </div>

      <div className="col-4u">
        <form className="formu" action="manage_cart.php" method="post">
        <img src="images/image1.png"/>
        <h4>Product name</h4>
        <p>Approx Rs.20</p>
        <button className="add-to-cartu" name="submit1" type="submit">Add to cart</button>
        </form>
        <button className="add-to-cartu" name="submitpayment" type="button"><NavLink className="footerarc" to="">Buy Now</NavLink></button>
        <button type="button" className="add-to-cartu" name="button"><NavLink className="footerarc" to="productdetails">Details</NavLink></button>
      </div>
    </div>

    <h2 className="titleu">Latest Products</h2>

        <div className="rowu">
        <div className="col-4u">
          <form className="" action="manage_cart.php" method="post">
          <img src=""/>
          <h4>Product name </h4>
          <p>Approx Rs. 20</p>
          <button className="add-to-cartu" name="submit1" type="submit">Add to cart</button>
          <input type="hidden" name="product_name" value=""/>
          <input type="hidden" name="product_price" value=""/>
          <input type="hidden" name="product_path" value=""/>
          <input type="hidden" name="amazon_link" value=""/>
          </form>
          <button className="add-to-cartu" type="button"><NavLink className="footerarc" to ="">Buy Now</NavLink></button>
          <button type="button" className="add-to-cartu" name="button"><NavLink className="footerarc" to="productdetails">Details</NavLink></button>
        </div>

        <div className="col-4u">
          <form className="" action="manage_cart.php" method="post">
          <img src=""/>
          <h4>Product name </h4>
          <p>Approx Rs. 20</p>
          <button className="add-to-cartu" name="submit1" type="submit">Add to cart</button>
          <input type="hidden" name="product_name" value=""/>
          <input type="hidden" name="product_price" value=""/>
          <input type="hidden" name="product_path" value=""/>
          <input type="hidden" name="amazon_link" value=""/>
          </form>
          <button className="add-to-cartu" type="button"><NavLink className="footerarc" to ="">Buy Now</NavLink></button>
          <button type="button" className="add-to-cartu" name="button"><NavLink className="footerarc" to="productdetails">Details</NavLink></button>
        </div>

        <div className="col-4u">
          <form className="" action="manage_cart.php" method="post">
          <img src=""/>
          <h4>Product name </h4>
          <p>Approx Rs. 20</p>
          <button className="add-to-cartu" name="submit1" type="submit">Add to cart</button>
          <input type="hidden" name="product_name" value=""/>
          <input type="hidden" name="product_price" value=""/>
          <input type="hidden" name="product_path" value=""/>
          <input type="hidden" name="amazon_link" value=""/>
          </form>
          <button className="add-to-cartu" type="button"><NavLink className="footerarc" to ="">Buy Now</NavLink></button>
          <button type="button" className="add-to-cartu" name="button"><NavLink className="footerarc" to="productdetails">Details</NavLink></button>
        </div>

        <div className="col-4u">
          <form className="" action="manage_cart.php" method="post">
          <img src=""/>
          <h4>Product name </h4>
          <p>Approx Rs. 20</p>
          <button className="add-to-cartu" name="submit1" type="submit">Add to cart</button>
          <input type="hidden" name="product_name" value=""/>
          <input type="hidden" name="product_price" value=""/>
          <input type="hidden" name="product_path" value=""/>
          <input type="hidden" name="amazon_link" value=""/>
          </form>
          <button className="add-to-cartu" type="button"><NavLink className="footerarc" to ="">Buy Now</NavLink></button>
          <button type="button" className="add-to-cartu" name="button"><NavLink className="footerarc" to="productdetails">Details</NavLink></button>
        </div>

        <div className="col-4u">
          <form className="" action="manage_cart.php" method="post">
          <img src=""/>
          <h4>Product name Product name vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
          jaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa </h4>
          <p>Approx Rs. 20</p>
          <button className="add-to-cartu" name="submit1" type="submit">Add to cart</button>
          <input type="hidden" name="product_name" value=""/>
          <input type="hidden" name="product_price" value=""/>
          <input type="hidden" name="product_path" value=""/>
          <input type="hidden" name="amazon_link" value=""/>
          </form>
          <button className="add-to-cartu" type="button"><NavLink className="footerarc" to ="">Buy Now</NavLink></button>
          <button type="button" className="add-to-cartu" name="button"><NavLink className="footerarc" to="productdetails">Details</NavLink></button>
        </div>

        <div className="col-4u">
          <form className="" action="manage_cart.php" method="post">
          <img src=""/>
          <h4>Product name Product name vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
          jaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h4>
          <p>Approx Rs. 20</p>
          <button className="add-to-cartu" name="submit1" type="submit">Add to cart</button>
          <input type="hidden" name="product_name" value=""/>
          <input type="hidden" name="product_price" value=""/>
          <input type="hidden" name="product_path" value=""/>
          <input type="hidden" name="amazon_link" value=""/>
          </form>
          <button className="add-to-cartu" type="button"><NavLink className="footerarc" to ="">Buy Now</NavLink></button>
          <button type="button" className="add-to-cartu" name="button"><NavLink className="footerarc" to="productdetails">Details</NavLink></button>
        </div>

        <div className="col-4u">
          <form className="" action="manage_cart.php" method="post">
          <img src=""/>
          <h4>Product name Product name vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
          jaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h4>
          <p>Approx Rs. 20</p>
          <button className="add-to-cartu" name="submit1" type="submit">Add to cart</button>
          <input type="hidden" name="product_name" value=""/>
          <input type="hidden" name="product_price" value=""/>
          <input type="hidden" name="product_path" value=""/>
          <input type="hidden" name="amazon_link" value=""/>
          </form>
          <button className="add-to-cartu" type="button"><NavLink className="footerarc" to ="">Buy Now</NavLink></button>
          <button type="button" className="add-to-cartu" name="button"><NavLink className="footerarc" to="productdetails">Details</NavLink></button>
        </div>

        <div className="col-4u">
          <form className="" action="manage_cart.php" method="post">
          <img src=""/>
          <h4>Product name vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
          jaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h4>
          <p>Approx Rs. 20</p>
          <button className="add-to-cartu" name="submit1" type="submit">Add to cart</button>
          <input type="hidden" name="product_name" value=""/>
          <input type="hidden" name="product_price" value=""/>
          <input type="hidden" name="product_path" value=""/>
          <input type="hidden" name="amazon_link" value=""/>
          </form>
          <button className="add-to-cartu" type="button"><NavLink className="footerarc" to ="">Buy Now</NavLink></button>
          <button type="button" className="add-to-cartu" name="button"><NavLink className="footerarc" to="productdetails">Details</NavLink></button>
        </div>
  </div>
</div>


<div className="offeru">
  <div className="small-containeru">
    <div className="rowu">
      <div className="col-2u">
        <img src="images/image1.png" class="offer-img"/>
      </div>
      <div className="col-2u">
        <p>Exculsively Availabe on Instrument Delight</p>
        <h1>product Name</h1>

      <small>Description Lorem is simply dummy text of the pinting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</small>
      <NavLink to="https://amzn.to/3h8YNnB" className="btnu">Buy Now &#8594;</NavLink>
    </div>
  </div>
  </div>
</div>

<div className="testimonialu">
  <div className="small-containeru">
    <div className="rowu">
        <div className="col-3u">
          <i  className="fa fa-quote-left"></i><br/>
          <center>Lorem is simply dummy text of the pinting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
          </center>
            <img src="images/user-2.png" alt=""/>
            <h3>Name</h3>
        </div>
        <div className="col-3u">
          <i  className="fa fa-quote-left"></i><br/>
          <center>Lorem is simply dummy text of the pinting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
          </center>
            <img src="images/user-3.png" alt=""/>
            <h3>Name</h3>
        </div>
        <div className="col-3u">
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
  <div className="small-containeru">
    <div className="rowu">
        <div className="col-5u">
          <img src="images/image1.png"/>
        </div>
        <div className="col-5u">
          <img src="images/image1.png"/>
        </div>
        <div className="col-5u">
          <img src="images/image1.png"/>
        </div>
        <div className="col-5u">
          <img src="images/image1.png"/>
        </div>
        <div className="col-5u">
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
