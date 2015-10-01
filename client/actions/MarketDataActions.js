import Alt from '../alt';

var Client = new Barchart.RealtimeData.Connection();

class MarketDataActions {

  constructor() {
    Client.connect('qsws-us-e-01.aws.barchart.com', 'chayen', 'devtest');
  }

  addSymbol(symbol) {
    var self = this;

    Client.on('marketUpdate', function(message) {
      var quote = Client.getMarketState().getQuote(message.symbol);
      self.actions.addSymbolQuote(quote);
    }, symbol);

    this.dispatch(symbol);
  }

  addSymbolQuote(quote) {
    this.dispatch(quote);
  }

}

export default Alt.createActions(MarketDataActions);
