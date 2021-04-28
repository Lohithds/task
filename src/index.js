import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AbiWeb from './Abi';
import { BrowserRouter } from 'react-router-dom';
import Deafult from './default';
import AbiWebsecond from './Abisecondpage';
import Def from './default';
import SimpleReactLightbox from 'simple-react-lightbox'

ReactDOM.render(
  <SimpleReactLightbox>
<BrowserRouter>

 <Def></Def>
 </BrowserRouter>
 </SimpleReactLightbox>,

 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
