import React, { Component } from "react";
import { Col, Container, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'


class Footer extends Component {
    render() {

        let fullYear = new Date().getFullYear();

        return (
            <Navbar fixed="bottom" bg="dark" variant="dark">
                <Container>
                    <Col lg={12} className="text-center text-muted">
                        <div>Copyright <FontAwesomeIcon icon={faCopyright} /> {fullYear}, All Rights Reserved by Instrument Delight</div>
                    </Col>
                </Container>
            </Navbar>
        );
    }
}

export default Footer
