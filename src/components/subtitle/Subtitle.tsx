import React from 'react';
import { SubtitleWrapper } from './style';

interface SubtitleProps {
  subtitle: string;
}

const Subtitle = ({ subtitle }: SubtitleProps) => {
  return <SubtitleWrapper>{subtitle}</SubtitleWrapper>;
};
export default Subtitle;
