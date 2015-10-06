import Alt from '../alt';
import MarketDataActions from '../actions/MarketDataActions';
import _ from 'lodash';

class MarketDataStore {

  constructor() {
    this.selectedSymbol = 'TVIX';
    this.symbols = [];
    this.watchedSymbols = [];
    this.data = {};

    this.bindListeners({
      handleSelectSymbol: MarketDataActions.SELECT_SYMBOL,
      handleAddSymbol: MarketDataActions.ADD_SYMBOL,
      handleAddSymbolQuote: MarketDataActions.ADD_SYMBOL_QUOTE
    });
  }

  handleSelectSymbol(symbol) {
    this.selectedSymbol = symbol;
  }

  handleAddSymbol(symbol) {
    this.symbols.push(symbol);
    this.data[symbol] = {
      quotes: []
    };
  }

  handleAddSymbolQuote(quote) {
    console.log(quote);
    this.data[quote.symbol].openPrice = quote.openPrice;
    this.data[quote.symbol].highPrice = quote.highPrice;
    this.data[quote.symbol].lowPrice = quote.lowPrice;
    this.data[quote.symbol].settlementPrice = quote.settlementPrice;


    this.data[quote.symbol].quotes.push({
      id: _.uniqueId(quote.symbol),
      time: quote.time.toString(),
      tradeSize: quote.tradeSize,
      tradePrice: quote.tradePrice
    });
  }
}

export default Alt.createStore(MarketDataStore, 'MarketDataStore');
