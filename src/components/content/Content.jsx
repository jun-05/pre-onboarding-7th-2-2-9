import React from 'react';
import styled from 'styled-components';
import axios from 'axios'
import AdAttribution from './AdAttribution';

const Content = () => {
  const fetchData = async () => {
    const response = await axios.get('/server/wanted_FE_trend-data-set.json')
    console.log(response.data.report)
  }
  fetchData()
  return (
    <ContentWrpaaer>
      <GridContainer>
        <AdAttribution/>
        <AdAttribution/>
        <AdAttribution/>
        <AdAttribution/>
        <AdAttribution/>
        <AdAttribution/>
      </GridContainer>
    </ContentWrpaaer>
  )
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
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;;
`

export default Content;
