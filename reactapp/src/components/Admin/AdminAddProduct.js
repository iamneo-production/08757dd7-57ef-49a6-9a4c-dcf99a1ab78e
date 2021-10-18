import React, { Component } from 'react';
import AdminNavigation from './AdminNavigation';
import {Card, Form , Button, Col, Row, Alert} from 'react-bootstrap';
import axios from "axios";
import Footer from '../Footer';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBackward, faSave, faUndo} from '@fortawesome/free-solid-svg-icons'

class AdminAddProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: false,
            message: "",
            alertVariant: "",
            productId: "",
            instrumentName: "",
            instrumentPrice: "",
            instrumentDescription: "",
            instrumentImageURL: "",
            instrumentQuantity: "",
            email: localStorage.getItem("email")
        };
    }

    // API call (Add Product)
    addInstrument = (event) => {
        event.preventDefault();

        const Instrument = {
            productName: this.state.instrumentName,
            imageURL: this.state.instrumentImageURL,
            price: this.state.instrumentPrice,
            description: this.state.instrumentDescription,
            quantity: this.state.instrumentQuantity
        }
        
        axios.post("https://8080-bdeebbfbfaacaaedbabffdcbfffeebeffbefa.examlyiopb.examly.io/admin/addProduct", Instrument)
        .then(response => {
            if(response.data === "Product added"){
                this.setState({
                    show: true,
                    message: response.data + "!",
                    alertVariant: "success",
                });
                this.resetForm();
            }
            else{
                this.setState({
                    show: true,
                    message: response.data + "!",
                    alertVariant: "danger"
                });
            }
        });
    }

    // API Call (Update Product Data)
    updateInstrument = (event) =>{
        event.preventDefault();

        const Instrument = {
            productId: this.state.productId,
            productName: this.state.instrumentName,
            imageURL: this.state.instrumentImageURL,
            price: this.state.instrumentPrice,
            description: this.state.instrumentDescription,
            quantity: this.state.instrumentQuantity
        }
        axios.put("https://8080-bdeebbfbfaacaaedbabffdcbfffeebeffbefa.examlyiopb.examly.io/admin/productEdit", Instrument)
        .then(response => {
            if(response.data){
                alert("Product updated successfully!");
                this.props.history.push("/admin");
            }
        });
    }

    valueChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    componentDidMount(){
        const productId = +this.props.match.params.productId;
        if(productId){
            axios.get("https://8080-bdeebbfbfaacaaedbabffdcbfffeebeffbefa.examlyiopb.examly.io/admin/productEdit/" + productId)
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

    resetForm = () => {
        this.setState({
            productId: "",
            instrumentName: "",
            instrumentPrice: "",
            instrumentDescription: "",
            instrumentImageURL: "",
            instrumentQuantity: ""
        });
    }

    goBack = () =>{
        this.props.history.push("/admin");
    }

    render(){
        const {instrumentName, instrumentPrice, instrumentDescription, instrumentImageURL, instrumentQuantity} = this.state;

        if(this.state.email === null){
            this.props.history.push("/login");
        }

        return(
            <div>
                <AdminNavigation history={this.props.history}/>
                <div className="container mt-5 mb-5">
                    <Row>
                        <Col lg={3}></Col>
                        <Col lg={6}>

                            {this.state.show?
                                <Alert variant={this.state.alertVariant} onClose={() => this.setState({show: false, alertVariant: "danger"})} dismissible>
                                        {this.state.message}
                                </Alert>
                            :null}

                            <Card id="addInstrumentBody">
                                <Card.Header>{this.state.productId? <b>UPDATE PRODUCT DETAILS</b> : <b>ADD A NEW PRODUCT</b>}</Card.Header>
                                <Card.Body>
                                    <Form onSubmit={this.state.productId? this.updateInstrument : this.addInstrument}>
                                        <Form.Group className="mb-3" controlId="instrumentName">
                                            <Form.Control type="text" placeholder="Product Name" name="instrumentName" 
                                            onChange={this.valueChange} value={instrumentName} autoComplete="off" required/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="instrumentPrice">
                                            <Form.Control type="number" placeholder="Product Price" name="instrumentPrice" 
                                            onChange={this.valueChange} value={instrumentPrice} autoComplete="off" required/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="instrumentDescription">
                                            <Form.Control as="textarea" rows={3} placeholder="Product Description" name="instrumentDescription" 
                                            onChange={this.valueChange} value={instrumentDescription} autoComplete="off" required/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="instrumentImageURL">
                                            <Form.Control type="test" placeholder="Image URL" name="instrumentImageURL" 
                                            onChange={this.valueChange} value={instrumentImageURL} autoComplete="off" required/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="instrumentQuantity">
                                            <Form.Control type="number" placeholder="Product Quantity" name="instrumentQuantity" 
                                            onChange={this.valueChange} value={instrumentQuantity} autoComplete="off" required/>
                                        </Form.Group>

                                        <Button size="sm" id="addInstrumentButton" variant="outline-primary" type="submit">
                                            <FontAwesomeIcon icon={faSave} />{this.state.productId? <b> UPDATE</b> : <b> SAVE</b>}
                                        </Button>{' '}
                                        <Button size="sm" variant="outline-danger" type="submit" onClick={this.resetForm}>
                                            <FontAwesomeIcon icon={faUndo} /><b> RESET</b>
                                        </Button>    
                                    </Form>
                                </Card.Body>
                                <Button size="sm" variant="outline-secondary" type="submit" onClick={this.goBack}>
                                    <FontAwesomeIcon icon={faBackward} /><b> BACK</b>
                                </Button>
                            </Card>
                            
                        </Col>
                        <Col lg={3}></Col>
                    </Row>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default AdminAddProduct;