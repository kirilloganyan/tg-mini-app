import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import SidebarMenu from "./components/SidebarMenu.jsx";
import UserDashboard from "./pages/UserDashboard.jsx";
import ContractsPage from "./pages/ContractsPage.jsx";
import WalletPage from "./pages/WalletPage.jsx";
import InfoPage from "./pages/InfoPage.jsx";
import {useEffect} from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const tg = window.Telegram.WebApp;
const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <div style={{ display: 'flex', height: '100vh' }}>
                    <SidebarMenu />
                    <div style={{ flex: 1, overflowY: 'auto' }}>
                        <Routes>
                            <Route path="/" element={<UserDashboard />} />
                            <Route path="/contracts" element={<ContractsPage />} />
                            <Route path="/wallet" element={<WalletPage />} />
                            <Route path="/info" element={<InfoPage />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </QueryClientProvider>
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

export default App
