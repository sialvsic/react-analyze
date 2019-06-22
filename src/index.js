import React from './react';
import ReactDOM from './react-dom';

ReactDOM.render(
  <div id='react-root'>
    this is root element
    <span className='word'>
      I am a span
    </span>
  </div>,
  document.getElementById('root'),
);
