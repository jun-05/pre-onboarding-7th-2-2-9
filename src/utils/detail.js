const STATUS_TYPE = {
  active: '진행중',
  ended: '종료',
  suspend: '중단됨',
};

export function parseStatus(status) {
  return STATUS_TYPE[status];
}

export function parseDate(passedDate) {
  const date = new Date(passedDate);
  if (!Date.parse(date)) {
    return '잘못된 날짜 양식입니다';
  }
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDay();
}

export function prefixCost(cost, sub = false) {
  if (sub) {
    return parseInt(parseInt(cost).toString().slice(0, -4)).toLocaleString('ko-KR');
  }
  return parseInt(cost).toLocaleString('ko-KR');
}
