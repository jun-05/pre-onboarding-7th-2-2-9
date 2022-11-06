import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 320px;
  height: 100vh;
  padding: 60px 40px 0 40px;
  border: 1px solid red;
`;
export const SidebarContent = styled.div`
  margin-top: 60px;
  border-top: 1px solid #edeff1;
`;
export const SidebarButtons = styled.div`
  color: #94a2ad;
  margin: 53px 0 0 20px;
`;
export const SelectBtnSelect = styled.select`
  font-size: 16px;
  width: 240px;
  height: 60px;
  margin-top: 13px;
  font-weight: bold;
  border: 1px solid #d1d8dc;
  display: flex;
  align-items: center;
  padding: 20px;
`;
export const Button = styled.button`
  font-size: 16px;
  width: 240px;
  height: 60px;
  margin-top: 13px;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: ${props => (props.clicked ? '#edeff1' : 'white')};
  color: ${props => (props.clicked ? '#586cf5' : '#000000')};
`;
