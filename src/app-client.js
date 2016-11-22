import React from 'react';
import ReactDOM from 'react-dom';
import MessageList from './components/MessageList'

window.onload = () => {
  ReactDOM.render(<MessageList/>, document.getElementById('main'));
};
