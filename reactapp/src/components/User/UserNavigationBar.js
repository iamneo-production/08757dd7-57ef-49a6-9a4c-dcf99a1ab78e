import React, { Component } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faHome, faShippingFast, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'


class UserNavigationBar extends Component {

    userLogout = () => {
        localStorage.removeItem("email");
        this.props.history.push("/login");
    }

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="userNavbar">
                <Container>
                    <Link to={"/home"} className="navbar-brand">
                        <img src="https://cdn.freelogovectors.net/svg07/apple_music_logo.svg" width="25px" height="25px" alt="" /> Instrument Delight
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to={"/home"} className="nav-link" id="instrumentHomeButton"><FontAwesomeIcon icon={faHome} /> Home</Link>
                            <Link to={"/cart"} className="nav-link" id="instrumentCartButton"><FontAwesomeIcon icon={faCartArrowDown} /> Cart</Link>
                            <Link to={"/orders"} className="nav-link" id="instrumentOrderButton"><FontAwesomeIcon icon={faShippingFast} /> My Orders</Link>
                        </Nav>
                        <Nav>
                            <Nav.Link id="logoutButton" onClick={this.userLogout}><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default UserNavigationBar