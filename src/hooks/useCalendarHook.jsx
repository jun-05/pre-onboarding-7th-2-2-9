import { useState } from 'react';
import { convertIsoToTimeStamp } from '../utils/convertFn';
import { useRecoilState } from 'recoil';
import { startDate, endDate } from '../recoil/atom/dateState';

export const useCalendarHook = () => {
  const [selectedRange, setSelectedRange] = useState();
  const [isCalenderShow, setIsCalendarShow] = useState(false);
  const [startDatestate, setStartDateState] = useRecoilState(startDate);
  const [endDateState, setEndDateState] = useRecoilState(endDate);
  const hadleCalender = () => {
    setIsCalendarShow(prev => !prev);
  };
  const handleRangeSelect = range => {
    setSelectedRange(range);
    if (range?.from) {
      setStartDateState(convertIsoToTimeStamp(range?.from));
    }
    if (range?.to) {
      setEndDateState(convertIsoToTimeStamp(range.to));
      hadleCalender();
    }
  };
  return {
    selectedRange,
    isCalenderShow,
    startDatestate,
    endDateState,
    hadleCalender,
    handleRangeSelect,
  };
};
