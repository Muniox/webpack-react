import endsWith from './endsWith';
import 'core-js/actual/array/from';       // <- at the top of your entry point
import 'core-js/actual/array/group-by';   // <- at the top of your entry point
import 'core-js/actual/set';              // <- at the top of your entry point
import 'core-js/actual/promise';          // <- at the top of your entry point
import 'core-js/actual/structured-clone'; // <- at the top of your entry point
import 'core-js/actual/queue-microtask';  // <- at the top of your entry point
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/main.scss';



ReactDOM.render(<App />, document.getElementById('root'));
