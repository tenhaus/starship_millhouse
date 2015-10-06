import Alt from '../alt';

var Client = new Barchart.RealtimeData.Connection();

class MarketDataActions {

  constructor() {
    Client.connect('qsws-us-e-01.aws.barchart.com', 'chayen', 'devtest');
  }

  selectSymbol(symbol) {
    this.dispatch(symbol);
  }

  addSymbol(symbol) {
    Client.on('marketUpdate', this.actions.addSymbolQuote, symbol);
    this.dispatch(symbol);
  }

  addSymbolQuote(message) {
    var quote = Client.getMarketState().getQuote(message.symbol);
    this.dispatch(quote);
  }

}

export default Alt.createActions(MarketDataActions);
