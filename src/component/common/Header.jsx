import React from 'react';
import tw from 'tailwind-styled-components';
import { BiBell } from 'react-icons/bi';
import { AiOutlineSetting } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <InfoBlock>
          <div>
            <BiBell />
          </div>
          <div>
            <AiOutlineSetting />
          </div>
          <div>
            <FaRegUserCircle />
          </div>
          <div>원티드님</div>
        </InfoBlock>
      </HeaderBlock>
      <p className="border mx-10 max-w-[1320px] w-11/12" />
    </>
  );
};
const HeaderBlock = tw.div`
flex
items-center
justify-center

h-20
w-full
max-w-[1440px]


`;
const InfoBlock = tw.div`
flex
justify-end
pr-10
items-center
text-2xl

[&>div]:mr-5
w-full

`;

export default Header;
