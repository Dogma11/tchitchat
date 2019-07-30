import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Logged    from '/imports/ui/components/Logged';
import Nologged  from '/imports/ui/components/Nologged';
import Room      from '/imports/ui/modules/Rooms';
import Signup    from '/imports/ui/modules/Accounts/Signup';
import Signin    from '/imports/ui/modules/Accounts/Signin';
import Verify    from '/imports/ui/modules/Accounts/Verify';
import Missing   from '/imports/ui/modules/Accounts/Missing';
import Reset     from '/imports/ui/modules/Accounts/Reset';
import Setting   from '/imports/ui/modules/Accounts/Setting';
import Usertchat from '/imports/ui/modules/Usertchat';
import NotFound  from '/imports/ui/modules/Errors/NotFound';
import Landing   from '/imports/ui/modules/Landing';
import Wrapper   from '/imports/ui/components/Wrapper';
import Search    from '/imports/ui/modules/Search';



const App = () => (
  <Router>
    <Switch>
      <Logged   path="/rooms/:id?"          component={Room}         logged />
      <Logged   path="/users/:id?"          component={Usertchat}    logged />
      <Logged   path="/search/:query?"      component={Search}       logged />
      <Logged   path="/setting"             component={Setting}      logged />
      <Nologged path="/missing"             component={Missing}             />
      <Nologged path="/reset/:token"        component={Reset}               />
      <Nologged path="/signup"              component={Signup}              />
      <Nologged path="/signin"              component={Signin}              /> 
      <Wrapper  path="/verify/:token"       component={Verify}       logged />
      <Wrapper  path="/:args?"              component={Landing}             />
      <Wrapper  path="*"                    component={NotFound}            />
    </Switch>
  </Router>
);

export default App;
