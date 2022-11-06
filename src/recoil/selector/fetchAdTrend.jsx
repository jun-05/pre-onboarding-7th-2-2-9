import { selectorFamily } from 'recoil';
import axios from 'axios';

export const fetchAdTrend = selectorFamily({
  key: 'fetchAdTrend',
  get: date => async () => {
    const response = await axios.get('/server/wanted_FE_trend-data-set.json');
    const adTrend = response.data.report.daily;
    const filteredByStartDay = adTrend.filter(el => el.date >= `"${date.startDay}"`);
    const filteredByEndDay = filteredByStartDay.filter(el => el.date <= `"${date.endDay}"`);
    console.log(date.startDay);
    console.log('시작', filteredByStartDay, '끝', filteredByEndDay);
    const ROAS = Math.round(adTrend.map(el => el.roas).reduce((prev, cur) => prev + cur, 0) / 100);
    const COST = Math.round(adTrend.map(el => el.cost).reduce((prev, cur) => prev + cur, 0));
    const IMP = Math.round(adTrend.map(el => el.imp).reduce((prev, cur) => prev + cur, 0));
    const CLICK = Math.round(adTrend.map(el => el.click).reduce((prev, cur) => prev + cur, 0));
    const CONV = Math.round(adTrend.map(el => el.conv).reduce((prev, cur) => prev + cur, 0));
    const REVENUE = (CONV + ROAS) / 100;
    return {
      ROAS,
      COST,
      IMP,
      CLICK,
      CONV,
      REVENUE,
    };
  },
});
