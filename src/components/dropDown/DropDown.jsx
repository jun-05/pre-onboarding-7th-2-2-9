import React from 'react';
import styled from 'styled-components';
// import DropDownLi from './DropDownLi';

export interface  DropDownProps {
  items : string[]
}

export interface DropDownItemProps {
  item :string
}

const DropDown = ({items} : DropDownProps) => {
  return(
    <DropDownWrapper>
      <ul>
        {/* {items.map((item:string, index:number)=>{
          <li key={index}>
            {item}
          </li>
        })} */}
      </ul>
    </DropDownWrapper>
  )
};

const DropDownWrapper = styled.div`
  
`

export default DropDown;
