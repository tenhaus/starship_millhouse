import React from 'react';
import MarketDataStore from '../../stores/MarketDataStore';
import MarketDataActions from '../../actions/MarketDataActions';
import _ from 'lodash';

import SymbolSummary from '../SymbolSummary/SymbolSummary';

var testSymbol = 'TVIX';

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
    if(this.state.symbols.data.hasOwnProperty(testSymbol)) {
      let quote = _.last(this.state.symbols.data[testSymbol].quotes);
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
