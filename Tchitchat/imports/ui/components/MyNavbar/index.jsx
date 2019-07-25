import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { NavDropdown, Navbar, Nav, Row } from 'react-bootstrap';
import Logswitch from './Logswitch';
import MyAlert from './MyAlert';
const MyNavbar = ({ userId, user, alertlist }) => {
    return(
        <div className="head">
        <Navbar bg="dark" variant="dark">
        <Link to="/" className="navbar-brand"><div>Tchitchat</div><em>Le top du tchat</em></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <NavDropdown title="Rooms" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Room 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Room 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Room 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Active Room</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Logswitch/>
        </Navbar.Collapse>
        </Navbar>
        <MyAlert alertlist={alertlist}/>
        </div>
    );
};

export default MyNavbar;