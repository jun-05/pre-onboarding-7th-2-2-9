import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddManagementIcon from '../../assets/svg/AddManagementIcon';
import DashBoardIcon from '../../assets/svg/DashBoardIcon';
import { NavigateMenu } from './style';
import { DASHBOARD, ADMANAGEMENT } from '../../utils/constValue';
import { useRecoilState } from 'recoil';
import { menuState } from '../../recoil/atom/menuState';

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useRecoilState(menuState);
  const navigate = useNavigate();
  const handleMenuSelected = (e: any) => {
    setSelectedMenu(e.target.value);
    if (selectedMenu === DASHBOARD) {
      navigate('/ad');
    } else {
      navigate('/');
    }
  };
  return (
    <div>
      <NavigateMenu
        isSelected={selectedMenu === DASHBOARD}
        value={DASHBOARD}
        onClick={handleMenuSelected}
      >
        <DashBoardIcon isSelected={selectedMenu === DASHBOARD} />
        대시보드
      </NavigateMenu>
      <NavigateMenu
        isSelected={selectedMenu === ADMANAGEMENT}
        value={ADMANAGEMENT}
        onClick={handleMenuSelected}
      >
        <AddManagementIcon isSelected={selectedMenu === ADMANAGEMENT} />
        광고 관리
      </NavigateMenu>
    </div>
  );
};

export default Menu;
