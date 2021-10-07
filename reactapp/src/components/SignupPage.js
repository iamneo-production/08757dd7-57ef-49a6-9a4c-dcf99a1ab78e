import React, { Component } from "react";
import {Card, Form , Button, Col, Row, Alert} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class SignupPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            show: false,
            message: null
        };
    }

    showAlert = () => {
        var emailID = document.getElementById("email").value;
        var username = document.getElementById("username").value;
        var mobileNumber = document.getElementById("mobilenumber").value;
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirmpassword").value;

        // Null Check
        if(emailID === ""){
            this.setState({
                show: true,
                message: "Email cannot be empty"
            });
            document.signupForm.email.focus();
            return;
        }
        else if(username === ""){
            this.setState({
                show: true,
                message: "Username cannot be empty"
            });
            document.signupForm.username.focus();
            return;
        }
        else if(mobileNumber === ""){
            this.setState({
                show: true,
                message: "Mobile number cannot be empty"
            });
            document.signupForm.mobilenumber.focus();
            return;
        }
        else if(password === ""){
            this.setState({
                show: true,
                message: "Password cannot be empty"
            });
            document.signupForm.password.focus();
            return;
        }
        else if(confirmPassword === ""){
            this.setState({
                show: true,
                message: "Confirm Password cannot be empty"
            });
            document.signupForm.confirmpassword.focus();
            return;
        }

        // Email Validaition
        var mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if(!emailID.match(mailFormat))
        {
            this.setState({
                show: true,
                message: "Enter valid email"
            });
            document.signupForm.email.focus();
            return;
        }

        // Username Validation
        var usernameFormat = /^[a-zA-Z0-9]+$/;
        if(!username.match(usernameFormat))
        {
            this.setState({
                show: true,
                message: "Enter valid username"
            });
            document.signupForm.username.focus();
            return;
        }

        // Mobile Number Validation
        var mobileFormat = /^[1-9]{1}[0-9]{9}$/;
        if(!mobileNumber.match(mobileFormat))
        {
            this.setState({
                show: true,
                message: "Enter valid mobile number"
            });
            document.signupForm.mobilenumber.focus();
            return;
        }

        // Password Validation
        if(password !== confirmPassword){
            this.setState({
                show: true,
                message: "Enter same password"
            });
            document.signupForm.password.focus();
            document.signupForm.confirmpassword.focus();
            return;
        }

    }

    render(){
        return(
            <div className="container mt-4 mb-5">
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={6}>

                        {this.state.show?
                            // <Alert variant="danger">{this.state.message}</Alert>
                            <Alert variant="danger" onClose={() => this.setState({show: false})} dismissible>
                                    {this.state.message}
                            </Alert>
                        :null}

                        <Card id="signupBox">
                            <Card.Header><b>SIGN UP</b></Card.Header>
                            <Card.Body>
                                <Form name="signupForm">
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" required/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="username">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" placeholder="Enter username" required/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="mobilenumber">
                                        <Form.Label>Mobile Number</Form.Label>
                                        <Form.Control type="phone" placeholder="Enter moblie number" required pattern="[0-9]{10}"/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" required/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="confirmpassword">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control type="password" placeholder="Confirm Password" required/>
                                    </Form.Group>

                                    <Button size="sm" id="submitButton" variant="primary" onClick={this.showAlert}>
                                        SIGN UP
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
        );
    }
}

export default SignupPage

