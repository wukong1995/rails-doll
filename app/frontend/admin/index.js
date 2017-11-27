import './app.scss';
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

const admin = () => {
  ReactDom.render(
    <App />,
    document.getElementById('admin-app')
  );
};

export default admin;
