import React from 'react';
import Radium from 'radium';
import { TextField, FlatButton, Colors } from 'material-ui';

import DesignStore from '../stores/DesignStore';
import DesignActions from '../actions/DesignActions';

import './_Landing.scss';
import YinYang from './images/yin_yang.png';

class Landing extends React.Component {

  onEnter() {
    DesignActions.loadUrl('eeee');
  }

  render() {
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
