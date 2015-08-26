import React from 'react';

import Landing from '../Landing/Landing';
import {RaisedButton, Styles} from 'material-ui'

let ThemeManager = new Styles.ThemeManager();

import './_App.scss';

class App extends React.Component {

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    return (
      <div>
        <RaisedButton label='Test' />
        <Landing />
      </div>
    );
  }
}

App.childContextTypes = {muiTheme: React.PropTypes.object};

export default App;
