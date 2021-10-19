import React, { Component } from 'react';
import './home.css';
import UserNavigationBar from './UserNavigationBar';
import Footer from '../Footer';
import axios from 'axios';
import { ButtonGroup, Image } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faCartPlus, faCreditCard } from '@fortawesome/free-solid-svg-icons'

class UserProductDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productId: "",
            instrumentName: "",
            instrumentPrice: "",
            instrumentDescription: "",
            instrumentImageURL: "",
            email: localStorage.getItem("email")
        }
    }

    componentDidMount() {
        const productId = +this.props.match.params.productId;
        if (productId) {
            axios.get("https://8080-bdeebbfbfaacaaedbabffdcbfffeebeffbefa.examlyiopb.examly.io/getProduct/" + productId)
                .then(response => {
                    this.setState({
                        productId: response.data.productId,
                        instrumentName: response.data.productName,
                        instrumentPrice: response.data.price,
                        instrumentDescription: response.data.description,
                        instrumentImageURL: response.data.imageURL
                    });
                });
        }
    }

    goBack = () => {
        this.props.history.push("/home");
    }

    render() {
        if (this.state.email === null) {
            this.props.history.push("/login");
        }

        return (
            <div>
                <UserNavigationBar history={this.props.history} />
                <div className="productdetailpage">
                    <div className="content">
                        <h2 className="exploreproduct">{this.state.instrumentName}</h2>
                        <Image src={this.state.instrumentImageURL} className="mb-3" fluid width="300px" height="300px" />
                        <h5 className="productdetailsprice mb-4"><tt>M.R.P: <del>${Math.round(this.state.instrumentPrice * (1 + (new Date().getMonth() / 100)))}</del> ${this.state.instrumentPrice}</tt></h5>
                        <tt>
                            <h3 className="text-center">About this instrument</h3>
                            <p className="text-center">{this.state.instrumentDescription}</p>
                        </tt>
                        <ButtonGroup className="mb-4">
                            <Button size="sm" className="btn btn-outline-primary" type="submit">
                                <FontAwesomeIcon icon={faCartPlus} /><b> ADD TO CART</b>
                            </Button>
                            <Button size="sm" className="btn btn-outline-success" type="submit">
                                <FontAwesomeIcon icon={faCreditCard} /><b> PLACE ORDER</b>
                            </Button>
                        </ButtonGroup>
                        <Button size="sm" className="btn btn-outline-secondary mb-4" type="submit" onClick={this.goBack}>
                            <FontAwesomeIcon icon={faBackward} /><b> BACK</b>
                        </Button>
                    </div>

                </div>
                <Footer />
            </div>
        );
    }
}

export default UserProductDetails;