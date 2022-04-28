import 'core-js/features/string/ends-with';
// import 'core-js/actual';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import endsWith from './endsWith';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/main.scss';



ReactDOM.render(<App />, document.getElementById('root'));
