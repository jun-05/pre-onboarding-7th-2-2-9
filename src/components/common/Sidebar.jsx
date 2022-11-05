import React from 'react';
import styled from 'styled-components';

// Nav 320 * 984
const Sidebar = () => {
  return (
    <SideNav>
      <h1>헤더</h1>
    </SideNav>
  );
};

const SideNav = styled.nav`
  width: 320px;
  height: 100%;

  background-color: #5986ff;
  // padding: 19px 163px;
  // h1 {
  //   font-size: 17px;
  // }
`;
export default Sidebar;
