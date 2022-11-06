import React from 'react';
import styled from "styled-components"
import { DropDownItemProps } from "./DropDown"

function DropDownLi({item} : DropDownItemProps) {
  return(
    <LIItem>{item}</LIItem>
  )
}
const LIItem = styled.li`
  
`

export default DropDownLi