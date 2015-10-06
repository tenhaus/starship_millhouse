import Alt from '../alt';

class WatchListActions {

  addSymbol(symbol) {
    this.dispatch(symbol);
  }

  removeSymbol(symbol) {
    this.dispatch(symbol);
  }

}

export default Alt.createActions(WatchListActions);
