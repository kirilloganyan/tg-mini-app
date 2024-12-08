'use client'
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserDashboard from './pages/UserDashboard.jsx';
import ContractsPage from './pages/ContractsPage.jsx';
import SidebarMenu from './components/SidebarMenu.jsx';
import './global.css';
import WalletPage from "./pages/WalletPage.jsx";
import InfoPage from "./pages/InfoPage.jsx";

export default function Index() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null; // Prevent rendering on the server side

    return (
      <Router>
          <div style={styles.container}>
              <SidebarMenu />
              <div style={styles.content as any}>
                  <Routes>
                      <Route path="/" element={<UserDashboard />} />
                      <Route path="/contracts" element={<ContractsPage />} />
                      <Route path="/wallet" element={<WalletPage />} />
                      <Route path="/info" element={<InfoPage />} />
                  </Routes>
              </div>
          </div>
      </Router>
    );
}

const styles = {
    container: {
        display: 'flex',
        height: '100vh',
    },
    content: {
        flex: 1,
        overflowY: 'auto',
        height: '625px',
        width: '425px'
    },
};
