import React, { useState, useCallback } from 'react';
import { Meteor } from 'meteor/meteor';
import { Tab, Button } from 'semantic-ui-react'
import CustomInput from '../../components/CustomInput';
import Roomfinder from './Roomfinder';
import Userfinder from './Userfinder';

const Search = ({ match }) => {

    const [ searchquery, setSearchquery ] = useState(match.params.query);

    const update = (e, { value }) => {
        setSearchquery(value);
    }

    return (
        <div>
            <CustomInput 
                type="text"
                key="searchquery"
                update={update}
                value={searchquery}
                placeholder="Your search here"
                name="searchquery"
            />
            <hr/>
            <h1>Rooms</h1>
            <Roomfinder searchquery={searchquery} />
            <hr/>
            <h1>Users</h1>
            <Userfinder searchquery={searchquery} />
        </div>
    )

}

export default Search;