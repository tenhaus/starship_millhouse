import React from 'react';
import Radium from 'radium';
import { TextField, FlatButton, Colors } from 'material-ui';

import DesignStore from '../stores/DesignStore';
import DesignActions from '../actions/DesignActions';

import './_Landing.scss';
import YinYang from './images/yin_yang.png';

class Landing extends React.Component {

  constructor() {
    super();

    this.state = DesignStore.getState();
  }

  componentDidMount() {
    DesignStore.listen(this.onChange);
  }

  componentWillUnmount() {
    DesignStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  onEnter() {
    DesignActions.loadUrl('eeee');
  }

  render() {

    if(this.state.urlLoaded) {
    }

    return (
      <div id='landing'>
        <TextField hintText="What's the URL?"
          underlineFocusStyle={{borderColor: '#c0392b', color: '#ffffff'}}
          onEnterKeyDown={this.onEnter} />
      </div>
    );
  }
}

export default Landing;
