import useChartData from 'hooks/useChartData';
import styled from 'styled-components';
import TrendFilter from './Filter';
import TrendChart from './Chart';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { ChangeEvent } from 'react';
import { useCallback } from 'react';
import { setTrendFilter } from 'redux/reducer/dashSlice';

const Chart = () => {
  const dispatch = useAppDispatch();
  const { trendFilter } = useAppSelector(state => state.dashboard);
  const trendDatas = useChartData();

  const onSelect = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      dispatch(setTrendFilter({ ...trendFilter, [e.target.name]: e.target.value }));
    },
    [dispatch, trendFilter]
  );

  return (
    <>
      <Section>
        <TrendFilter filter={trendFilter} onSelect={onSelect} />
        <TrendChart data={trendDatas} />
      </Section>
    </>
  );
};

const Section = styled.section`
  height: 356px;
`;

export default Chart;
