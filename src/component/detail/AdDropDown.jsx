/* eslint-disable no-unused-vars */
import React from 'react';
import tw from 'tailwind-styled-components';
import { BsChevronDown } from 'react-icons/bs';
import { useAdListContext } from './../../context/AdListContext';
import { useToggle } from '../../hooks/useToggle';

const AdDropDown = () => {
  const { onChnageType } = useAdListContext();
  const [listToggle, onToggle] = useToggle();

  const onClickList = e => {
    const type = e.target.getAttribute('name');
    onChnageType(type);
  };

  return (
    <AdDropDownBlock onClick={onToggle}>
      전체 광고
      <BsChevronDown />
      {listToggle && (
        <DropDownListBlock>
          <DropDownItemBlock name="all" onClick={onClickList}>
            전체 광고
          </DropDownItemBlock>
          <DropDownItemBlock name="active" onClick={onClickList}>
            진행중
          </DropDownItemBlock>
          <DropDownItemBlock name="suspend" onClick={onClickList}>
            중단됨
          </DropDownItemBlock>
        </DropDownListBlock>
      )}
    </AdDropDownBlock>
  );
};
const AdDropDownBlock = tw.div`
  relative
  flex
  items-center
  justify-between

  px-4
  w-[123px]
  h-[40px]
  rounded-[10px]
  border

  text-[14px]
  cursor-pointer
`;

const DropDownListBlock = tw.div`
  absolute

  top-10
  left-0

  w-[123px]
  h-fit
  rounded-[10px]
  
  border
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

export default AdDropDown;
