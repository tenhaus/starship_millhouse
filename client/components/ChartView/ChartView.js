import React from 'react';
import MarketDataStore from '../../stores/MarketDataStore';
import MarketDataActions from '../../actions/MarketDataActions';
import _ from 'lodash';

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
    MarketDataActions.addSymbol('AAPL');
  }

  componentWillUnmount() {
    MarketDataStore.unlisten(this.onChange);
  }

  onChange(quotes) {
    this.setState({quotes: quotes});
  }

  renderSales() {
    if(this.state.quotes.data.hasOwnProperty('AAPL')) {
      return _.map(this.state.quotes.data.AAPL.quotes, function(quote) {
        return (
          <li key={quote.key}>{quote.lastUpdate}, {quote.tradePrice}</li>
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
