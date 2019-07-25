import React, { useState, useCallback } from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import Fields from './Fields';
import { toast } from 'react-toastify';
import CustomSelect from '/imports/ui/components/CustomSelect';
import CustomInput from '/imports/ui/components/CustomInput';
import { Button, Link } from 'react-bootstrap';
import Users from '/imports/api/users';
import { withTracker } from 'meteor/react-meteor-data';
import IsVerified from './IsVerified';

// TODO: SEE https://guide.meteor.com/accounts.html#dont-use-profile doc for imp user setting
const Setting = ({ userId, user, alertlist }) => {
    const [ username,  setUsername  ] = useState("");
    const [ gender,    setGender    ] = useState("");
    const [ old,       setOld       ] = useState("");
    const [ city,      setCity      ] = useState("");
    const [ email,     setEmail     ] = useState("");
    const [ roomname,  setRoomname  ] = useState("");

    const update = useCallback((e, { name, value }) => {
        switch(name) {
        case 'gender':
            setGender(value);
            break;
        case 'old':
            setOld(value);
            break;
        case 'city':
            setCity(value);
            break;
        case 'username':
            setUsername(value)
            break;
        case 'email':
            setEmail(value);
            break;
        case 'roomname':
            setRoomname(value);
            break;
        }
    }, [ setGender, setOld, setCity, setUsername, setEmail, setRoomname ]);

    const save = useCallback(( user ) => {
        console.log(old)
        Meteor.call("users.update", {
                id: userId,
                gender: gender,
                old: old,
                city: city,
                username: username,
                email: email
            }), (err) => {
            if (err) {
                console.log(e.reason);
            }else{
                alertlist = [{
                    name: "emailsend",
                    text: "An email has been send to your inbox (check your spam otherwise)",
                    variant: "primary" 
                }]
            }
        }
    }, [gender, old, city, username, email]);

    return (

        <div>
            {/* <Fields
                update={update}
                state={{
                    gender,
                    old,
                    city,
                }}
            /> */}
            <h1></h1>
            <CustomInput
                update={update}
                type="string"
                name="username"
                key="username"
                state={{ gender, old, city, username, email, roomname }}
                label="username"
            />
            <CustomInput
                update={update}
                type="string"
                name="email"
                key="email"
                state={{ gender, old, city, username, email, roomname }}
                label="email"
            />
            <CustomSelect
                update={update}
                options={[
                    {text: "Miss", value: "Miss"}, 
                    {text: "Mister", value: "Mister"}, 
                    {text: "Misses", value: "Misses"},
                ]}
                name="gender"
                key="gender"
                selected={gender}
                label="gender"
            />
            <CustomInput
                update={update}
                type="number"
                name="old"
                key="old"
                state={{ gender, old, city, username, email, roomname }}
                label="how old ?"
            />
            <CustomInput
                update={update}
                type="string"
                name="city"
                key="city"
                state={{ gender, old, city, username, email, roomname }}
                label="city"
            />
            <Button onClick={save}>
              Save
            </Button>
            <IsVerified userId={userId} user={user} update={update} roomname={roomname}/>
        </div>
    );
};

export default withTracker(() => {
    return {
    userId: Meteor.userId(),
    user: Meteor.user() || {}
    }
}) (Setting);