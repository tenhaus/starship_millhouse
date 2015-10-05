import React from 'react';
import _ from 'lodash';

import WatchListActions from '../../actions/WatchListActions';
import WatchListStore from '../../stores/WatchListStore';

import SymbolButton from './SymbolButton';

class WatchList extends React.Component {

  constructor() {
    super();
    this.state = WatchListStore.getState();
    this.renderSymbols = this.renderSymbols.bind(this);
  }

  onSymbolSelected(symbol) {
    WatchListActions.selectSymbol(symbol);
  }

  renderSymbols() {
    var self = this;

    return _.map(self.state.symbols, function(symbol) {
      return <SymbolButton symbol={symbol} onSymbolSelected={self.onSymbolSelected} />;
    });
  }

  render() {
    let symbols = this.renderSymbols();

    return (
      <div>
        <ul>{symbols}</ul>
      </div>
    );
  }
}

export default WatchList;
