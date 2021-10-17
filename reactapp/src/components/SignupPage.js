import React, { Component } from "react";
import {Card, Form , Button, Col, Row, Alert} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from "axios";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserPlus} from '@fortawesome/free-solid-svg-icons'


class SignupPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            show: false,
            message: "",
            alertVariant: "",
            email: "",
            username: "",
            mobilenumber: "",
            password: "",
            confirmpassword: ""
        };
    }

    // API call
    createUser = (event) => {
        const User = {
            email: this.state.email,
            username: this.state.username,
            mobilenumber: this.state.mobilenumber,
            password: this.state.password,
            confirmpassword: this.state.confirmpassword
        }
        event.preventDefault();
        if(!this.showAlert()){
            return;
        }
        else{
            axios.post("https://8080-bdeebbfbfaacaaedbabffdcbfffeebeffbefa.examlyiopb.examly.io/signup", User)
            .then(response => {
                if(response.data){
                    this.setState({
                        show: true,
                        message: "Account created successfully, please login!",
                        alertVariant: "success"
                    });
                }
                else{
                    this.setState({
                        show: true,
                        message: "Account already exists with this email, please login!",
                        alertVariant: "warning"
                    });
                }
            });
        }
    }

    valueChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    showAlert = () => {
        // Username Validation
        var usernameFormat = /^[a-zA-Z0-9]+$/;
        if(!this.state.username.match(usernameFormat))
        {
            this.setState({
                show: true,
                message: "Enter valid username",
                alertVariant: "danger"
            });
            document.signupForm.username.focus();
            return false;
        }

        // Password Validation
        if(this.state.password !== this.state.confirmpassword){
            this.setState({
                show: true,
                message: "Retype same password",
                alertVariant: "danger"
            });
            document.signupForm.password.focus();
            document.signupForm.confirmpassword.focus();
            return false;
        }
        return true;
    }

    render(){
        const {email, username, mobilenumber, password, confirmpassword} = this.state;

        return(
            <div>
                <NavigationBar/>
                <div className="container mt-4 mb-5">
                    <Row>
                        <Col lg={3}></Col>
                        <Col lg={6}>

                            {this.state.show?
                                <Alert variant={this.state.alertVariant} onClose={() => this.setState({show: false, alertVariant: "danger"})} dismissible>
                                        {this.state.message}
                                </Alert>
                            :null}

                            <Card id="signupBox">
                                <Card.Header><b>SIGN UP</b></Card.Header>
                                <Card.Body>
                                    <Form name="signupForm" onSubmit={this.createUser}>
                                        <Form.Group className="mb-3" controlId="email">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" name="email" 
                                            onChange={this.valueChange} value={email} autoComplete="off" required/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="username">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control type="text" placeholder="Enter username" name="username" 
                                            onChange={this.valueChange} value={username} autoComplete="off" required/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="mobilenumber">
                                            <Form.Label>Mobile Number</Form.Label>
                                            <Form.Control type="phone" placeholder="Enter moblie number" name="mobilenumber" 
                                            onChange={this.valueChange} value={mobilenumber} autoComplete="off" required pattern="[0-9]{10}"/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="password">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" name="password" 
                                            onChange={this.valueChange} value={password} autoComplete="off" required/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="confirmpassword">
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control type="password" placeholder="Confirm Password" name="confirmpassword" 
                                            onChange={this.valueChange} value={confirmpassword} autoComplete="off" required/>
                                        </Form.Group>

                                        <Button size="sm" id="submitButton" variant="primary" type="submit">
                                            <FontAwesomeIcon icon={faUserPlus} /><b> SIGN UP</b>
                                        </Button>
                                    </Form>
                                </Card.Body>
                                <Card.Footer>
                                    <small>Already a member? <Link to={"login"} id="signinLink"> click here</Link></small>
                                </Card.Footer>
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

export default SignupPage
