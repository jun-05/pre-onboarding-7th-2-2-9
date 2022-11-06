import React from 'react';
import tw from 'tailwind-styled-components';
import { BsChevronDown } from 'react-icons/bs';
import { useToggle } from '../../hooks/useToggle';

const DropDown = ({ list, color }) => {
  const [listToggle, onToggle] = useToggle();

  console.log(color);
  return (
    <DropDownBlock onClick={onToggle}>
      <div className={`w-[10px] h-[10px] rounded-full`} style={{ background: color }} />
      <div>{list[0]}</div>
      <BsChevronDown />

      <DropDownListBlock>
        {listToggle &&
          list?.map((item, idx) => {
            if (idx === 0) {
              return null;
            }
            return <DropDownItemBlock key={`dropItem_${idx}`}>{item}</DropDownItemBlock>;
          })}
      </DropDownListBlock>
    </DropDownBlock>
  );
};
const DropDownBlock = tw.div`
relative
  flex
  items-center
  justify-center

  w-[123px]
  h-[40px]
  rounded-[10px]
  border

  text-[14px]
  cursor-pointer

  [&>*]:ml-2
`;
const DropDownListBlock = tw.div`
  absolute

  top-10
  -left-2

  w-[123px]
  h-fit
  rounded-[10px]

  bg-slate-50
  px-4
`;
const DropDownItemBlock = tw.div`
  flex 

  justify-center

  py-1
  border-b
  last:border-b-0
  h-fit
`;
export default DropDown;
