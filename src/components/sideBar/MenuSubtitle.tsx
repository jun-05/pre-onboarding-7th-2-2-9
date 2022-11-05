import React from "react";
import styled from "styled-components";

interface MenuSubtitleProps{
  menuSubtitle : string
}

const MenuSubtitle = ({menuSubtitle} : MenuSubtitleProps)=> {
  return(
    <MenuSubtitleWrapper>{menuSubtitle}</MenuSubtitleWrapper>
  )
}

const MenuSubtitleWrapper = styled.div`
  font-size: 0.5rem;
  font-weight: bold;
`

export default MenuSubtitle