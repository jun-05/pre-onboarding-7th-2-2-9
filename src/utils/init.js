import { HttpClient } from '../api/httpClient';
import { TrendService } from '../service/trendService';
import { AdListService } from './../service/adListService';

export default function init() {
  const httpClient = new HttpClient('/server/');
  const trendService = new TrendService(httpClient);
  const adListService = new AdListService(httpClient);

  return { trendService, adListService };
}
