import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <React.Suspense fallback={<div>Loading</div>}>
          <GlobalStyle />
          <Router />
        </React.Suspense>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;
