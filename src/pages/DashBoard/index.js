import React, { useEffect, useState } from 'react';
import { trendData } from '../../constants/JsonFileList';
import { ChartData } from '../../utils/ChartData';
import Rechart from '../../components/Chart/Rechart';
import ItemCards from '../../components/DashBoard/ItemCards';
import DatePickerComponent from '../../utils/DatePicker';
import BoardBar from '../../components/Headers/BoardBar/BoardBar';

const DashBoard = () => {
  const [trendDataList, setTrendDataList] = useState();
  useEffect(() => {
    ChartData().then(res => {
      setTrendDataList(res);
      console.log(res, trendDataList);
    });
  }, [trendData]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <BoardBar>
        <h2>대시보드</h2>
        <DatePickerComponent />
      </BoardBar>
      <div>통합광고현황</div>
      {!!trendDataList &&
        trendDataList.map((el, idx) => {
          <ItemCards key={idx} el={el} />;
        })}
      {!!trendDataList && <Rechart data={trendDataList} />}
    </div>
  );
};
export default DashBoard;
