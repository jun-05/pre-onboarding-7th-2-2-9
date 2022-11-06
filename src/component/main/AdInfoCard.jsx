import React from 'react';
import tw from 'tailwind-styled-components';
import AdCardIcon from './AdCardIcon';

const AdInfoCard = ({ isUp }) => {
  return (
    <AdInfoCardBlock>
      <InfoNameBlock>ROAS</InfoNameBlock>
      <InfoValueBlock>
        <div>697%</div>
        <UpDownBlock>
          <AdCardIcon isUp={isUp} /> 18%
        </UpDownBlock>
      </InfoValueBlock>
    </AdInfoCardBlock>
  );
};
const AdInfoCardBlock = tw.div`
flex
flex-col

w-80
h-20

px-10
py-[18px]

rounded-2xl
border
`;

const InfoNameBlock = tw.div`
text-[12px]
text-[#94A2AD]
`;

const InfoValueBlock = tw.div`
flex
justify-between
items-center

[&>div:nth-child(1)]:text-[18px]
[&>div:nth-child(1)]:font-bold

[&>div:nth-child(2)]:text-[12px]
[&>div:nth-child(2)]:text-[#94A2AD]
`;

const UpDownBlock = tw.div`
flex

`;

export default AdInfoCard;
