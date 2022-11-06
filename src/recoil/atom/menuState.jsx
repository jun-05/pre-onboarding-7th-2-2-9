import { atom } from 'recoil';
import {recoilPersist} from'recoil-persist'
import { DASHBOARD } from '../../utils/constValue';

const {persistAtom} = recoilPersist()

export const menuState = atom<string>({
  key: 'menuState',
  default: DASHBOARD,
  effects_UNSTABLE: [persistAtom]
});
