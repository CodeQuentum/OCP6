import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RoutesComponent from './routes'; 
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <RoutesComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();