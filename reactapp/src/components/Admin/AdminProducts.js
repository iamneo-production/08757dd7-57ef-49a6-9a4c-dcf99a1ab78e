import React, { Component } from "react";
import AdminNavigation from "./AdminNavigation";
import {Col, Row, Table, Image, Button, ButtonGroup} from 'react-bootstrap';
import Footer from "../Footer";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartPlus, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import axios from "axios";

class AdminProducts extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: localStorage.getItem("email"),
            products: [],
        };
    }

    // API Call (Get All Products)
    componentDidMount(){
        axios.get("http://localhost:8080/admin/getProducts")
        .then(response => response.data)
        .then((data) => {
            this.setState({
                products: data
            });
        });
    }
    
    // API Call (Delete Product)
    deleteProduct = (productId) =>{
        var decision = window.confirm("Do you really want to delete this product?");
        if(decision){
            axios.get("http://localhost:8080/admin/delete/" + productId)
            .then(response => {
                if(response.data !== null){
                    // Removing deleted row from table
                    this.setState({
                        products: this.state.products.filter(product => product.productId !== productId)
                    });
                }
            });
        }
    };


    render(){

        if(this.state.email !== "admin"){
            this.props.history.push("/login");
        }

        return(
            <div>
                <AdminNavigation history={this.props.history}/>
                <div className="container mt-5 mb-5">
                    <Link className="mb-3 btn btn-outline-primary btn-md" to={"/addProduct"}><FontAwesomeIcon icon={faCartPlus} /><b> ADD PRODUCTS</b></Link>
                    <Row>
                        <Col lg={12}>
                        <Table bordered hover id="adminDashboard">
                            <thead>
                                <tr>
                                <th>Images</th>
                                <th>Instrument Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.products.length === 0? 
                                    <tr align="center">
                                        <td colSpan="5">No Product Available</td>
                                    </tr> :
                                    this.state.products.map((product) => (
                                    <tr key={product.productId}>
                                        <td>
                                            <Image src={product.imageURL} rounded width="100px" height="100px"/>
                                        </td>
                                        <td>{product.productName}</td>
                                        <td>{product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td>
                                            <ButtonGroup>
                                                <Link to={"/admin/editProduct/" + product.productId} className="btn btn-sm btn-outline-primary"><FontAwesomeIcon icon={faEdit} /><b> Edit</b></Link>
                                                <Button size="sm" variant="outline-danger" onClick={this.deleteProduct.bind(this, product.productId)} ><FontAwesomeIcon icon={faTrash} /><b> Delete</b></Button>
                                            </ButtonGroup>
                                        </td>
                                    </tr>
                                    ))
                                }
                                
                            </tbody>
                            </Table>
                        </Col>
                    </Row>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default AdminProducts