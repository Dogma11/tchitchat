import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Logged    from '/imports/ui/components/Logged';
import Nologged  from '/imports/ui/components/Nologged';
import Rooms     from '/imports/ui/modules/Rooms';
import Signup    from '/imports/ui/modules/Accounts/Signup';
import Signin    from '/imports/ui/modules/Accounts/Signin';
import Verify    from '/imports/ui/modules/Accounts/Verify';
import Missing   from '/imports/ui/modules/Accounts/Missing';
import Setting   from '/imports/ui/modules/Accounts/Setting';
import Users     from '/imports/ui/modules/Users';
import NotFound  from '/imports/ui/modules/Errors/NotFound';
import Landing   from '/imports/ui/modules/Landing';
import Wrapper   from '/imports/ui/components/Wrapper';


const App = () => (
  <Router>
    <Switch>
      <Logged   path="/rooms/:id?"          component={Rooms}        logged />
      <Logged   path="/users/:id?"          component={Users}        logged />
      <Logged   path="/setting"             component={Setting}      logged />
      <Nologged path="/missing"             component={Missing}             />
      <Nologged path="/signup"              component={Signup}              />
      <Nologged path="/signin"              component={Signin}              /> 
      <Nologged path="/verify/:token"       component={Verify}       logged />
      <Wrapper    path="/"                    component={Landing}             />
      <Wrapper    path="*"                    component={NotFound}            />
    </Switch>
  </Router>
);

export default App;
