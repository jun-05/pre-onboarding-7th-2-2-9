import React from 'react';
import { NavStyle } from './style';

const Menu = () => {
  return (
    <div>
      <NavStyle to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
        <div>대시보드</div>
      </NavStyle>
      <NavStyle to="/ad" className={({ isActive }) => (isActive ? 'active' : '')}>
        <div>광고관리</div>
      </NavStyle>
    </div>
  );
};

export default Menu;
