import * as Styled from './style';
import logo from '../../asset/lever_logo.png';
import { sidebarServiceList, sidebarAdCenterList } from '../../constants/SidebarBtnList';
const Sidebar = () => {
  // const navigate = useNavigate();
  const PageLink = e => {
    // navigate(`/${e.target.value}`);
    console.log(e.target.value);
  };

  return (
    <>
      <Styled.SidebarContainer>
        <img src={logo} alt="" />
        <Styled.SidebarContent>
          <Styled.SidebarButtons>서비스</Styled.SidebarButtons>
          <Styled.SelectBtnSelect>
            {sidebarServiceList?.map((el, idx) => {
              return <option key={idx}>{el.name}</option>;
            })}
          </Styled.SelectBtnSelect>
          <Styled.SidebarButtons>광고센터</Styled.SidebarButtons>
          {sidebarAdCenterList?.map((el, idx) => {
            return (
              <a href={el.value} key={idx} style={{ textDecoration: 'none' }}>
                <Styled.Button type="button" value={el.value} onClick={PageLink}>
                  {el.name}
                </Styled.Button>
              </a>
            );
          })}
        </Styled.SidebarContent>
      </Styled.SidebarContainer>
    </>
  );
};
export default Sidebar;
