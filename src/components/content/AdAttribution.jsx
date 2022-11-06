import styled from "styled-components"

const AdAttribution = () => {
  return(
    <AdAtWrapper>
      <AttName>ROAS</AttName>
      <StaticsWrapper>
        <Statistics>데이터</Statistics>
        <Change>18%</Change>
      </StaticsWrapper>
    </AdAtWrapper>
  )
}

const AdAtWrapper = styled.section`
  padding:1.8rem 4rem;
  border: 0.5px solid #EDEFF1;
  border-radius: 1rem;
  width:300px;

`

const AttName = styled.div`
    color:#94A2AD;
`

const StaticsWrapper = styled.section`
  display:flex;
`

const Statistics = styled.div`
  font-weight:700;
  font-size: 1.6rem;
  line-height: 1.9rem;
  margin-right: auto;
`

const Change = styled.div`
  
`

export default AdAttribution