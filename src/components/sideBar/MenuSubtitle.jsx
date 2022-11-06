import React from 'react';
import styled from 'styled-components';

const MenuSubtitle = ({ menuSubtitle }) => {
  return <MenuSubtitleWrapper>{menuSubtitle}</MenuSubtitleWrapper>;
};

const MenuSubtitleWrapper = styled.div`
  font-size: 1, 2rem;
  font-weight: 700;
  line-height: 1.4rem;
  color: #94a2ad;
  padding: 2%;
`;

export default MenuSubtitle;
