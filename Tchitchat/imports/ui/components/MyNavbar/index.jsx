import React, { useState, useCallback } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link, Redirect } from 'react-router-dom';
import { NavDropdown, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Logswitch from './Logswitch';
import MyAlert from './MyAlert';
import PropTypes from "prop-types";
import { withRouter } from "react-router";

const MyNavbar = ({ userId, user, alertlist, history }) => {

    const [ searchquery, setSearchquery ] = useState("")

    const update = (e) => {
        console.log(e.target.value)    
        setSearchquery(e.target.value)
    }

    const send = () => {
        url = '/search/' + searchquery;
        console.log(history.push(url))
        return <Redirect to={ url } />
    }

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
            <Form inline className="ml-auto mr-auto">
                <FormControl type="text" placeholder="Search for room or user" className="mr-sm-2" onChange={update} />
                <Button variant="outline-info" onClick={send}>Search</Button>
            </Form>
            <Logswitch/>
        </Navbar.Collapse>
        </Navbar>
        <MyAlert alertlist={alertlist}/>
        </div>
    );
};

export default withRouter(MyNavbar);