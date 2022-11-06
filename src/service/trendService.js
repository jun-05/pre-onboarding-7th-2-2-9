//interface
//getAllTypeData(Titletype:String):Promise<typeData[]>
//getTitleWithPeriodTypeData(Titletype:string,periodType:string):Promise<typeData[dateType][]>
//getPeriodTimeData(typeData:Promise<typeData>,period_1:Date,period_2:Date,periodType:string):Promise<typeData[]>
//

const TREND_END_POINT = 'wanted_FE_trend-data-set.json';

export class TrendService {
  #httpClient;
  #Titletype = 'report';
  #periodType = 'daily';

  constructor(httpClient) {
    this.#httpClient = httpClient;
  }

  getTitleTypeData(Titletype = this.#Titletype) {
    return new Promise(resolve => {
      this.#httpClient.fetch(TREND_END_POINT).then(response => {
        resolve(response.data[Titletype]);
      });
    });
  }

  getTitleWithPeriodTypeData(Titletype = this.#Titletype, periodType = this.#periodType) {
    return new Promise(resolve => {
      this.#httpClient.fetch(TREND_END_POINT).then(response => {
        resolve(response.data[Titletype][periodType]);
      });
    });
  }

  getPeriodTimeData(dataArr, period_1, period_2, periodType = this.#periodType) {
    if (isNaN(Date.parse(period_1)) || isNaN(Date.parse(period_2))) {
      throw new Error('Not Valid Date');
    }
    if (Date.parse(period_2) - Date.parse(period_1) <= 0) {
      throw new Error('Not Valid Period');
    }
    return dataArr.filter(dailyData => period_1 <= dailyData.date && dailyData.date <= period_2);
  }
}
