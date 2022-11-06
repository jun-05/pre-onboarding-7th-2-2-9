import React from 'react';
import { BsChevronDown } from 'react-icons/bs';
import tw from 'tailwind-styled-components';

const MainServiceContainer = () => {
  return (
    <ServiceBlock>
      <ServiceBlockText>서비스</ServiceBlockText>
      <ServiceDropDown>
        <div>매드업</div>
        <BsChevronDown />
      </ServiceDropDown>
    </ServiceBlock>
  );
};

const ServiceBlock = tw.div`
  flex
  flex-col
  [&>div]:mt-2
`;
const ServiceBlockText = tw.div`
pl-5 
text-gray-400`;

const ServiceDropDown = tw.div`
  flex
  items-center
  justify-between
  w-[240px]
  h-[60px]
  border

  px-5
  rounded-lg
  font-bold
  text-2xl

  cursor-pointer
`;

export default MainServiceContainer;
