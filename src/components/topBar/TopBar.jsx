import React from 'react';
import BellIcon from '../../assets/svg/BellIcon';
import ProfileIcon from '../../assets/svg/ProfileIcon';
import SettingIcon from '../../assets/svg/SettingIcon';
import { TopBarWrapper, ContentWrapper } from './style';

const TopBar = () => {
  return (
    <TopBarWrapper>
      <ContentWrapper>
        <div className='icon'><BellIcon /></div>
        <div className='icon'><SettingIcon /></div>
        <div className='icon'><ProfileIcon /></div>
        <div className='name'>원티드님</div>
      </ContentWrapper>
    </TopBarWrapper>
  );
};

export default TopBar;
