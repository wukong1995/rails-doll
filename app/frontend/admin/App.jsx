import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Index from './main/Index';
import Sidebar from './shared/Sidebar';

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
            <Route path="/*" render={() => <Redirect to="/index" />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
