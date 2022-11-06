import styled from 'styled-components';

const AdAttribution = ({ name, data }) => {
  return (
    <AdAtWrapper>
      <AttName>{name}</AttName>
      <StaticsWrapper>
        <Statistics>{data}</Statistics>
        <Change>18%</Change>
      </StaticsWrapper>
    </AdAtWrapper>
  );
};

const AdAtWrapper = styled.section`
  padding: 1.8rem 4rem;
  border: 0.5px solid #edeff1;
  border-radius: 1rem;
  width: 300px;
`;

const AttName = styled.div`
  color: #94a2ad;
`;

const StaticsWrapper = styled.section`
  display: flex;
`;

const Statistics = styled.div`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.9rem;
  margin-right: auto;
`;

const Change = styled.div``;

export default AdAttribution;
