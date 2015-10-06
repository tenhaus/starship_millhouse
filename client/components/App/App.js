import React from 'react';
import _ from 'lodash';

import Landing from '../Landing/Landing';
import CandleStick from '../CandleStick/CandleStick';
import ChartView from '../ChartView/ChartView';
import WatchList from '../WatchList/WatchList';
import MarketDataActions from '../../actions/MarketDataActions';
import WatchListStore from '../../stores/WatchListStore';

import {Styles} from 'material-ui'
import './_App.scss';

let ThemeManager = new Styles.ThemeManager();

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      watchList: WatchListStore.getState()
    }

    this.onWatchListChange = this.onWatchListChange.bind(this);
  }

  componentDidMount() {
    WatchListStore.listen(this.onWatchListChange);

    _.forEach(this.state.watchList.symbols, function(symbol) {
      MarketDataActions.addSymbol(symbol);
    })
  }

  componentWillUnmount() {
    WatchListStore.unlisten(this.onWatchListChange);
  }

  onWatchListChange(state) {
    this.setState({watchList: WatchListStore.getState()});
  }

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
