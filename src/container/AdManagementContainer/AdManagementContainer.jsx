import React from 'react';
import AdManagementContent from '../../components/content/AdManagementContent/AdManagementContent';
import { useRecoilValue } from 'recoil';
import { fetchAdState } from '../../recoil/selector/fetchAdState';
import styled from 'styled-components';
import BasicBtn from '../../components/button/BasicBtn';
import DropDown from '../../components/dropDown/DropDown';
import { FILTER_LIST } from '../../utils/constValue';
import { adState } from '../../recoil/atom/adState';

const AdManagementContainer = () => {
  const response = useRecoilValue(fetchAdState);
  const currentFilterState = useRecoilValue(adState);
  return (
    <AdManageMentLayout>
      <AdManageMentWrapper>
        <EventWrapper>
          <DropDown items={FILTER_LIST} init={currentFilterState} />
          <BasicBtn
            name={'광고 만들기'}
            color={'#FFFFFF'}
            backgrounColor={'#586CF5'}
            border={'1px solid #586CF5'}
          />
        </EventWrapper>
        <AdGridContainer>
          {response.map(adData => (
            <React.Fragment key={adData.id}>
              <AdManagementContent adData={adData} />
            </React.Fragment>
          ))}
        </AdGridContainer>
      </AdManageMentWrapper>
    </AdManageMentLayout>
  );
};
const AdManageMentLayout = styled.div`
  background-color: #ffffff;
`;

const EventWrapper = styled.section`
  display: flex;
  align-items: center;
`;
const AdManageMentWrapper = styled.section`
  padding: 2rem;
  border-radius: 2rem;
`;

const AdGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  // place-items: center;
  border-radius: 2rem;
`;

export default AdManagementContainer;
