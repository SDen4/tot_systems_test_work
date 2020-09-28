import React from 'react';
import {render} from 'react-dom';
import '@babel/polyfill';

import './styles/scss/main.scss';

import App from './components/app/app.js';

render(<App />, document.getElementById('root'));