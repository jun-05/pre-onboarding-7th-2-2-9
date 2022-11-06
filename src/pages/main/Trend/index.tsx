import styled from 'styled-components';
import Status from './Status';
import Chart from './Chart';

const Trend = () => {
  return (
    <Section>
      <SubHeader>
        <h2>통합 광고 현황</h2>
      </SubHeader>
      <Contents>
        <Status />
        <Chart />
      </Contents>
    </Section>
  );
};

const Section = styled.section`
  height: 743px;

  padding: 20px 40px;
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
  background: #fff;
  border-radius: 20px;

  padding: 40px;
`;

export default Trend;
