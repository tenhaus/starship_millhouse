import React from 'react';
import _ from 'lodash';

import {List} from 'material-ui';

import MarketDataActions from '../../actions/MarketDataActions';
import WatchListStore from '../../stores/WatchListStore';
import MarketDataStore from '../../stores/MarketDataStore';

import SymbolButton from './SymbolButton';

class WatchList extends React.Component {

  constructor() {
    super();

    this.state = {
      watchList: WatchListStore.getState(),
      selectedSymbol: MarketDataStore.selectedSymbol
    };

    this.renderSymbols = this.renderSymbols.bind(this);
    this.onSymbolChanged = this.onSymbolChanged.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    WatchListStore.listen(this.onChange);
    MarketDataStore.listen(this.onSymbolChanged);
  }

  componentWillUnmount() {
    WatchListStore.unlisten(this.onChange);
    MarketDataStore.unlisten(this.onSymbolChanged);
  }

  onSymbolSelected(symbol) {
    MarketDataActions.selectSymbol(symbol);
  }

  onChange(state) {
    this.setState(state);
  }

  onSymbolChanged(state) {
    this.setState({
      selectedSymbol: state.selectedSymbol
    })
  }

  renderSymbols() {
    var self = this;

    return _.map(self.state.watchList.symbols, function(symbol) {
      let selected = symbol === self.state.selectedSymbol;

      return (
        <SymbolButton symbol={symbol}
          selected={selected} onSymbolSelected={self.onSymbolSelected} />
      );
    });
  }

  render() {
    let symbols = this.renderSymbols();

    return (
      <div>
        <List subheader="Watch List">
          {symbols}
        </List>
      </div>
    );
  }
}

export default WatchList;
