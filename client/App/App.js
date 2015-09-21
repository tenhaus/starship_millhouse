import React from 'react';

import Landing from '../Landing/Landing';
import CandleStick from '../CandleStick/CandleStick';

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
        <div className='main-chart-wrapper'>
          <CandleStick />
        </div>
      </div>
    );
  }
}

App.childContextTypes = {muiTheme: React.PropTypes.object};

export default App;
