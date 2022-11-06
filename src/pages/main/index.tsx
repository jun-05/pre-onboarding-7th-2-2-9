import React from 'react';
import RangeDatePicker from './DatePicker';
import styled from 'styled-components';
import Trend from './Trend';
import Media from './Media';

const MainPage = () => {
  return (
    <>
      <Header>
        <h1>대시보드</h1>
        <RangeDatePicker />
      </Header>
      <Trend />
      <Media />
    </>
  );
};

const Header = styled.header`
  height: 80px;
  padding: 25px 40px;
  line-height: 30px;
  margin-bottom: 20px;

  h1 {
    font-size: 26px;
    font-weight: bold;
    color: #3a474e;
  }
`;
export default MainPage;
