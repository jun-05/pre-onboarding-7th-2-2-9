import { useState } from 'react';

export const useDropDown = (items, init, setFn) => {
  const [isDropDownShow, setIsDropDownShow] = useState(false);
  const initValue = items.filter(item => item.status === init)[0];
  const [selectedValue, setSelectedValue] = useState(initValue.name);
  const handleDropDown = () => {
    setIsDropDownShow(prev => !prev);
  };
  const handleCurrntIndex = e => {
    setIsDropDownShow(prev => !prev);
    setSelectedValue(e.target.innerHTML);
    setFn(e.target.value);
  };
  return {
    isDropDownShow,
    selectedValue,
    handleDropDown,
    handleCurrntIndex,
  };
};
