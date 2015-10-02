import Alt from '../alt';
import MarketDataActions from '../actions/MarketDataActions';
import _ from 'lodash';

class MarketDataStore {

  constructor() {
    this.symbols = [];
    this.data = {};

    this.bindListeners({
      handleAddSymbol: MarketDataActions.ADD_SYMBOL,
      handleAddSymbolQuote: MarketDataActions.ADD_SYMBOL_QUOTE
    });
  }

  handleAddSymbol(symbol) {
    this.symbols.push(symbol);
    this.data[symbol] = [];
  }

  handleAddSymbolQuote(quote) {    
    if(!quote.tradePrice) return;
    
    this.data[quote.symbol].push({
      id: _.uniqueId(quote.symbol),
      time: quote.time.toString(),
      tradeSize: quote.tradeSize,
      tradePrice: quote.tradePrice
    });
  }
}

export default Alt.createStore(MarketDataStore, 'MarketDataStore');
