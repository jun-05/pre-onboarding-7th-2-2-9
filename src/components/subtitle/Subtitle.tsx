import React from 'react';

interface SubtitleProps {
  subtitle : string
}

const Subtitle = ({subtitle}:SubtitleProps) => {
  return(
    <div>{subtitle}</div>
  )
}
export default Subtitle