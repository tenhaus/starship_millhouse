import Alt from '../alt';
import DesignActions from '../actions/DesignActions';

class DesignStore {

  constructor() {
    this.url = '';
    this.urlLoaded = false;
    this.source = '';

    this.bindListeners({
      handleLoadUrl: DesignActions.LOAD_URL
    });
  }

  handleLoadUrl(url) {
    console.log('ntsaoeuaoehuoaeu');
  }
}

module.exports = Alt.createStore(DesignStore);
