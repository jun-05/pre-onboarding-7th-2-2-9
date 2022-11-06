import { useState } from 'react';
export const useAdupdate = AdObj => {
  const [copyObj, setCopyObj] = useState(AdObj);

  const updateCopyObj = Obj => {
    setCopyObj(prev => {
      return { ...prev, Obj };
    });
    return copyObj;
  };

  return [updateCopyObj];
};
