import React from 'react';
import styled from 'styled-components';

// Header 1120 * 80
const Header = () => {
  return (
    <HeaderStyle>
      <h1>헤더</h1>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  width: 100%;
  height: 80px;

  border-bottom: 1px solid #edeff1;

  background-color: #fdc2c2;
`;
export default Header;