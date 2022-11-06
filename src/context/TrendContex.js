import { useCallback } from 'react';
import { createContext, useState, useEffect, useContext } from 'react';

let TempPeriod_1 = '2022-04-13';
let TempPeriod_2 = '2022-04-20';
const TrendContex = createContext(null);

export const useTrendContex = () => useContext(TrendContex);
export function TrendProvider({ children, trendService }) {
  const [trendData, setTrendData] = useState({
    allData: [],
    periodData: [],
  });

  useEffect(() => {
    trendService.getTitleWithPeriodTypeData().then(result => {
      setTrendData(prev => {
        return { ...prev, allData: result };
      });
    });
  }, [trendService]);

  const getPeriodData = useCallback(
    async (dataArr = trendData, period_1 = TempPeriod_1, period_2 = TempPeriod_2, periodType) => {
      const periodData = trendService.getPeriodTimeData(dataArr, period_1, period_2, periodType);
      setTrendData(prev => {
        return { ...prev, periodData: periodData };
      });
    },
    [trendData, trendService]
  );

  return (
    <TrendContex.Provider value={{ trendData, getPeriodData }}>{children}</TrendContex.Provider>
  );
}
