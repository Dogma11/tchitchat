
import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import CustomInput from '/imports/ui/components/CustomInput';
import { Button, Link } from 'react-bootstrap';
import { withTracker } from 'meteor/react-meteor-data';


const IsVerified = ({ userId, user, update, roomname }) => {
    const [ done, setDone        ] = useState(false);

    var verified = false;
    if (Object.keys(user).length){
        console.log(user);
        verified = user.emails[0].verified;
    }

    const createroom = () => {
        console.log(userId)
        Meteor.call("rooms.create", { 'name': roomname, 'owner_id': userId }, (err) => {
            if (err) {
                console.log(err);
            }
        });
    }

    const sendVerifEmail = () => {
        Meteor.call("users.verifyEmail", {userId: userId});
        setDone(true);
    };
    if (done){
        return(<div>Mail send!</div>);
    }
    if (!verified && userId){
        return(<a href="#" onClick={sendVerifEmail}>Send verif email</a>);
    }else{
        return (
            <div>
                <CustomInput
                    update={update}
                    type="string"
                    name="roomname"
                    key="roomname"
                    state={{ roomname }}
                    label="Room name"
                />
                <Button onClick={createroom}>
                    Create a new room
                </Button>
            </div>
        );
    }
}

// export default withTracker(() => {
//     return {
//       userId: Meteor.userId() || {},
//       user: Meteor.user() || {},
//     }
// })(IsVerified);
export default IsVerified;