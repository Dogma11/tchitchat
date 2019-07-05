import React, { useState, useCallback } from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import Fields from './Fields';
import { toast } from 'react-toastify';
import CustomSelect from '/imports/ui/components/CustomSelect';
import CustomInput from '/imports/ui/components/CustomInput';
import Users from '/imports/api/users';
import { withTracker } from 'meteor/react-meteor-data';

// TODO: SEE https://guide.meteor.com/accounts.html#dont-use-profile doc for imp user setting
const Setting = ({ userId, user }) => {
    const [ gender,    setGender    ] = useState("");
    const [ birthdate, setBirthdate ] = useState("");
    const [ city,      setCity      ] = useState("");

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
        }
    }, [ setGender, setBirthdate, setCity ]);

    const save = useCallback(( user ) => {
        console.log(user)
        Accounts.users.update(user, {
            $set: {
                gender: gender,
                birthdate: birthdate,
                city: city
            }
        }), (err) => {
            if (err) {
                console.log(e.reason);
            }
        }
    }, []);

    return (
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
            />
            <CustomInput
                update={update}
                type="date"
                name="birthdate"
                key="birthdate"
                state={{ gender, birthdate, city }}
            />
            <CustomInput
                update={update}
                type="string"
                name="city"
                key="city"
                state={{ gender, birthdate, city }}
            />
            <button onClick={save}>
              Save
            </button>
        </div>
    );
};

export default withTracker(() => {
      return {
        userId: Meteor.userId(),
        user: Meteor.user() || {},
      }
    }) (Setting);