import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';

const TrendChart = ({ datas }: { datas: number[] }) => {
  console.log(datas);
  return (
    <>
      <VictoryChart
        theme={VictoryTheme.material}
        width={960}
        padding={{ top: 10, left: 0, bottom: 35, right: 0 }}
      >
        <VictoryLine
          style={{
            data: { stroke: '#c43a31' },
            parent: { border: '1px solid #ccc' },
            labels: {
              fontSize: 12,
            },
          }}
          data={[
            { x: new Date(2021, 5, 3).toLocaleDateString(), y: 2 },
            { x: new Date(2021, 5, 6).toLocaleDateString(), y: 3 },
            { x: new Date(2021, 5, 8).toLocaleDateString(), y: 5 },
            { x: new Date(2021, 5, 9).toLocaleDateString(), y: 4 },
            { x: new Date(2021, 5, 12).toLocaleDateString(), y: 7 },
          ]}
        />
      </VictoryChart>
    </>
  );
};

export default TrendChart;
