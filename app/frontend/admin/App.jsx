import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Sidebar from './shared/Sidebar';
import Index from './main/Index';
import Members from './main/Members';

const App = () => {
  return (
    <BrowserRouter basename="/admin">
      <div>
        <div id="sidebar">
          <Sidebar />
        </div>
        <div id="main-container">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/index" />} />
            <Route path="/index" component={Index} />
            <Route path="/members" component={Members} />
            <Route path="/*" render={() => <Redirect to="/index" />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
