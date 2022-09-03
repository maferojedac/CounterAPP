import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
/* import App from './App'; */
//editar para que jale
import {Main} from './Main';
/* import reportWebVitals from './reportWebVitals'; */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* no se muestren malas practicas, no quitarlo a menos que sepamos que estamos haciendo */
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/* reportWebVitals(); */
