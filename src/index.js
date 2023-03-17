import React from 'react';
import ReactDOM from 'react-dom/client';
import {usePopper} from 'react-popper';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/style.css'
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
