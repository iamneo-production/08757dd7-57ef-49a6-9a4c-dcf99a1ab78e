import React, { Component } from 'react';
import './home.css';
import UserNavigationBar from './UserNavigationBar';
import Footer from '../Footer';
import axios from 'axios';
import { ButtonGroup, Card, ListGroup, ListGroupItem, Form } from 'react-bootstrap';
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
            instrumentQuantity: "",
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
                        instrumentImageURL: response.data.imageURL,
                        instrumentQuantity: response.data.quantity
                    });
                });
        }
    }

    goBack = () => {
        this.props.history.push("/home");
    }

    valueChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    placeOrder = () => {
        var decision = window.confirm("Are you sure to want purchase this instrument?");
        if (!decision) {
            return;
        }
        const quantity = document.getElementById("quantity").value;
        const order = {
            userId: this.state.email,
            productName: this.state.instrumentName,
            quantity: quantity,
            totalPrice: this.state.instrumentPrice * quantity,
            status: "",
            price: this.state.instrumentPrice
        }
        axios.post("https://8080-bdeebbfbfaacaaedbabffdcbfffeebeffbefa.examlyiopb.examly.io/placeOrder/", order)
            .then(response => {
                if (response.data) {
                    alert("Order placed successfully!");
                }
            });
    }

    render() {

        if (this.state.email === null) {
            this.props.history.push("/login");
        }

        return (
            <div>
                <UserNavigationBar history={this.props.history} />
                <center>
                    <Card style={{ width: '23rem' }} className="mb-5 shadowBox">
                        <Card.Img variant="top" src={this.state.instrumentImageURL} height="330px" />
                        <Card.Body>
                            <Card.Title><h1>{this.state.instrumentName}</h1></Card.Title>
                            <Card.Text>{this.state.instrumentDescription}</Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>
                                <h5>M.R.P: <del>${Math.round(this.state.instrumentPrice * (1 + (new Date().getMonth() / 100)))}</del> ${this.state.instrumentPrice} </h5>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Form.Select aria-label="Select Quantity" id="quantity">
                                    {this.state.instrumentQuantity >= 1 ? <option value="1">Quantity: 1</option> : null}
                                    {this.state.instrumentQuantity >= 2 ? <option value="2">Quantity: 2</option> : null}
                                    {this.state.instrumentQuantity >= 3 ? <option value="3">Quantity: 3</option> : null}
                                    {this.state.instrumentQuantity >= 4 ? <option value="4">Quantity: 4</option> : null}
                                    {this.state.instrumentQuantity >= 5 ? <option value="5">Quantity: 5</option> : null}
                                </Form.Select>
                            </ListGroupItem>
                            <ListGroupItem>
                                <ButtonGroup>
                                    <Button size="sm" className="btn btn-outline-primary" type="submit">
                                        <FontAwesomeIcon icon={faCartPlus} /><b> ADD TO CART</b>
                                    </Button>
                                    <Button size="sm" className="btn btn-outline-success" type="submit" onClick={this.placeOrder}>
                                        <FontAwesomeIcon icon={faCreditCard} /><b> PLACE ORDER</b>
                                    </Button>
                                </ButtonGroup>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Button size="sm" className="btn btn-outline-secondary" type="submit" onClick={this.goBack}>
                                    <FontAwesomeIcon icon={faBackward} /><b> BACK</b>
                                </Button>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </center>
                <Footer />
            </div>
        );
    }
}

export default UserProductDetails;