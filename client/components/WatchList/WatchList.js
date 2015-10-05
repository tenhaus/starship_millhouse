import React from 'react';
import _ from 'lodash';

import {Avatar, List, ListItem, FontIcon} from 'material-ui';

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
      let selected = symbol === self.state.selectedSymbol;
      let avatar = <Avatar>{symbol}</Avatar>;
      let selectedIcon = null;

      if(selected) {
        selectedIcon = <FontIcon className="material-icons">visibility</FontIcon>;
      }

      return (
        <ListItem
          leftIcon={selectedIcon}
          primaryText={symbol} />
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
