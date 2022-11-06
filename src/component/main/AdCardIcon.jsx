import React from 'react';
import tw from 'tailwind-styled-components';

const AdCardIcon = ({ isUp }) => {
  return <AdCardIconBlock src={isUp ? upIconPath : downIconPath} alt="" />;
};
const AdCardIconBlock = tw.img`
text-[10px]
`;

const upIconPath = '/img/MainCardUpIcon.svg';
const downIconPath = '/img/MainCardDownIcon.svg';

export default AdCardIcon;
