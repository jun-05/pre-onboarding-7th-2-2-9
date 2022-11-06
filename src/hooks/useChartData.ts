import { useAppSelector } from "redux/hooks";
import { filterTrendData } from "utils/utils";

const useChartData = () => {
  const { startDate, endDate, trendDatas } = useAppSelector(state => state.dashboard);

  const curTrendData = filterTrendData(trendDatas, startDate, endDate);
  return curTrendData;
};

export default useChartData;
