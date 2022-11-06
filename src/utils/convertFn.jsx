export const convertIsoToTimeStamp = time => {
  let date = new Date(time);
  date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  return date;
};

export const convertComma = amount => {
  return amount.toLocaleString();
};
