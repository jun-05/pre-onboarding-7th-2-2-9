import React from 'react';
import tw from 'tailwind-styled-components';
import AdInfoContainer from './AdInfoContainer';
import DashBoardChart from './DashBoardChart';
import OptionContainer from './OptionContainer';

const DashBorardInfo = () => {
  return (
    <DashBorardInfoBlock>
      <AdInfoContainer />
      <OptionContainer />
      <DashBoardChart />
    </DashBorardInfoBlock>
  );
};
const DashBorardInfoBlock = tw.div`
    flex
    flex-col
    h-[960px]

    mt-5
    p-5

    bg-white
    rounded-3xl

`;

export default DashBorardInfo;
