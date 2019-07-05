import React from 'react';
import { Meteor } from 'meteor/meteor';
import { hydrate } from 'react-dom';
import App from './App';

global.cerr = (message, label = "DEVLOG") => (console.log(`[${label}]`, message), message);

Meteor.startup(() => {
  hydrate(<App />, document.getElementById('react-target'));
});
