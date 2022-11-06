import styled from 'styled-components';
import { convertIsoToTimeStamp } from '../../../utils/convertFn';
import BasicBtn from '../../button/BasicBtn';

const AdManagementContent = ({ adData }) => {
  const convertedDate = convertIsoToTimeStamp(adData.startDate);
  return (
    <AdContentContainer>
      <AdTitle>{adData.title}</AdTitle>
      <AdAttributeWrapper>
        <LeftItem>상태</LeftItem>
        <RightItem>{adData.status}</RightItem>
      </AdAttributeWrapper>
      <AdAttributeWrapper>
        <LeftItem>광고 생성일</LeftItem>
        <RightItem>{convertedDate}</RightItem>
      </AdAttributeWrapper>
      <AdAttributeWrapper>
        <LeftItem>일 희망 예산</LeftItem>
        <RightItem>{adData.budget}</RightItem>
      </AdAttributeWrapper>
      <AdAttributeWrapper>
        <LeftItem>광고 수익률</LeftItem>
        <RightItem>{adData.report.roas}</RightItem>
      </AdAttributeWrapper>
      <AdAttributeWrapper>
        <LeftItem>매출</LeftItem>
        <RightItem>{(adData.report.roas * adData.report.cost) / 100} </RightItem>
      </AdAttributeWrapper>
      <AdAttributeWrapper>
        <LeftItem>광고 비용 </LeftItem>
        <RightItem>{adData.report.cost}</RightItem>
      </AdAttributeWrapper>
      <BasicBtn
        name={'수정하기'}
        color={'#3A474E'}
        backgrounColor={'#ffffff'}
        border={'1px solid #D1D8DC'}
      />
    </AdContentContainer>
  );
};

const AdContentContainer = styled.section`
  border: 1px solid #d1d8dc;
  border-radius: 1rem;
  padding: 5%;
  width: 30rem;
`;

const AdTitle = styled.div`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.9rem;
  margin: 3% 0;
`;
const AdAttributeWrapper = styled.section`
  display: flex;
  border-bottom: 1px solid #edeff1;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 3% 0;
`;

const LeftItem = styled.div`
  width: 30%;
  color: #94a2ad;
`;
const RightItem = styled.div``;

export default AdManagementContent;
