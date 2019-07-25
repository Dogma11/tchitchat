
import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Button, Row, Nav, NavDropdown } from 'react-bootstrap';

const Logswitch = ({ userId, user}) => {
    const Disconnect = () => {
        Meteor.logout();
    };

    if (userId && user) {
        return(
            <div>
                <Nav className="h2">
                <NavDropdown title={user.username || "error" } id="basic-nav-dropdown">
                    <Link to="/setting" className="dropdown-item" role="button">Setting</Link>
                    <NavDropdown.Item onSelect={Disconnect} className="mr-5">Disconnect</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </div>
        )
    }else{
        return(
            <div>
                <Link to="/signin">Connection</Link>  
            </div>
        );
    }
}



export default withTracker(() => ({
    userId: Meteor.userId(),
    user: Meteor.user()
}))(Logswitch);