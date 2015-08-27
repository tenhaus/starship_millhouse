import React from 'react';
import Router from 'react-router';
import Routes from './routes';
import TapEvents from 'react-tap-event-plugin';
import App from './App/App';

var AppElement = document.getElementById('app');

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, AppElement);
});

// I'm not sure what this is for, but material-ui
// says they need it

TapEvents();