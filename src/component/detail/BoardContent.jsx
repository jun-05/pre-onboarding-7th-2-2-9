import React from 'react';
import tw from 'tailwind-styled-components';
import AdDropDown from './AdDropDown';

import CardContent from './CardContent';

const BoardContent = () => {
  return (
    <DetailBoardContainerBlock>
      <OptionBlock>
        <AdDropDown />
        <AdCreateButton>광고 만들기</AdCreateButton>
      </OptionBlock>
      <CardContent />
    </DetailBoardContainerBlock>
  );
};
const DetailBoardContainerBlock = tw.div`
flex
flex-col

mt-5
p-10

w-full
h-fit
bg-white
rounded-3xl
`;

const OptionBlock = tw.div`
  flex
  justify-between
`;

const AdCreateButton = tw.button`
flex
justify-center
items-center  

w-[108px]
h-10
bg-[#586CF5]
text-white
text-[14px]
font-bold
rounded-xl
`;

export default BoardContent;
