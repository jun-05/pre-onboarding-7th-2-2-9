import { useCallback } from 'react';
import { createContext, useState, useEffect, useContext } from 'react';

const AdListContext = createContext(null);
export const useAdListContext = () => useContext(AdListContext);

export function AdListProvider({ children, adListService }) {
  const [realAdListData, setRealAdListData] = useState([]);
  const [adListData, setAdListData] = useState([]);
  const [adFilteState, setAdFilteState] = useState('all');

  useEffect(() => {
    adListService.getAdList().then(result => {
      setRealAdListData(result);
      setAdListData(realAdListData);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = useCallback(
    type => {
      if (type === 'all') {
        return realAdListData;
      } else {
        return realAdListData.filter(adItem => adItem.status === type);
      }
    },
    [realAdListData]
  );

  useEffect(() => {
    setAdListData(getData(adFilteState));
  }, [adFilteState, adListService, getData]);

  const onChnageType = type => {
    setAdFilteState(type);
  };

  return (
    <AdListContext.Provider value={{ adListData, onChnageType }}>{children}</AdListContext.Provider>
  );
}
