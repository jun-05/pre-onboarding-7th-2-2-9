import React from 'react';
import { Outlet } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import Header from './Header';
import Nav from './Nav';

const Layout = () => {
  return (
    <LayoutBlock>
      <Nav />
      <RightMainBlock>
        <Header />
        <main className="flex-none">
          <Outlet />
        </main>
      </RightMainBlock>
    </LayoutBlock>
  );
};
const LayoutBlock = tw.div`
    flex
    w-screen
    bg-[#F6F7F8]
`;

const RightMainBlock = tw.div`
  flex
  flex-col
  h-screen
  w-screen
`;

export default Layout;
