import dayjs, { Dayjs } from 'dayjs';
import { ITrendData } from 'redux/reducer/dashSlice';

export interface TrendType {
  roas: number;
  cost: number;
  imp: number;
  click: number;
  conv: number;
  sales: number;
}

interface TrendIndexable extends TrendType {
  [key: string]: number;
}

export interface DiffTypeValue {
  value: string;
  variance: string;
}
interface DiffType {
  [key: string]: DiffTypeValue;
  roas: DiffTypeValue;
  cost: DiffTypeValue
  imp: DiffTypeValue;
  click: DiffTypeValue;
  conv: DiffTypeValue;
  sales: DiffTypeValue;
}

export const filterTrendData = (datas: ITrendData[], sDate: Dayjs, eDate: Dayjs) => {
  const filteredData = datas
    .filter(obj => dayjs(obj.date).isBetween(sDate, eDate, 'day', '[]'))
    .map(data => {
      return {
        roas: data.roas,
        cost: data.cost,
        imp: data.imp,
        click: data.click,
        conv: data.conv,
        sales: (data.roas * data.cost) / 100,
      } as TrendIndexable;
    })
    .reduce(
      (cur, acc) => {
        Object.keys(cur).forEach(key => (cur[key] += acc[key]));
        return cur;
      },
      {
        roas: 0,
        cost: 0,
        imp: 0,
        click: 0,
        conv: 0,
        sales: 0,
      } as TrendIndexable
    );

  return filteredData;
};

export const diffTrendData = (curData: TrendIndexable, prevData: TrendIndexable) => {
  return Object.keys(curData).reduce((obj, key) => {
    const variance = curData[key] - prevData[key];
    obj[key].value = (key !== "roas") ?  nFormatter(curData[key]) : Math.floor(curData[key] / 100).toString();
    obj[key].variance = (key !== "roas") ?  nFormatter(variance) : Math.floor(variance / 100).toString();
    return obj;
  }, {
    roas: { value: "0", variance: "0" },
    cost: { value: "0", variance: "0" },
    imp: { value: "0", variance: "0" },
    click: { value: "0", variance: "0" },
    conv: { value: "0", variance: "0" },
    sales: { value: "0", variance: "0" },
  } as DiffType);
};

const nFormatter = (num: number) => {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e4, symbol: "만" },
    { value: 1e8, symbol: "억" }
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup.slice().reverse().find(function(item) {
    return Math.abs(num) >= item.value;
  });
  
  if(item) {
    const val = num / item.value;
    return ((Math.abs(val) > 10) ? Math.floor(val).toFixed(0) : (Math.floor(val * 10) / 10).toString()).replace(rx, '$1') + item.symbol;
  } else {
    return '0';
  }
  // return item ? Math.floor(num / item.value).toFixed(0).replace(rx, "$1") + item.symbol : "0";
}
