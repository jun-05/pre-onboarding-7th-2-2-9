import React from 'react';
import styled from 'styled-components';
import Calendar from './calendar/Calendar';

const Title = ({ state }) => {
  let content = null;
  if (state === '대시보드') {
    content = <Calendar />;
  }
  return (
    <TitleWrapper>
      <TitleContent>{state}</TitleContent>
      {content}
    </TitleWrapper>
  );
};

const TitleWrapper = styled.section`
  display: flex;
  padding: 2rem 0;
`;

const TitleContent = styled.h1`
  font-weight: 900;
  font-size: 2.6rem;
  line-height: 3.8rem;
  margin-right: auto;
  align-items: center;
`;

export default Title;
