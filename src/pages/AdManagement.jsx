import Layout from '../components/layout/Layout';
import SideBar from '../components/sideBar/SideBar';
import Title from '../components/title/Title';
import TopBar from '../components/topBar/TopBar';
import AdManagementContainer from '../container/AdManagementContainer/AdManagementContainer';
import ContentWrapper from '../components/layout/ContentWrapper';

const AdManagement = () => {
  return (
    <Layout>
      <SideBar />
      <ContentWrapper>
        <TopBar />
        <Title />
        <AdManagementContainer />
      </ContentWrapper>
    </Layout>
  );
};

export default AdManagement;
