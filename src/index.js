import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Routing from './routing';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);
reportWebVitals();
