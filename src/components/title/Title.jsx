import React from 'react';
import styled from 'styled-components';
// import { DateRangePicker } from 'react-date-range';

const Title = () => {
  // const options = {
  //   // onChange,
  //   showDateDisplay: false,
  //   showMonthAndYearPickers: false,
  //   editableDateInputs: false,
  //   moveRangeOnFirstSelection: false,
  //   minDate: new Date('2022, 02, 01'),
  //   maxDate: new Date('2022, 04, 20'),
  //   monthDisplayFormat: 'yyy년 MM월',
  //   inputRanges: [],
  //   // ranges: currentRange,
  //   // locale: ko,
  //   months: 2,
  // };

  return (
    <TitleWrapper>
      <TitleContent>Title</TitleContent>
      {/* <DateRangePicker direction='horizontal' {...options}/> */}
    </TitleWrapper>
  );
};

const TitleWrapper = styled.section`
  display: flex;
  padding: 2rem 0;
`;

const TitleContent = styled.h1`
  font-weight: 900;
  font-size: 2.6rem;
  line-height: 3.8rem;
  margin-right: auto;
  align-items: center;
`;

export default Title;
