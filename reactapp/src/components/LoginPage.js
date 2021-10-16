import React, { Component } from "react";
import {Card, Form , Button, Col, Row, Alert} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from "axios";

class LoginPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            show: false,
            message: "",
            email: "",
            password: "",
        };
    }

    valueChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // API call
    authenticateUser = (event) => {
        const UserData = {
            email: this.state.email,
            password: this.state.password,
        }
        event.preventDefault();

        if(!this.showAlert()){
            return;
        }
        else{
            axios.post("https://8080-bdeebbfbfaacaaedbabffdcbfffeebeffbefa.examlyiopb.examly.io/login", UserData)
            .then(response => {
                if(response.data){
                    this.setState({
                        show: true,
                        message: "Login successfull"
                    });
                }
                else{
                    this.setState({
                        show: true,
                        message: "Invalid email or password"
                    });
                }
            });
        }
    }

    showAlert = () => {
        // Null Check
        if(this.state.email === ""){
            this.setState({
                show: true,
                message: "Email filed cannot be empty"
            });
            document.loginForm.email.focus();
            return false;
        }
        else if(this.state.password === ""){
            this.setState({
                show: true,
                message: "Password field cannot be empty"
            });
            document.loginForm.password.focus();
            return false;
        }

        // Email Validaition
        var mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if(!this.state.email.match(mailformat) && this.state.email !== "admin"){
            this.setState({
                show: true,
                message: "Enter valid email"
            });
            document.loginForm.email.focus();
            return false;
        }
        return true;
    }

    render(){
        const {email, password} = this.state;

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
                                <Form name="loginForm" onSubmit={this.authenticateUser}>
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="text" placeholder="Enter email" name="email" 
                                        onChange={this.valueChange} value={email} autoComplete="off" required/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" name="password" 
                                        onChange={this.valueChange} value={password} autoComplete="off" required/>
                                    </Form.Group>

                                    <Button size="sm" id="submitButton" variant="primary" type="submit">
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