import React from 'react';

import Landing from '../Landing/Landing';
import {Styles} from 'material-ui'
import './_App.scss';

class App extends React.Component {

  render() {
    return (
      <div id="app">
        <Landing />
      </div>
    );
  }
}

App.childContextTypes = {muiTheme: React.PropTypes.object};

export default App;
