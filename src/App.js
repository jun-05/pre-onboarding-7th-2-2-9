import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import DashBoard from './pages/DashBoard';
import Admanagement from './pages/AdManagement/index';
import { GlobalStyle } from './styles/GlobalStyle';
import Headers from './components/Headers/Headers';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <GlobalStyle />
      <div style={{ flexDirection: 'column' }}>
        <Headers />
        <Router>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/management" element={<Admanagement />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
