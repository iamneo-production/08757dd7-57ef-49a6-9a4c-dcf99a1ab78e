import React, { Component } from "react";
import {Card, Form , Button, Col, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class LoginPage extends Component{
    render(){
        return(
            <div className="container mt-5 mb-5">
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={6}>
                        <Card id="loginBox">
                            <Card.Header><b>LOGIN</b></Card.Header>
                            <Card.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" required/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" required/>
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