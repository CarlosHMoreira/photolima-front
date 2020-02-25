import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';

import App from './components/App';

const root = document.getElementById('root');
// eslint-disable-next-line no-console, no-unused-expressions, react/jsx-filename-extension
root ? ReactDOM.render(<App />, root) : console.log('No element root found.');
