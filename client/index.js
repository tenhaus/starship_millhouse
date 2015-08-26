import React from 'react';
import App from './App/App';

var AppElement = document.getElementById('app');

let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


window.onload = function() {
  React.render(
    <div>
      <App />
    </div>,
    AppElement
  );
};
