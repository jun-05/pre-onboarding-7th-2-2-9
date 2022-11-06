import React from 'react';
import UserGuideBulb from '../../assets/svg/UserGuideBulb';
import { UserGuideLayout,MessageWrapper, BoldText, GuideMessage } from './style';

const UserGuide = () => {
  return (
    <UserGuideLayout>
      <section>
        <UserGuideBulb />
      </section>
      <MessageWrapper>
        <BoldText>레버 이용 가이드</BoldText>
        <GuideMessage>시작하기 전에 알아보기</GuideMessage>
      </MessageWrapper>
    </UserGuideLayout>
  );
};
export default UserGuide;
