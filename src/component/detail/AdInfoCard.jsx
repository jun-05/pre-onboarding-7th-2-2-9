import React from 'react';
import tw from 'tailwind-styled-components';
import { parseDate, parseStatus, prefixCost } from '../../utils/detail';
import { useToggle } from './../../hooks/useToggle';
import { useState } from 'react';

const AdInfoCard = ({ adItem }) => {
  const report = adItem.report;
  const { status, startDate, budget, adType } = adItem;
  const { roas, cost, convValue } = report;
  const [toggle, setToggle] = useToggle();
  const [cardData, setCardData] = useState({
    status: status,
    startDate: startDate,
    budget: budget,
    adType: adType,
    roas: roas,
    cost: cost,
    convValue: convValue,
  });

  const onChange = e => {
    const name = e.target.getAttribute('name');
    setCardData(prev => {
      return { ...prev, [name]: e.target.value };
    });
  };

  return (
    <AdInfoCardBlock>
      <TitleBlock>{adType} 광고_20210603123030</TitleBlock>
      <AdInfoBolock>
        <div>상태</div>
        {toggle ? (
          <input name="status" value={cardData.status} onChange={onChange} />
        ) : (
          <div>{parseStatus(cardData.status)}</div>
        )}
      </AdInfoBolock>
      <AdInfoBolock>
        <div>광고 생성일</div>
        {toggle ? (
          <input name="startDate" value={cardData.startDate} onChange={onChange} />
        ) : (
          <div>{parseDate(cardData.startDate)}</div>
        )}
      </AdInfoBolock>
      <AdInfoBolock>
        <div>일 희망 예산</div>
        {toggle ? (
          <input name="budget" value={cardData.budget} onChange={onChange} />
        ) : (
          <div>{prefixCost(cardData.budget)} 원</div>
        )}
      </AdInfoBolock>
      <AdInfoBolock>
        <div>광고 수익률</div>
        {toggle ? (
          <input name="roas" value={cardData.roas} onChange={onChange} />
        ) : (
          <div>{cardData.roas} %</div>
        )}
      </AdInfoBolock>
      <AdInfoBolock>
        <div>매출</div>
        {toggle ? (
          <input name="convValue" value={cardData.convValue} onChange={onChange} />
        ) : (
          <div>{prefixCost(cardData.convValue, true)} 만원</div>
        )}
      </AdInfoBolock>
      <AdInfoBolock>
        <div>광고 비용</div>
        {toggle ? (
          <input name="cost" value={cardData.cost} onChange={onChange} />
        ) : (
          <div>{prefixCost(cardData.cost, true)} 만원</div>
        )}
      </AdInfoBolock>

      <UpdateButton onClick={setToggle}>수정하기</UpdateButton>
    </AdInfoCardBlock>
  );
};
const AdInfoCardBlock = tw.div`
flex
flex-col
p-5

w-[305px]
h-[420px]
rounded-2xl
border

[&>div:nth-child(2)]:border-t
`;

const TitleBlock = tw.div`
  text-[16px]
  font-bold
  pt-5
  pb-10
`;

const AdInfoBolock = tw.div`
flex
items-center

w-[265px]
h-10
border-b
text-[12px]

[&>div:nth-child(1)]:text-[#94A2AD]
[&>div:nth-child(1)]:w-28
[&>div:nth-child(2)]:font-bold
`;

const UpdateButton = tw.div`
flex
justify-center
items-center

w-[92px]
h-10

border
mt-5
text-[14px]
font-bold

rounded-lg
cursor-pointer
`;
export default AdInfoCard;
