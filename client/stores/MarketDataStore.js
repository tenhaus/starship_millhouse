import Alt from '../alt';
import MarketDataActions from '../actions/MarketDataActions';
import _ from 'lodash';

var Client = new Barchart.RealtimeData.Connection();

class MarketDataStore {

  constructor() {
    var self = this;
    this.symbols = ['AAPL', 'TVIX', 'TMUX', 'S'];
    Client.connect('qsws-us-e-01.aws.barchart.com', 'chayen', 'devtest');

    _.forEach(this.symbols, function(symbol) {
      Client.on('marketUpdate', self.onMarketUpdate, symbol);
    });

    this.bindListeners({
      handleGetQuote: MarketDataActions.GET_QUOTE
    });
  }

  onMarketUpdate(message) {
    var quote = Client.getMarketState().getQuote(message.symbol);
    console.log(quote.symbol, quote.tradePrice, quote.tradeSize);
  };

  handleGetQuote(quote) {
    this.quote = quote;
  }
}

export default Alt.createStore(MarketDataStore, 'MarketDataStore');
