import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx'


const IDGenBottom = () => {
  return Math.floor((Math.random() * 1000000)) + 9000000;
}

ReactDOM.render(<App listing_id={8140709}/>, document.getElementById('reviews'));
