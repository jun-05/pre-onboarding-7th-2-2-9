import useStatusData from 'hooks/useStatusData';
import styled from 'styled-components';
import Card from './Card';

const Status = () => {
  const { roas, cost, imp, click, conv, sales } = useStatusData();
  return (
    <>
      <CountSection>
        <Card title="ROAS" data={roas} />
        <Card title="광고비" data={cost} />
        <Card title="노출 수" data={imp} />
        <Card title="클릭 수" data={click} />
        <Card title="전환 수" data={conv} />
        <Card title="매출" data={sales} />
      </CountSection>
    </>
  );
};

const CountSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;

  height: 178px;

  margin-bottom: 40px;
  box-sizing: content-box;
`;
export default Status;
