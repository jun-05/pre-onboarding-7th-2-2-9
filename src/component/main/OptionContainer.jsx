import React from 'react';
import tw from 'tailwind-styled-components';

import DropDown from './DropDown';

let tempList = ['ROAS', '클릭수', '매출', '노출수', '전환수'];
let tempList2 = ['클릭수', '매출', '노출수', '전환수'];

const OptionContainer = () => {
  return (
    <OptionContainerBlock>
      <TypeSortBlock>
        <DropDown list={tempList} color="#4FADF7" />
        <DropDown list={tempList2} color="#85DA47" />
      </TypeSortBlock>
      <div>
        <select>
          <option>주간</option>
          <option>일간</option>
        </select>
      </div>
    </OptionContainerBlock>
  );
};

const OptionContainerBlock = tw.div`
flex
justify-between
h-20
p-5
items-center

`;

const TypeSortBlock = tw.div`
flex
gap-4
`;

export default OptionContainer;
