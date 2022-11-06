import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SideBarLayout = styled.div`
  background-color: #ffffff;
  padding: 1.5%;
  min-width: 32rem;
`;

export const MessageWrapper = styled.section`
  margin-left: 1rem;
`;

export const BoldText = styled.div`
  font-size: 1.6rem;
  font-weight: bold; ;
`;

export const UserGuideLayout = styled.section`
  display: flex;
  background: #e5f4fd;
  border-radius: 10px;
  padding: 10%;
  align-items: center;
`;
export const GuideMessage = styled.div`
  font-weight: 1.2rem;
  font-weight: 500;
  line-height: 1.4rem;
  color: #94a2ad;
`;
//menu
export const NavigateMenu = styled.button`
  border: none;
  display: block;
  width: 100%;
  margin: 2% 0;
  padding: 2%;
  text-align: start;
  color: ${props => (props.isSelected ? '#586CF5' : 'inherit')};
  background-color: ${props => (props.isSelected ? '#EDEFF1;' : 'inherit')};
`;

export const NavStyle = styled(NavLink)`
  text-decoration: none;
  text-align: start;
  font-weight: 700;
  background-color: #ffffff;
  color: #3a474e;
  font-size: 1.6rem;
  &.active {
    color: #586cf5;
    background-color: #edeff1;
    path {
      fill: 'white';
    }
  }
`;
