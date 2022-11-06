import { useState } from 'react';

export const useToggle = () => {
  const [toggle, setToggle] = useState(false);
  const onToggle = () => {
    setToggle(prev => !prev);
  };
  return [toggle, onToggle];
};
