import axios from "axios";
import { selector } from "recoil";

export const fetchAdState = selector({
  key : 'fetchAdState',
  get : async() => {
    const adData = await axios.get('/server/wanted_FE_ad-list-data-set.json')
    return adData
  }
})