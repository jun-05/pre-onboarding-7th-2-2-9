import React from 'react';
import styled from 'styled-components';

function DropDownLi({ children }) {
  return <LIItem>{children}</LIItem>;
}
const LIItem = styled.li``;

export default DropDownLi;
