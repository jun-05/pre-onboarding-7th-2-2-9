import React from 'react';
import tw from 'tailwind-styled-components';
import DashBorardInfo from './DashBorardInfo';

const DashBoard = () => {
  return (
    <DashBoardBlock>
      <InfoTitle>통합 광고 현황</InfoTitle>
      <DashBorardInfo />
    </DashBoardBlock>
  );
};
const DashBoardBlock = tw.div`
flex
flex-col
max-w-[1440px]
px-10
py-5
`;

const InfoTitle = tw.div`
font-bold
text-[16px]
`;

export default DashBoard;
