import React from 'react';
import styled from 'styled-components';

const Title = () => {
  return (
    <TitleWrapper>
      <TitleContent>
      Title
      </TitleContent>
      <div>날짜</div>
    </TitleWrapper>
  )
};

const TitleWrapper = styled.section`
  display:flex;
`

const TitleContent = styled.h1`
  margin-right: auto;
`

export default Title;
