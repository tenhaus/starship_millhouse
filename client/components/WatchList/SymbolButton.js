import React from 'react';
import {Avatar, ListItem, FontIcon} from 'material-ui';

class SymbolButton extends React.Component {

  constructor() {
    super();
    this.onSymbolSelected = this.onSymbolSelected.bind(this);
  }

  onSymbolSelected(e) {
    e.preventDefault();
    this.props.onSymbolSelected(this.props.symbol);
  }

  render() {
    let selectedIcon = null;

    if(this.props.selected) {
      selectedIcon = <FontIcon className="material-icons">visibility</FontIcon>;
    }

    return (
      <ListItem
        leftIcon={selectedIcon}
        primaryText={this.props.symbol}
        onClick={this.onSymbolSelected} />
    );
  }
}

SymbolButton.defaultProps = {
  symbol: '',
  selected: false,
  onSymbolSelected: function(symbol) {}
};

export default SymbolButton;
