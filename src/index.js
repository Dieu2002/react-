import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import Member from './vd2';
//import Car from './vd3';
// import Product from './vd4';
// import Baitap from './baitap';
// import vdForm from './vdForm';
import Form from './vdForm';
import Score from './Score';
import Menu from './Menu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Form /> */}
    {/* <Score /> */}
    <Menu />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
