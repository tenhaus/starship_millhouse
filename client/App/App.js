import React from 'react';

import Landing from '../Landing/Landing';
import {Styles} from 'material-ui'
import './_App.scss';

let ThemeManager = new Styles.ThemeManager();

class App extends React.Component {

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

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
