import React from 'react';
import styled from 'styled-components';
import AdAttribution from './AdAttribution';
import { useRecoilValue } from 'recoil';
import { fetchAdTrend } from '../../../recoil/selector/fetchAdTrend';
import { startDate, endDate } from '../../../recoil/atom/dateState';
import Chart from './Chart';

const AdTrendContent = () => {
  const startDay = useRecoilValue(startDate);
  const endDay = useRecoilValue(endDate);
  const data = useRecoilValue(fetchAdTrend({ startDay, endDay }));
  const { ROAS, COST, IMP, CLICK, CONV, REVENUE } = data;
  // console.log(data)
  // console.log(ROAS, COST, CLICK, CONV, REVENUE)
  return (
    <ContentWrpaaer>
      <GridContainer>
        <AdAttribution name="ROAS" data={ROAS} />
        <AdAttribution name="광고비" data={COST} />
        <AdAttribution name="노출 수 " data={IMP} />
        <AdAttribution name="클릭수" data={CLICK} />
        <AdAttribution name="전환 수" data={CONV} />
        <AdAttribution name="매출" data={REVENUE} />
      </GridContainer>
      <Chart data={{ name: 'ROAS', ROAS: ROAS }} />
    </ContentWrpaaer>
  );
};

const ContentWrpaaer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1%;
  background-color: #ffffff;
  border-radius: 20px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem; ;
`;

export default AdTrendContent;
