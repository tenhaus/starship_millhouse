import React from 'react';
import Router from 'react-router';
import routes from './routes';

import App from './App/App';

var AppElement = document.getElementById('app');

let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

Router.run(routes, function (Handler) {
  React.render(<Handler/>, AppElement);
});

// window.onload = function() {
//   React.render(
//     <div>
//       <App />
//     </div>,
//     AppElement
//   );
// };
