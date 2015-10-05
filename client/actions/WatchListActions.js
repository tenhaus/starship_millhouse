import Alt from '../alt';

class WatchListActions {

  selectSymbol(symbol) {
    this.dispatch(symbol);
  }

  addSymbol(symbol) {
    this.dispatch(symbol);
  }

  removeSymbol(symbol) {
    this.dispatch(symbol);
  }

}

export default Alt.createActions(WatchListActions);
