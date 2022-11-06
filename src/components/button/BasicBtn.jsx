import styled from 'styled-components';

const BasicBtn = ({ name, color, backgrounColor, border }) => {
  return (
    <Btn color={color} backgrounColor={backgrounColor} border={border}>
      {name}
    </Btn>
  );
};

const Btn = styled.button`
  background-color: ${props => props.backgrounColor};
  padding: 1.2rem 2rem;
  border: ${props => props.border};
  border-radius: 1rem;
  font-weight: 700;
  line-height: 1.6rem;
  color: ${props => props.color};
`;

export default BasicBtn;
