import Layout from '../components/layout/Layout';
import SideBar from '../components/sideBar/SideBar';
import Title from '../components/title/Title';
import TopBar from '../components/topBar/TopBar';
import DashBoardContainer from '../container/DashBoardContainer/DashBoardContainer';
import ContentWrapper from '../components/layout/ContentWrapper';

const DashBoard = () => {
  return (
    <Layout>
      <SideBar />
      <ContentWrapper>
        <TopBar />
        <Title />
        <DashBoardContainer />
      </ContentWrapper>
    </Layout>
  );
};

export default DashBoard;
