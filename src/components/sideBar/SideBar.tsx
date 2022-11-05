import React from 'react';
import { SideBarLayout } from './style';
import DropDown from '../dropDown/DropDown';
import Menu from './Menu';
import UserGuide from './UserGuide';

const SideBar = () => {
  return (
    <SideBarLayout>
      <img src="/Lever.svg" alt="logo" />
      <DropDown />
      <Menu />
      <UserGuide />
    </SideBarLayout>
  );
};

export default SideBar;
