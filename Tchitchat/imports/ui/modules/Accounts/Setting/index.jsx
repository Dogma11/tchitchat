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
import Myrooms from './Myrooms';

// TODO: SEE https://guide.meteor.com/accounts.html#dont-use-profile doc for imp user setting
const Setting = ({ userId, user, alertlist }) => {
    const [ username,  setUsername  ] = useState("");
    const [ gender,    setGender    ] = useState("");
    const [ birthdate, setBirthdate ] = useState("");
    const [ city,      setCity      ] = useState("");
    const [ email,     setEmail     ] = useState("");
    const [ roomname,  setRoomname  ] = useState("");

    const update = useCallback((e, { name, value }) => {
        switch(name) {
        case 'gender':
            setGender(value);
            break;
        case 'birthdate':
            setBirthdate(value);
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
    }, [ setGender, setBirthdate, setCity, setUsername, setEmail, setRoomname ]);

    const save = useCallback((e ) => {
        e.preventDefault();
        Meteor.call("users.update", {
                id: userId,
                gender: gender,
                birthdate: birthdate,
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
    }, [gender, birthdate, city, username, email]);

    return (

        <div className="row w-75">
            <div>
                {/* <Fields
                    update={update}
                    state={{
                        gender,
                        birthdate,
                        city,
                    }}
                /> */}
                <h1></h1>
                <form onSubmit={save}>
                <CustomInput
                    update={update}
                    type="string"
                    name="username"
                    key="username"
                    state={{ gender, birthdate, city, username, email, roomname }}
                    label="username"
                    />
                <CustomInput
                    update={update}
                    type="string"
                    name="email"
                    key="email"
                    state={{ gender, birthdate, city, username, email, roomname }}
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
                    type="date"
                    name="birthdate"
                    key="birthdate"
                    state={{ gender, birthdate, city, username, email, roomname }}
                    label="birthdate"
                    />
                <CustomInput
                    update={update}
                    type="string"
                    name="city"
                    key="city"
                    state={{ gender, birthdate, city, username, email, roomname }}
                    label="city"
                    />
                <Button onClick={save}>
                Save
                </Button>
                </form>
                <IsVerified userId={userId} user={user} update={update} roomname={roomname}/>
            </div>
            <Myrooms />
        </div>
    );
};

export default withTracker(() => {
    return {
    userId: Meteor.userId(),
    user: Meteor.user() || {}
    }
}) (Setting);