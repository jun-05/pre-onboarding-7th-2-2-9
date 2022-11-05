import React from 'react';
import { TopBarWrapper,ContentWrapper } from './style';

const TopBar = () => {
  return (
    <TopBarWrapper>
      <ContentWrapper>
        <div>bell</div>
        <div>설정</div>
        <div>Profile</div>
        <div>원티드님</div>
      </ContentWrapper>
    </TopBarWrapper>
  )
};

export default TopBar;
