import React from 'react';

import MarketDataStore from '../../stores/MarketDataStore';

class SymbolSummary extends React.Component {

  constructor() {
    super();
    this.state = MarketDataStore.getState();
  }

  render() {
    return (
      <div>Symbol Summary</div>
    );
  }
}

export default SymbolSummary;
