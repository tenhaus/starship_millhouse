import React from 'react';
import Landing from './Landing/Landing';

var AppElement = document.getElementById('app');


window.onload = function() {
  React.render(
    <div>
      Hey, what up, React
      <Landing />
    </div>,
    AppElement
  );
};
