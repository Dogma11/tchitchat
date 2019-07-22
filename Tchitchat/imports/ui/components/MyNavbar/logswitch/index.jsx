
import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Button, Row } from 'react-bootstrap';

const Logswitch = ({ userId, user}) => {
    const Disconnect = () => {
        Meteor.logout();
    };

    if (userId && user) {
        return(
            <div>
                <Row>
                    <h1>{user.username || "error" }</h1>
                    <Button
                        onClick={Disconnect}
                    >                
                    Disconnect    
                    </Button>
                </Row>
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