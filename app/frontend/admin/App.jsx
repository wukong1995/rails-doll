import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Index from './main/Index';
const App = () => {
  return (
    <div>
      {/* <Sidebar /> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/index" />} />
          <Route path="/index" component={Index} />
          <Route path="/*" render={() => <Redirect to="/index" />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
