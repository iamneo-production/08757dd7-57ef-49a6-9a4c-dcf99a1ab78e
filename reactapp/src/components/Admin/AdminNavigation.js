import React, { Component } from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'


class AdminNavigation extends Component{

    userLogout = () =>{
        localStorage.removeItem("email");
        this.props.history.push("/login");
    }

    render(){
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="adminNavbar">
                <Container>
                    <Link to={"/login"} className="navbar-brand">
                        <img src="https://cdn.freelogovectors.net/svg07/apple_music_logo.svg" width="25px" height="25px" alt="" /> Instrument Delight
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to={"/admin"} className="nav-link" id="adminProductButton">Product</Link>
                            <Link to={"/admin/orders"} className="nav-link" id="adminOrderButton">Orders</Link>
                        </Nav>
                        <Nav>
                            <Nav.Link id="logoutButton" onClick={this.userLogout}><FontAwesomeIcon icon={faSignOutAlt}/> Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default AdminNavigation