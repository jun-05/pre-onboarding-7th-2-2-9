
// ROAS - roas ( roas / 100) %표시
// 광고비 - cost
// 노출수 - imp
// 클릭수 - click
// 전환 수 - conv
// 매출 - revenue
// const sales

import { useAppSelector } from "redux/hooks";
import { diffTrendData, filterTrendData } from "utils/utils";

// interface ObjectType {
//   roas: number;
//   cost: number;
//   imp: number;
//   click: number;
//   conv: number;
//   sales: number;
// }

// interface ObjectIndexable extends ObjectType {
// 	[key: string]: number;
// }
// interface TrendIndexable extends ObjectType {
//   [key: string]: number;
// }

const useStatusData = () => {
  const { startDate, endDate, trendDatas } = useAppSelector(state => state.dashboard);

  const prevEDate = startDate.subtract(1, "day");
  const prevSDate = prevEDate.subtract(5, "day");

  const curTrendData = filterTrendData(trendDatas, startDate, endDate);
  const prevTrendData = filterTrendData(trendDatas, prevSDate, prevEDate);

  const trendData = diffTrendData(curTrendData, prevTrendData);
  return trendData;
  
  // const { startDate } = useAppSelector((state) => state.dashboard);
  // console.log(startDate)

  // const trendData = trendResp.data.report.daily.filter((obj: ITrendData) =>
  //   dayjs(obj.date).isBetween(sDate, eDate, "day", "[]")
  // );

  // const { data: mediaData } = await axios.get('/server/wanted_FE-media-channel-data-set.json');
  // const mediaData = mediaResp.data.filter((obj: IMediaData) =>
  //   dayjs(obj.date).isBetween(sDate, eDate, "day", "[]")
  // );
  // const diffDay = eDate.diff(sDate, "d"); // 550
  // console.log(diffDay);
  // const a = sDate.subtract(diffDay, 'day');
  // console.log(a);
};

export default useStatusData;
