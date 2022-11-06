import React from 'react';
import { NavLink } from 'react-router-dom';
import tw from 'tailwind-styled-components';

const AdServiceContainer = () => {
  return (
    <AdServiceBlock>
      <ServiceBlockText>광고 센터</ServiceBlockText>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? `${ServicePageButtonStyle} bg-[#EDEFF1] text-[#586CF5]`
            : `${ServicePageButtonStyle}`
        }
      >
        <img src="/img/NavImg1.svg" alt="" />
        <div>대시보드</div>
      </NavLink>
      <NavLink
        to="/adDetail"
        className={({ isActive }) =>
          isActive
            ? `${ServicePageButtonStyle} bg-[#EDEFF1] text-[#586CF5]`
            : `${ServicePageButtonStyle}`
        }
      >
        <img src="/img/NavImg2.svg" alt="" />
        <div>광고관리</div>
      </NavLink>
    </AdServiceBlock>
  );
};
const AdServiceBlock = tw.div`
flex
flex-col
[&>div]:mt-2
`;

const ServiceBlockText = tw.div`
pl-5 
text-gray-400`;

const ServicePageButtonStyle =
  'flex items-center justify-start w-[240px] h-[60px] border px-5 rounded-lg text-2xl [&>img]:mr-2 mt-2 font-bold';

export default AdServiceContainer;
