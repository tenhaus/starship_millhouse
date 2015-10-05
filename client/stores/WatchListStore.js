import Alt from '../alt';
import WatchListActions from '../actions/WatchListActions';
import _ from 'lodash';

class WatchListStore {

  constructor() {
    this.selectedSymbol = 'TVIX';
    this.symbols = ['TVIX', 'AAPL', 'XIV'];

    this.bindListeners({
      handleSelectSymbol: WatchListActions.SELECT_SYMBOL,
      handleAddSymbol: WatchListActions.ADD_SYMBOL,
      handleRemoveSymbol: WatchListActions.REMOVE_SYMBOL,
    })
  }

  handleSelectSymbol(symbol) {
    this.selectedSymbol = symbol;
  }

  handleAddSymbol(symbol) {
    this.symbols = _.uniq(this.symbols, [symbol]);
  }

  handleRemoveSymbol(symbol) {
    this.symbols = _.without(this.symbols, symbol);
  }


}

export default Alt.createStore(WatchListStore, 'WatchListStore');
