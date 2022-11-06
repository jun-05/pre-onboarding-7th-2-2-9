import React from 'react';
import { SideBarLayout } from './style';
import DropDown from '../dropDown/DropDown';
import Menu from './Menu';
import UserGuide from './UserGuide';
import MenuSubtitle from './MenuSubtitle';

const SideBar = () => {
  return (
    <SideBarLayout>
      <img src="/Lever.svg" alt="logo" />
      <MenuSubtitle menuSubtitle={'서비스'} />
      <DropDown items={['arr']} />
      <MenuSubtitle menuSubtitle={'광고 센터'} />
      <Menu />
      <UserGuide />
    </SideBarLayout>
  );
};

export default SideBar;
