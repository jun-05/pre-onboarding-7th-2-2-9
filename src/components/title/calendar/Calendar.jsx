import React from 'react';
import styled from 'styled-components';
import { DayPicker } from 'react-day-picker';
import { useCalendarHook } from '../../../hooks/useCalendarHook';
const Calendar = () => {
  const {
    selectedRange,
    isCalenderShow,
    startDatestate,
    endDateState,
    hadleCalender,
    handleRangeSelect,
  } = useCalendarHook();
  return (
    <CalendarLayout>
      <div onClick={hadleCalender}>
        {startDatestate}~{endDateState}
      </div>
      {isCalenderShow && (
        <CalendarWrapper>
          <DayPicker
            mode="range"
            selected={selectedRange}
            onSelect={handleRangeSelect}
            numberOfMonths={1}
            defaultDate={startDatestate}
            pagedNavigation
          />
        </CalendarWrapper>
      )}
    </CalendarLayout>
  );
};

const CalendarLayout = styled.div`
  position: relative;
`;
const CalendarWrapper = styled.div`
  position: absolute;
  right: 1rem;
`;

export default Calendar;
