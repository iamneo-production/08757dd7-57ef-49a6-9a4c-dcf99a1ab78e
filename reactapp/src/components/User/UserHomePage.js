import React, { Component } from 'react';
import UserNavigationBar from './UserNavigationBar';
import Footer from '../Footer';
import './home.css'
import { Card } from 'react-bootstrap';

import axios from 'axios';

class UserHomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: localStorage.getItem("email"),
            products: [],
        };
    }

    // API Call (Get All Products)
    componentDidMount() {
        axios.get("https://8080-bdeebbfbfaacaaedbabffdcbfffeebeffbefa.examlyiopb.examly.io/home")
            .then(response => response.data)
            .then((data) => {
                this.setState({
                    products: data
                });
            });
    }

    showProductDetails = (productId) => {
        this.props.history.push("/productDetail/" + productId);
    }

    render() {
        if (this.state.email === null) {
            this.props.history.push("/login");
        }

        return (
            <div>
                <UserNavigationBar history={this.props.history} />
                <div className="headeru">
                    <div className="containeru">
                        <div className="rowu">
                            <div className="col-2u">
                                <h1>MUSIC IS LIFE ITSELF</h1>
                                <p>
                                    It's easy to play any musical instrument: all you have to do is touch the right key at the right time and the instrument will play itself.</p>
                            </div>
                            <div className="col-2u">
                                <img src="https://images.unsplash.com/photo-1517578099694-8b23adec837c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAyfHxtdXNpYyUyMGluc3RydW1lbnRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="error" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="categories">
                    <div className="small-containeru">
                        <div className="rowu">
                            <div className="col-3u">
                                <img src="https://images.unsplash.com/photo-1504653601220-f1a8ece25e4a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bXVzaWMlMjBpbnN0cnVtZW50c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="error" />
                            </div>
                            <div className="col-3u">
                                <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG11c2ljJTIwaW5zdHJ1bWVudHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="error" />
                            </div>
                            <div className="col-3u">
                                <img src="https://images.unsplash.com/photo-1485561222814-e6c50477491b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG11c2ljJTIwaW5zdHJ1bWVudHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="error" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="small-containeru">
                    <h2 className="titleu">Featured Products</h2>
                    <div className="wrapper"></div>
                    <span><i className="shopping-cart"></i></span>
                    <div className="clear"></div>
                    <div className="rowu" id="instrumentHomeBody">

                        {
                            this.state.products.length === 0 ?
                                <Card style={{ width: '18rem' }} className="mb-5">
                                    <Card.Img variant="top" src="https://unsplash.com/a/img/empty-states/photos.png" width="300px" height="300px" />
                                    <Card.Body>
                                        <Card.Title>Oops, No Product</Card.Title>
                                        <Card.Text>
                                            Try again after some time.
                                        </Card.Text>
                                    </Card.Body>
                                </Card> :
                                this.state.products.map((product) => (
                                    <Card style={{ width: '18rem' }} className="mb-5 productItem" key={product.productId} onClick={this.showProductDetails.bind(this, product.productId)}>
                                        <Card.Img variant="top" src={product.imageURL} width="250px" height="250px" />
                                        <Card.Body>
                                            <Card.Title className="text-center">{product.productName}</Card.Title>
                                            <Card.Text className="text-center">
                                                {product.description}
                                            </Card.Text>
                                            <Card.Text className="text-center">
                                                Price: ${Math.round(product.price * (1 + (new Date().getMonth() / 100)))}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                ))
                        }

                    </div>
                </div>


                <div className="offeru">
                    <div className="small-containeru">
                        <div className="rowu">
                            <div className="col-2u">
                                <img src="https://images.unsplash.com/photo-1508025690966-2a9a1957da31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW5zdHJ1bWVudHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" className="offer-img" alt="" />
                            </div>
                            <div className="col-2u">
                                <h1>Violin</h1>
                                <p>Exculsively Availabe on Instrument Delight</p>
                                <small>The violin, sometimes known as a fiddle, is a wooden chordophone (string instrument) in the violin family. Most violins have a hollow wooden body.</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="testimonialu">
                    <div className="small-containeru">
                        <div className="rowu">
                            <div className="col-3u">
                                <i className="fa fa-quote-left"></i><br />
                                <center>Lorem is simply dummy text of the pinting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                </center>
                                <img src="images/user-2.png" alt="" />
                                <h3>Name</h3>
                            </div>
                            <div className="col-3u">
                                <i className="fa fa-quote-left"></i><br />
                                <center>Lorem is simply dummy text of the pinting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                </center>
                                <img src="images/user-3.png" alt="" />
                                <h3>Name</h3>
                            </div>
                            <div className="col-3u">
                                <i className="fa fa-quote-left"></i><br />
                                <center>Lorem is simply dummy text of the pinting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                </center>
                                <img src="images/user-1.png" alt="" />
                                <h3>Name</h3>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <div className="brands">
                    <div className="small-containeru">
                        <div className="rowu">
                            <div className="col-5u">
                                <img src="images/image1.png" alt="" />
                            </div>
                            <div className="col-5u">
                                <img src="images/image1.png" alt="" />
                            </div>
                            <div className="col-5u">
                                <img src="images/image1.png" alt="" />
                            </div>
                            <div className="col-5u">
                                <img src="images/image1.png" alt="" />
                            </div>
                            <div className="col-5u">
                                <img src="images/image1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div> */}
                <br /><br />

                <Footer />
            </div>
        );
    }
}

export default UserHomePage;