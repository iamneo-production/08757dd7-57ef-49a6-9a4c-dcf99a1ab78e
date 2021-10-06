import React, {Component} from "react";
import { Col, Container, Navbar } from "react-bootstrap";

class Footer extends Component{
    render(){

        let fullYear = new Date().getFullYear();

        return (
            <Navbar fixed="bottom" bg="light" variant="light">
                <Container>
                    <Col lg={12} className="text-center text-muted">
                        <div>{fullYear}, All Rights Reserved by Instrument Delight</div>
                    </Col>
                </Container>
            </Navbar>
        );
    }
}

export default Footer
