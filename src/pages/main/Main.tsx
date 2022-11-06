import React from 'react';
// import { useAppDispatch, useAppSelector } from 'redux/hooks';
// import { getList } from 'redux/reducer/dashSlice';
import styled from 'styled-components';

const Main = () => {
  // const dispatch = useAppDispatch();
  // {
  //   "channel": "google",
  //   "date": "2022-02-01",
  
  //   "imp": 50,            // ??
  //   "click": 7,           // 클릭수
  //   "cost": 2098,         // 매출?
  //   "convValue": 0,       // 
  //   "ctr": 14.0000,       // 
  //   "cvr": 0.0000,        // 
  //   "cpc": 299.7143,      // 
  //   "cpa": 0.0000,        // 
  //   "roas": 0.0000        // ROAS
  // }
  // ROAS - roas ( roas / 100) %표시
  // 광고비 - cost
  // 노출수 - imp
  // 클릭수 - click
  // 전환 수 - conv
  // 매출 - revenue
  // revenue 는 기간내 (conv * roas) / 100
  return (
    <>
      <Section>
        <SubHeader>
          <h2>매체 현황</h2>
        </SubHeader>
        <Contents></Contents>
      </Section>
    </>
  );
};


const Section = styled.section`
  height: 743px;

  padding: 20px 40px;
  // background: #c2defd;
`;

const SubHeader = styled.header`
  width: 100%;
  height: 20px;
  color: #3a474e;
  font-weight: bold;
  line-height: 20px;
  margin-bottom: 20px;
`;
const Contents = styled.article`
  height: 654px;
  padding: 40px;

  background: #fff;
  border-radius: 20px;
`;


export default Main;
