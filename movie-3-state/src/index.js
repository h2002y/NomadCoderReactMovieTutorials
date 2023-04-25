import React from 'react';
import ReactDOM from 'react-dom/client';
import {AppOne, AppTwo} from './App';
import ClockApp from './Clock';
import DistanceApp from "./Distance";
import ConverterApp from "./Converter";

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

const distanceContainer = ReactDOM.createRoot(document.getElementById('distanceContainer'));
distanceContainer.render(
  <DistanceApp />
);

const converterContainer = ReactDOM.createRoot(document.getElementById('converterContainer'));
converterContainer.render(<ConverterApp />);