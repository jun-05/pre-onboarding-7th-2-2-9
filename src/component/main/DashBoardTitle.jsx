import React from 'react';
import tw from 'tailwind-styled-components';
import DatePickerComponent from './../common/DatePickerComponent';
import { useToggle } from './../../hooks/useToggle';

const DashBoardTitle = () => {
  const [toggle, setToggle] = useToggle();
  return (
    <DashBoardCotainerBlock>
      <TitleBlock>대시보드</TitleBlock>
      <DateCheckBlock>
        <div onClick={setToggle}>날짜 선택</div>
        {toggle && <DatePickerComponent />}
      </DateCheckBlock>
    </DashBoardCotainerBlock>
  );
};
const DashBoardCotainerBlock = tw.div`
flex

justify-between
px-10
py-6
max-w-[1440px]
`;

const TitleBlock = tw.div`
text-[26px]
font-bold
`;

const DateCheckBlock = tw.div`
  flex
  items-center
  justify-center
  relative
`;

export default DashBoardTitle;
