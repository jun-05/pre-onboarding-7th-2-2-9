import React from 'react';
import tw from 'tailwind-styled-components';
import BoardContent from './BoardContent';

const DetailContainer = () => {
  return (
    <DetailContainerBlock>
      <TitleBlock>광고관리</TitleBlock>
      <BoardContent />
    </DetailContainerBlock>
  );
};
const DetailContainerBlock = tw.div`
flex
flex-col

max-w-[1440px]
w-full

px-10
py-5`;

const TitleBlock = tw.div`
text-[26px]
font-bold
`;

export default DetailContainer;
