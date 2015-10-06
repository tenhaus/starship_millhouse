import React from 'react';
import _ from 'lodash';

import MarketDataStore from '../../stores/MarketDataStore';
import './_SymbolSummary.scss';

class SymbolSummary extends React.Component {

  constructor() {
    super();
    this.state = MarketDataStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    MarketDataStore.listen(this.onChange);
  }

  componentWillUnmount() {
    MarketDataStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  renderDetails() {
    var quote = this.state.data[this.state.selectedSymbol];
    if(!quote) return;

    return (
      <ul>
        <li>Current <em>{quote.settlementPrice}</em></li>
        <li>Open <em>{quote.openPrice}</em></li>
        <li>High <em>{quote.highPrice}</em></li>
        <li>Low <em>{quote.lowPrice}</em></li>
      </ul>
    );
  }

  render() {
    let details = this.renderDetails();

    return (
      <div className='symbol-summary'>
        <h1>{this.state.selectedSymbol}</h1>
        {details}
      </div>
    );
  }
}

export default SymbolSummary;
