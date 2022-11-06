import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { TrendProvider } from './context/TrendContex';
import init from './utils/init';
import { AdListProvider } from './context/AdListContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
const { trendService, adListService } = init();

root.render(
  <BrowserRouter>
    <TrendProvider trendService={trendService}>
      <AdListProvider adListService={adListService}>
        <App />
      </AdListProvider>
    </TrendProvider>
  </BrowserRouter>
);
