import React from 'react';
import tw from 'tailwind-styled-components';

const LogoCotainer = () => {
  return (
    <LogoImgBlock>
      <LogoImg src="/img/lever_logo.png" alt="" />
      <hr />
    </LogoImgBlock>
  );
};
const LogoImgBlock = tw.div`
  w-[240px]
  h-[150px]
`;

const LogoImg = tw.img`
pb-[60px]
`;

export default LogoCotainer;
