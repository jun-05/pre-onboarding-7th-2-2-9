import { Route, Routes } from 'react-router-dom';
import Layout from './component/common/Layout';
import AdDetailPage from './pages/AdDetailPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/adDetail" element={<AdDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
