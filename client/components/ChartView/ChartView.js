import React from 'react';
import MarketDataStore from '../../stores/MarketDataStore';
import MarketDataActions from '../../actions/MarketDataActions';
import _ from 'lodash';

import SymbolSummary from '../SymbolSummary/SymbolSummary';

class ChartView extends React.Component {

  constructor() {
    super();
    this.onChange = this.onChange.bind(this);

    this.state = {
      symbols: MarketDataStore.getState()
    };
  }

  componentDidMount() {
    MarketDataStore.listen(this.onChange);
  }

  componentWillUnmount() {
    MarketDataStore.unlisten(this.onChange);
  }

  onChange(symbols) {
    this.setState({symbols: symbols});
  }

  renderSales() {
    var symbol = this.state.symbols.selectedSymbol;

    if(this.state.symbols.data.hasOwnProperty(symbol)) {
      let quote = _.last(this.state.symbols.data[symbol].quotes);
      if(!quote) return;

      return (
        <li key={quote.id}>{quote.time}, {quote.tradeSize}, {quote.tradePrice}</li>
      );
    }
  }

  render() {
    let sales = this.renderSales();

    return (
      <div>
        <SymbolSummary />
        <ul className='sales'>{sales}</ul>
      </div>
    );
  }
}

export default ChartView;
