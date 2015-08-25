import React from 'react';

var AppElement = document.getElementById('app');

window.onload = function() {
  React.render(
    <div>Hey, what up, React</div>,
    AppElement
  );
};
