import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Sidebar from './shared/Sidebar';
import Home from './Home';
import Users from './users/Users';
import Products from './products/Products';

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
            <Route path="/index" component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/products" component={Products} />
            <Route path="/*" render={() => <Redirect to="/index" />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
