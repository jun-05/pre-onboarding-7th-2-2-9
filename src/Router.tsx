import { Route, Routes, Navigate } from 'react-router-dom';
import DashBoard from './pages/DashBoard';
import AdManagement from './pages/AdManagement';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/ad" element={<AdManagement />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};
export default Router;
