import axiosInstance from './axiosInstance';
//interface
//fetch():Promise<trendData[]>
export class HttpClient {
  #baseURL;

  constructor(baseURL) {
    this.#baseURL = baseURL;
  }

  fetch(endPoint, options = {}) {
    return axiosInstance.get(this.#baseURL + endPoint, {
      ...options,
      headers: {
        ...options.headers,
      },
    });
  }
}
