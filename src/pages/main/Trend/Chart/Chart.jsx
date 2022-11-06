import styled from 'styled-components';
import {
  VictoryAxis,
  VictoryChart,
  VictoryGroup,
  VictoryLine,
  VictoryScatter,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from 'victory';

const TrendChart = ({ data }) => {
  const colors = ['#4fadf7', '#85da47'];
  return (
    <ChartArticle>
      <VictoryChart
        width={960}
        padding={{ top: 10, left: 20, bottom: 35, right: 10 }}
        containerComponent={<VictoryVoronoiContainer />}
      >
        <VictoryAxis />
        <VictoryAxis
          dependentAxis
          style={{
            grid: { stroke: '#F4F5F7', strokeWidth: 2 },
          }}
        />
        {Object.keys(data).map((obj, index) => (
          <VictoryGroup
            key={index}
            color={colors[index]}
            labels={({ datum }) => `${obj}: ${datum.y}`}
            labelComponent={<VictoryTooltip style={{ fontSize: 10 }} />}
            data={data[obj]}
          >
            <VictoryLine />
            <VictoryScatter size={({ active }) => (active ? 8 : 3)} />
          </VictoryGroup>
        ))}
      </VictoryChart>
    </ChartArticle>
  );
};

const ChartArticle = styled.article`
  height: 276px;
`;

export default TrendChart;
