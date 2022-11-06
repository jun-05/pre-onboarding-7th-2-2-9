import React from 'react';
import tw from 'tailwind-styled-components';
import NavBottomContainer from './Nav/NavBottomContainer';
import AdServiceContainer from './Nav/AdServiceContainer';
import MainServiceContainer from './Nav/MainServiceContainer';
import LogoCotainer from './Nav/LogoCotainer';

const Nav = () => {
  return (
    <NavBlock>
      <LogoCotainer />
      <MainServiceContainer />
      <AdServiceContainer />
      <NavBottomContainer />
    </NavBlock>
  );
};
const NavBlock = tw.div`
  md:flex
  hidden
  flex-col
  relative
  bg-white
  h-screen
  min-w-[320px]
  [&>div]:mt-10
  px-10
    `;

export default Nav;
