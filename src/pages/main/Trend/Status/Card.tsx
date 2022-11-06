import styled from 'styled-components';
import { DiffTypeValue } from 'utils/utils';
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai';

const Card = ({ title, data: { value, variance } }: { title: string; data: DiffTypeValue }) => {
  const suffix = {
    ROAS: '%',
    광고비: '원',
    '노출 수': '회',
    '클릭 수': '회',
    '전환 수': '회',
    매출: '원',
  }[title];

  const TriangleIcon =
    variance === '0' ? (
      <></>
    ) : variance.includes('-') ? (
      <AiFillCaretDown color="#85da47" size={12} />
    ) : (
      <AiFillCaretUp color="#ff0000" />
    );

  return (
    <CountArticle>
      <span>{title}</span>
      <div>
        <h3>
          {value} {suffix}
        </h3>
        <div>
          <span>{TriangleIcon}</span>
          <span>
            {variance.replace('-', '')} {suffix}
          </span>
        </div>
      </div>
    </CountArticle>
  );
};

const CountArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 32%;
  height: 79px;

  padding: 18px 40px;
  border: 1px solid #edeff1;
  border-radius: 10px;

  span {
    font-size: 12px;
    color: #94a2ad;
  }
  h3 {
    font-size: 16px;
    font-weight: bold;
    color: #3a474e;
  }
  > div {
    display: flex;
    justify-content: space-between;

    span {
      vertical-align: middle;
    }
    span:first-child {
      margin-right: 2px;
    }
  }
`;
export default Card;
