import styled from 'styled-components';

const TrendFilter = ({ filter: { sFilter, fFilter }, onSelect }) => {
  const selectOption = [
    { id: 'roas', name: 'ROAS' },
    { id: 'cost', name: '광고비' },
    { id: 'imp', name: '노출 수' },
    { id: 'click', name: '클릭 수' },
    { id: 'conv', name: '전환 수' },
    { id: 'sales', name: '매출' },
  ];
  return (
    <ChartArticle>
      <select name="fFilter" onChange={onSelect} defaultValue={fFilter}>
        {selectOption.map((obj, index) => {
          return (
            <option key={index} value={obj.id} disabled={sFilter === obj.id}>
              {obj.name}
            </option>
          );
        })}
      </select>
      <select name="sFilter" onChange={onSelect} defaultValue={sFilter}>
        {selectOption.map((obj, index) => (
          <option key={index} value={obj.id} disabled={fFilter === obj.id}>
            {obj.name}
          </option>
        ))}
      </select>
    </ChartArticle>
  );
};
const ChartArticle = styled.article`
  height: 40px;

  margin-bottom: 40px;
`;
export default TrendFilter;
