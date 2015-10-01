import Alt from '../alt';
import MarketDataActions from '../actions/MarketDataActions';

class MarketDataStore {

  constructor() {
    this.symbols = ['AAPL', 'TVIX', 'TMUS', 'S', 'XIV'];
    this.data = {};

    this.bindListeners({
      handleAddSymbol: MarketDataActions.ADD_SYMBOL,
      handleAddSymbolQuote: MarketDataActions.ADD_SYMBOL_QUOTE
    });

  }

  handleAddSymbol(symbol) {
    this.data[symbol] = {
      quotes: [],
      count: 0
    };

    console.log(this.data, symbol);
  }

  handleAddSymbolQuote(quote) {
    this.data[quote.symbol].count += 1;
    quote.key = quote.symbol + '_' + this.data[quote.symbol].count;
    this.data[quote.symbol].quotes.push(quote);
  }
}

export default Alt.createStore(MarketDataStore, 'MarketDataStore');
