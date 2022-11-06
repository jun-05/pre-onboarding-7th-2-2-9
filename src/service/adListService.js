//getAdList(type:string):Promise<adList[]>
export class AdListService {
  #httpClient;
  #Listpath;
  #endPoint;

  constructor(httpClient, endPoint = 'wanted_FE_ad-list-data-set.json') {
    this.#httpClient = httpClient;
    this.#endPoint = endPoint;
    this.#Listpath = 'ads';
  }

  getAdList(type = 'all') {
    return this.#httpClient.fetch(this.#endPoint).then(result => {
      if (result.status !== 200) {
        throw new Error('api Error');
      }
      const adsData = result.data[this.#Listpath];
      if (type === 'all') {
        return Promise.resolve(adsData);
      } else {
        return Promise.resolve(adsData.filter(adItem => adItem.status === type));
      }
    });
  }
}
