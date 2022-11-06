import React from 'react';
import tw from 'tailwind-styled-components';
import AdInfoCard from './AdInfoCard';
import { useAdListContext } from './../../context/AdListContext';

const CardContent = () => {
  const { adListData } = useAdListContext();

  return (
    <CardContainerBlock>
      {adListData.map(adItem => (
        <AdInfoCard adItem={adItem} key={`adItem_${adItem.id}`} />
      ))}
    </CardContainerBlock>
  );
};
const CardContainerBlock = tw.div`
2xl:grid  
2xl:grid-cols-3
2xl:justify-items-center


flex
flex-wrap

w-full

items-center
justify-start

gap-5
py-5
`;

export default CardContent;
