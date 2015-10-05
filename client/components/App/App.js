import React from 'react';

import Landing from '../Landing/Landing';
import CandleStick from '../CandleStick/CandleStick';
import ChartView from '../ChartView/ChartView';
import WatchList from '../WatchList/WatchList';

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
        <div className='header top'></div>
        <div className='main-wrapper'>
          <div className='main'>
            <ChartView />
          </div>
          <div className='left-column'>
            <WatchList className='watch-list'/>
          </div>
          <div className='right-column'></div>
        </div>
        <div className='footer'></div>
      </div>
    );
  }
}

App.childContextTypes = {muiTheme: React.PropTypes.object};

export default App;
