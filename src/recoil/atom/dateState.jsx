import { atom } from 'recoil';

export const startDate = atom({
  key: 'startDate',
  default: '2022-02-01',
});

export const endDate = atom({
  key: 'endDate',
  default: '2022-04-20',
});
