import React from 'react';
import Radium from 'radium';

import {RaisedButton} from 'material-ui';

@Radium
class Landing extends React.Component {
  render() {
    return (
      <div><RaisedButton label='Landing' /></div>
    );
  }
}

export default Landing;
