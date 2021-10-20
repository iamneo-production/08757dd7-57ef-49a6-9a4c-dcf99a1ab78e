import React, { Component } from "react";
import { Col, Row, Table } from 'react-bootstrap';
import Footer from "../Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import axios from "axios";
import UserNavigationBar from "./UserNavigationBar"

class UserOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: localStorage.getItem("email"),
            orders: [],
        };
    }

    // API Call (Get All Products)
    componentDidMount() {
        axios.post("https://8080-bdeebbfbfaacaaedbabffdcbfffeebeffbefa.examlyiopb.examly.io/orders", this.state.email)
            .then(response => response.data)
            .then((data) => {
                this.setState({
                    orders: data
                });
            });
    }

    render() {

        if (this.state.email === null) {
            this.props.history.push("/login");
        }

        return (
            <div>
                <UserNavigationBar history={this.props.history} />
                <div className="container mt-5 mb-5">
                    <Link className="mb-3 btn btn-outline-secondary btn-sm" to={"/home"}><FontAwesomeIcon icon={faBackward} /><b> BACK</b></Link>
                    <Row>
                        <Col lg={12}>
                            <Table striped hover id="instrumentOrderBody">
                                <thead>
                                    <tr>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.orders.length === 0 ?
                                            <tr align="center">
                                                <td colSpan="4">No Orders Available</td>
                                            </tr> :
                                            this.state.orders.map((order) => (
                                                <tr key={order.orderId}>
                                                    <td>{order.productName}</td>
                                                    <td>${order.price}</td>
                                                    <td>{order.quantity}</td>
                                                    <td>${order.totalPrice}</td>
                                                </tr>
                                            ))
                                    }

                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </div>
                <Footer />
            </div>
        );
    }
}

export default UserOrder;