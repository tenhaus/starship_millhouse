import React from 'react';
import MarketDataStore from '../../stores/MarketDataStore';
import MarketDataActions from '../../actions/MarketDataActions';
import _ from 'lodash';

var testSymbol = 'AAPL';

class ChartView extends React.Component {

  constructor() {
    super();
    this.onChange = this.onChange.bind(this);

    this.state = {
      quotes: MarketDataStore.getState()
    };
  }

  componentDidMount() {
    MarketDataStore.listen(this.onChange);
    MarketDataActions.addSymbol(testSymbol);
  }

  componentWillUnmount() {
    MarketDataStore.unlisten(this.onChange);
  }

  onChange(quotes) {
    this.setState({quotes: quotes});
  }

  renderSales() {
    if(this.state.quotes.data.hasOwnProperty(testSymbol)) {
      return _.map(this.state.quotes.data[testSymbol], function(quote) {
        return (
          <li key={quote.id}>{quote.time}, {quote.tradeSize}, {quote.tradePrice}</li>
        );
      });
    }
  }

  render() {
    let sales = this.renderSales();

    return (
      <div>
        <ul className='sales'>{sales}</ul>
      </div>
    );
  }
}

export default ChartView;
