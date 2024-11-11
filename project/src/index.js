import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main';
import Contents from './Contents';
import About from './About';
import Discounts from './Discount';
import Countdown from './Countdown';
import News from './News';
import Partner from './Partner';
import Contact from './Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Main/>
  <Contents/>
  <About/>
  <Discounts/>
  <Countdown/>
  <News/>
  <Partner/>
  <Contact/>
  </React.StrictMode>
);


