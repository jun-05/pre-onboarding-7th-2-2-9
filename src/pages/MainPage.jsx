import React from 'react';
import tw from 'tailwind-styled-components';
import DashBoard from '../component/main/DashBoard';
import DashboardTitle from '../component/main/DashBoardTitle';

const MainPage = () => {
  return (
    <MainPageBlock>
      <DashboardTitle />
      <DashBoard />
    </MainPageBlock>
  );
};
const MainPageBlock = tw.div``;

export default MainPage;

//
