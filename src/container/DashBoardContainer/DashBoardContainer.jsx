import React from 'react';
import Subtitle from '../../components/subtitle/Subtitle';
import AdTrendContent from '../../components/content/AdTrendContent/AdTrendContent';

const DashBoardContainer = () => {
  return (
    <div>
      <Subtitle subtitle={'통합 광고 현황'} />
      <AdTrendContent />
    </div>
  );
};

export default DashBoardContainer;
