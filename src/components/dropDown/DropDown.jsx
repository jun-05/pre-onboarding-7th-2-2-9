import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import DropDownIcon from '../../assets/svg/DropDownIcon';
import { useDropDown } from '../../hooks/useDropDown';
import { adState } from '../../recoil/atom/adState';

const DropDown = ({ items, init }) => {
  const setAdState = useSetRecoilState(adState);
  const { isDropDownShow, selectedValue, handleDropDown, handleCurrntIndex } = useDropDown(
    items,
    init,
    setAdState
  );
  return (
    <DropDownWrapper>
      <DropDownBtn onClick={handleDropDown}>
        <span>{selectedValue}</span>
        <DropDownIcon className={'icon'} />
      </DropDownBtn>
      {isDropDownShow && (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <DropDownBtn type="button" onClick={handleCurrntIndex} value={item.status}>
                {item.name}
              </DropDownBtn>
            </li>
          ))}
        </ul>
      )}
    </DropDownWrapper>
  );
};

const DropDownWrapper = styled.div`
  position: relative;
  margin-right: auto;
  .icon {
    position: absolute;
  }
  ul {
    position: absolute;
  }
  li {
    transition: 0.2s;
    list-style: none;
  }
`;

export const DropDownBtn = styled.button`
  width: 12.3rem;
  border: 1px solid #d1d8dc;
  border-radius: 1rem;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.6rem;
  padding: 1.2rem 2rem;
  color: #3a474e;
  background: #ffffff;
`;

export default DropDown;
