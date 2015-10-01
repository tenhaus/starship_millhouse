import React from 'react';
import MarketDataStore from '../../stores/MarketDataStore';

class ChartView extends React.Component {

  constructor() {
    super();
    this.onChange = this.onChange.bind(this);

    this.state = {
      quote: MarketDataStore.getState()
    };
  }

  componentDidMount() {
    MarketDataStore.listen(this.onChange)
  }

  componentWillUnmount() {
    MarketDataStore.unlisten(this.onChange);
  }

  onChange(quote) {
    this.setState({quote: quote});
  }

  render() {
    return (
      <div>chart view</div>
    );
  }
}

export default ChartView;
