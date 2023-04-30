import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PropsFunction from './PropsFunction';

const basic = ReactDOM.createRoot(document.getElementById('basic'));
basic.render(
    <>
        <App />
    </>
);

const funcExample = ReactDOM.createRoot(document.getElementById('function'));
funcExample.render(
    <> 
        <PropsFunction />
    </>
);