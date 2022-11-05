import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import styled from 'styled-components';

const Layout = () => {

  return (
    <Wrap>
      <Sidebar />
      <MainWrap>
        <Header />
        <Outlet />
      </MainWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
`;

const MainWrap = styled.main`
  flex: 1;
`;

export default Layout;