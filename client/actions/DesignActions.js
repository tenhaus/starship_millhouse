import Alt from '../alt';

class DesignActions {
  loadUrl(url) {
    return(url);
  }
}

module.exports = Alt.createActions(DesignActions);
