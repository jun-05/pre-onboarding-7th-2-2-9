import React from 'react';
import { BrowserRouter, Navigate, Route, Routes, To } from 'react-router-dom';
import Layout from '../components/common/Layout';
import MainPage from '../pages/main/Main';
import AdsManagePage from '../pages/adsmanage/AdsManage';
import NotFoundPage from '../pages/notfound/NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Redirect to="/main" />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/admanage" element={<AdsManagePage />} />
        </Route>
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const Redirect = ({ to }: { to: To }) => <Navigate to={to} />;

export default Router;
