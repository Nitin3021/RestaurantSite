import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-slideshow-image/dist/styles.css';

ReactDOM.render(<AppRouter />, document.getElementById('app'));