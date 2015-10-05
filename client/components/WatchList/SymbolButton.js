import React from 'react';

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
    return <a onClick={this.onSymbolSelected} href='#'>{this.props.symbol}</a>;
  }
}

SymbolButton.defaultProps = {
  symbol: '',
  onSymbolSelected: function(symbol) {}
};

export default SymbolButton;
