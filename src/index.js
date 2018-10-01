import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {BrowserRouter} from 'react-router-dom';
import Statistics from'./components/Statistics';
import 'tachyons';
import { data } from './components/Data';
import { rounds } from './components/Rounds';

ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>

, document.getElementById('root'));
registerServiceWorker();
