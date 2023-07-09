import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PropsFunction from './PropsFunction';
import Memoized from './Memo';

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

const memo = ReactDOM.createRoot(document.getElementById('memo'));
memo.render(
    <>
        <Memoized />
    </>
);