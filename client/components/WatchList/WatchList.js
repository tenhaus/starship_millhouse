import React from 'react';
import _ from 'lodash';

import {List} from 'material-ui';

import WatchListActions from '../../actions/WatchListActions';
import WatchListStore from '../../stores/WatchListStore';

import SymbolButton from './SymbolButton';

class WatchList extends React.Component {

  constructor() {
    super();
    this.state = WatchListStore.getState();
    this.renderSymbols = this.renderSymbols.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    WatchListStore.listen(this.onChange);
  }

  componentWillUnmount() {
    WatchListStore.unlisten(this.onChange);
  }

  onSymbolSelected(symbol) {
    WatchListActions.selectSymbol(symbol);
  }

  onChange(state) {
    this.setState(state);
  }

  renderSymbols() {
    var self = this;

    return _.map(self.state.symbols, function(symbol) {
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
