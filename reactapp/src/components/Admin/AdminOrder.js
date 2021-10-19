import React, { Component } from 'react';
import AdminNavigation from './AdminNavigation';
import Footer from '../Footer';
import { Col, Row, Table, Image } from 'react-bootstrap';

class AdminOrder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: localStorage.getItem("email"),
            products: [],
        };
    }

    render() {

        if (this.state.email !== "admin") {
            this.props.history.push("/login");
        }

        return (
            <div>
                <AdminNavigation history={this.props.history} />
                <div className="container mt-5 mb-5">
                    <Row>
                        <Col lg={12}>
                            <Table bordered hover id="adminOrderBody">
                                <thead>
                                    <tr>
                                        <th>Order ID</th>
                                        <th>User ID</th>
                                        <th>Instrument Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.products.length === 0 ?
                                            <tr align="center">
                                                <td colSpan="5">No Order Available</td>
                                            </tr> :
                                            this.state.products.map((product) => (
                                                <tr key={product.productId}>
                                                    <td>
                                                        <Image src={product.imageURL} rounded width="100px" height="100px" />
                                                    </td>
                                                    <td>{product.productName}</td>
                                                    <td>{product.price}</td>
                                                    <td>{product.quantity}</td>
                                                    <td>{ }</td>
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

export default AdminOrder;