import React from 'react';

import './_CandleStick.scss';

class CandleStick extends React.Component {
  render() {
    return (
      <div className='chart-wrapper {this.props.className}'>
        CandleStick
      </div>
    );
  }
}

export default CandleStick;
