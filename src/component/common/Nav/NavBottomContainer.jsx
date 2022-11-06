import React from 'react';
import tw from 'tailwind-styled-components';

const NavBottomContainer = () => {
  return (
    <NavBottomMenuBlock>
      <LeverGuiddBlock>
        <ImgBackgroundBlock>
          <img src="/img/NavImg3.svg" alt="" />
        </ImgBackgroundBlock>

        <GuildInfoBlock className="first:text-bold">
          <div>레버 이용 가이드</div>
          <div>시작하기 전에 알아보기</div>
        </GuildInfoBlock>
      </LeverGuiddBlock>

      <BottomInfo>
        <div>레버는 함께 만들어갑니다</div>
        <div>이용약관</div>
      </BottomInfo>
    </NavBottomMenuBlock>
  );
};
const NavBottomMenuBlock = tw.div`
  absolute
  bottom-10

  flex
  flex-col
  [&>div]:mt-10
`;

const LeverGuiddBlock = tw.div`
  flex
  justify-center
  items-center
  w-60
  h-[100px]
  px-[20px]
  bg-[#E5F4FD]

  rounded-2xl
`;

const ImgBackgroundBlock = tw.div`
flex 
justify-center 
items-center 
w-10 
h-10 
rounded-full 
bg-[#586CF5] 
text-3xl 
text-white
`;

const GuildInfoBlock = tw.div`
  flex
  flex-col
  ml-2
  [&>div]:mt-1 
  [&>div:first-child]:font-bold
  [&>div:first-child]:text-[16px]
  [&>div:nth-child(2)]:text-sm
`;

const BottomInfo = tw.div`
  flex
  flex-col
  text-[12px]
  text-[#94A2AD]
  [&>div:nth-child(2)]:underline
  [&>div:nth-child(2)]:cursor-pointer
`;

export default NavBottomContainer;
