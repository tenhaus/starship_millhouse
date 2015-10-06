import Alt from '../alt';
import WatchListActions from '../actions/WatchListActions';
import _ from 'lodash';

class WatchListStore {

  constructor() {
    this.symbols = ['TVIX', 'AAPL', 'XIV', 'IBM', 'MSFT'];

    this.bindListeners({
      handleAddSymbol: WatchListActions.ADD_SYMBOL,
      handleRemoveSymbol: WatchListActions.REMOVE_SYMBOL,
    })
  }

  handleAddSymbol(symbol) {
    this.symbols = _.uniq(this.symbols, [symbol]);
  }

  handleRemoveSymbol(symbol) {
    this.symbols = _.without(this.symbols, symbol);
  }


}

export default Alt.createStore(WatchListStore, 'WatchListStore');
