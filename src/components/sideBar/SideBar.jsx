import React from 'react';
import { SideBarLayout } from './style';
import DropDown from '../dropDown/DropDown';
import Menu from './Menu';
import UserGuide from './UserGuide';
import MenuSubtitle from './MenuSubtitle';
import { SERVICE_LIST } from '../../utils/constValue';

const SideBar = () => {
  return (
    <SideBarLayout>
      <img src="/Lever.svg" alt="logo" />
      <MenuSubtitle menuSubtitle={'서비스'} />
      <DropDown items={SERVICE_LIST} init={SERVICE_LIST[0].status} />
      <MenuSubtitle menuSubtitle={'광고 센터'} />
      <Menu />
      <UserGuide />
    </SideBarLayout>
  );
};

export default SideBar;
