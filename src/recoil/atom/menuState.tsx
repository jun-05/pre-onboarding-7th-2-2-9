import { atom } from 'recoil';
import { DASHBOARD } from '../../utils/constValue';

export const menuState = atom<string>({
  key: 'menuState',
  default: DASHBOARD,
});
