import React from 'react';
import styled from 'styled-components';
import lever_logo from 'assets/lever_logo.png';
import { HiOutlinePresentationChartLine as Presentation } from 'react-icons/hi';
import { MdAddChart } from 'react-icons/md';
import { Link } from 'react-router-dom';

// Nav 320 * 984
const Sidebar = () => {
  return (
    <ASide>
      <Logo />
      <ServiceDiv>
        <SubTitle>
          <span>서비스</span>
        </SubTitle>
        <select>
          <option>매드업</option>
        </select>
      </ServiceDiv>
      <nav>
        <SubTitle>
          <span>광고 센터</span>
        </SubTitle>
        <ul>
          <Link to="/">
            <SideLi className="active">
              <span>
                <Presentation />
                대시보드
              </span>
            </SideLi>
          </Link>
          <Link to="/admanage">
            <SideLi>
              <span>
                <MdAddChart />
                광고관리
              </span>
            </SideLi>
          </Link>
        </ul>
      </nav>
      <div>이용가이드</div>
    </ASide>
  );
};

// Logo height 150px;
const ASide = styled.aside`
  display: flex;
  flex-direction: column;

  width: 320px;
  // height: 100%;
  padding: 0 40px;

  background-color: #fff;
`;

const Logo = styled.header`
  height: 150px;
  padding: 60px 0;
  border-bottom: 1px solid #edeff1;
  background-image: url(${lever_logo});
  background-origin: content-box;
  background-repeat: no-repeat;
`;
const ServiceDiv = styled.div`
  height: 100px;
  margin: 40px 0;

  select {
    width: 100%;
    height: 60px;

    border-radius: 10px;
    border: 1px solid #d1d8dc;
    padding-left: 20px;
    font-size: 16px;
    font-weight: bold;
  }
`;
const SideLi = styled.li`
  padding: 20px 22px;
  color: #3a474e;
  font-weight: bold;

  &.active {
    color: #586cf5;
    background-color: #edeff1;
    border-radius: 10px;
  }
`;
const SubTitle = styled.div`
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  font-weight: bold;
  color: #94a2ad;

  span {
    padding-left: 20px;
  }
`;
export default Sidebar;
