import React, { Component } from "react";
import {Card, Form , Button, Col, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class SignupPage extends Component{
    render(){
        return(
            <div className="container mt-4 mb-5">
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={6}>
                        <Card id="signupBox">
                            <Card.Header><b>SIGN UP</b></Card.Header>
                            <Card.Body>
                                <Form>
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

                                    <Button size="sm" id="submitButton" variant="primary" type="submit">
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

