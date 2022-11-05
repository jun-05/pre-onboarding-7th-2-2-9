import React from 'react';
import UserGuideBulb from '../../assets/svg/UserGuideBulb';
import { UserGuideLayout, BoldText, GuideMessage } from './style';

const UserGuide = () => {
  return (
    <UserGuideLayout>
      <div>
        <UserGuideBulb />
      </div>
      <div>
        <BoldText>레버 이용 가이드</BoldText>
        <GuideMessage>시작하기 전에 알아보기</GuideMessage>
      </div>
    </UserGuideLayout>
  );
};
export default UserGuide;
