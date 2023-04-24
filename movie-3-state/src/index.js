import React from 'react';
import ReactDOM from 'react-dom/client';
import {AppOne, AppTwo} from './App';
import ClockApp from './Clock';

const manual = ReactDOM.createRoot(document.getElementById('manual'));
manual.render(
  <AppOne />
);

const state = ReactDOM.createRoot(document.getElementById('state'));
state.render(
  <AppTwo />
);

const clockContainer = ReactDOM.createRoot(document.getElementById('clockContainer'));
clockContainer.render(
  <ClockApp />
);