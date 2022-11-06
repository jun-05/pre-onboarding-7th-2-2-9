import React from 'react';
import tw from 'tailwind-styled-components';
import AdInfoCard from './AdInfoCard';

const AdInfoContainer = () => {
  return (
    <AdInfoContainerBlock>
      <AdInfoCard isUp={true} />
      <AdInfoCard isUp={false} />
      <AdInfoCard isUp={false} />
      <AdInfoCard isUp={false} />
      <AdInfoCard isUp={false} />
      <AdInfoCard isUp={true} />
    </AdInfoContainerBlock>
  );
};
const AdInfoContainerBlock = tw.div`
2xl:grid 
2xl:grid-cols-3
2xl:justify-items-center
flex
flex-wrap
w-full

items-center
justify-center

gap-5
`;

export default AdInfoContainer;
