import useChartData from 'hooks/useChartData';
import { useAppSelector } from 'redux/hooks';
import styled from 'styled-components';
import TrendChart from './Chart';

const Chart = () => {
  // const { roas, cost, imp, click, conv, sales } = useChartData();
  const { roas, click } = useChartData();
  const { startDate } = useAppSelector(props => props.dashboard);

  console.log(roas)
  console.log(startDate)
  return (
    <>
      <Section>
        <TrendChart datas={[roas, click]} />
      </Section>
    </>
  );
};

const Section = styled.section`
  height: 396px;
  padding: 40px;
`;

export default Chart;
