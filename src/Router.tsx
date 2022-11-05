import { Route, Routes, Navigate } from 'react-router-dom';
import DashBoard from './pages/DashBoard';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/admanagement" element={<DashBoard />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};
export default Router;
