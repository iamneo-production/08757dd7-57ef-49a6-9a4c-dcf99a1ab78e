import React, { Component } from "react";
import {Card, Form , Button, Col, Row, Alert} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class LoginPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            show: false,
            message: null
        };
    }

    showAlert = () => {
        var username = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        
        // Null Check
        if(username === ""){
            this.setState({
                show: true,
                message: "Email filed cannot be empty"
            });
            document.loginForm.email.focus();
            return;
        }
        else if(password === ""){
            this.setState({
                show: true,
                message: "Password field cannot be empty"
            });
            document.loginForm.password.focus();
            return;
        }

        // Admin Authentication
        if(username === "admin" && password === "admin"){
            this.setState({
                show: true,
                message: "Welcome Admin"
            });
            return;
        }

        // Email Validaition
        var mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if(!username.match(mailformat))
        {
            this.setState({
                show: true,
                message: "Enter valid email"
            });
            document.loginForm.email.focus();
            return;
        }
    }

    render(){
        return(
            <div className="container mt-5 mb-5">
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={6}>
                        
                        {this.state.show?
                        // <Alert variant="danger">{this.state.message}</Alert>
                        <Alert variant="danger" onClose={() => this.setState({show: false})} dismissible>
                                {this.state.message}
                        </Alert>
                        :null}

                        <Card id="loginBox">
                            <Card.Header><b>LOGIN</b></Card.Header>
                            <Card.Body>
                                <Form name="loginForm">
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="text" placeholder="Enter email" required/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" required/>
                                    </Form.Group>

                                    <Button size="sm" id="submitButton" variant="primary" onClick={this.showAlert}>
                                        LOGIN
                                    </Button>
                                </Form>
                            </Card.Body>
                            <Card.Footer>
                                <small>New user? <Link to={"signup"} id="signupLink"> click here</Link></small>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col lg={3}></Col>
                </Row>
                
            </div>
        );
    }
}

export default LoginPage