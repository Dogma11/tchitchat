import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom';
import RoomList from './RoomList';

const MySidebar = () => {

  return (
    <div className="mr-5"> 
      <Sidebar as={Menu} animation='overlay' icon='labeled' inverted vertical visible width='thin' className="mysidebar">
        <RoomList />
        <Menu.Item as='a'>
            <Icon name='plus' />
            New room
        </Menu.Item>
      </Sidebar>
    </div>
  )
}

export default MySidebar;