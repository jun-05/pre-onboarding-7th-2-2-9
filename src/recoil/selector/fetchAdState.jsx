import axios from 'axios';
import { selector } from 'recoil';
import { adState } from '../atom/adState';

export const fetchAdState = selector({
  key: 'fetchAdState',
  get: async ({ get }) => {
    const currentAdState = get(adState);
    const adData = await axios.get('/server/wanted_FE_ad-list-data-set.json');
    const ads = adData.data.ads;
    if (currentAdState === 'all') {
      return ads;
    } else {
      const filteredAdData = ads.filter(ad => ad.status === currentAdState);
      return filteredAdData;
    }
  },
});
