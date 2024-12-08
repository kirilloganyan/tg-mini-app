import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaFileContract, FaWallet, FaInfoCircle, FaUserTie, FaBullhorn, FaUsers } from 'react-icons/fa';
import {useTelegram} from "../hooks/useTelegram.js";

const SidebarMenu = () => {
    const [isVisible, setIsVisible] = useState(false);
    const {tg} = useTelegram();
    const toggleSidebar = () => {
        setIsVisible(!isVisible);
    };
    useEffect(() => {
        tg.ready();
    }, []);

    const openChannel = () => {
        const tg = window.Telegram.WebApp;
        const channelUrl = "/https://t.me/telegrachan";
        tg.openUrl(channelUrl);
    };
    const menuItems = [
        { title: 'Главная', icon: <FaHome color={'rgb(249, 108, 37)'} />, to: '/' },
        { title: 'Контракты', icon: <FaFileContract color={'rgb(249, 108, 37)'} />, to: '/contracts' },
        { title: 'Кошелек', icon: <FaWallet color={'rgb(249, 108, 37)'} />, to: '/wallet' },
        { title: 'Информация', icon: <FaInfoCircle color={'rgb(249, 108, 37)'} />, to: '/info' },
        { title: 'Менеджер', icon: <FaUserTie color={'rgb(249, 108, 37)'} />, },
        { title: 'Канал', icon: <FaBullhorn color={'rgb(249, 108, 37)'} />, },
        { title: 'Сообщество', icon: <FaUsers color={'rgb(249, 108, 37)'} />,},
    ];

    return (
        <div style={styles.container}>
            <button onClick={toggleSidebar} style={styles.toggleButton}>
                {isVisible ? '<' : '>'}
            </button>
            <div
                style={{
                    ...styles.sidebar,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
                }}
            >
                <div style={styles.userInfo}>
                    <p style={styles.username}>ogheng</p>
                </div>
                <div style={styles.menu}>
                    {menuItems.map((item) => (
                        <MenuItem key={item.title} {...item} onClick={() => {
                            item?.onClick()
                            setIsVisible(false)
                        }} />
                    ))}
                    <MenuItem title={'Канал'} icon={<FaBullhorn color={'rgb(249, 108, 37)'} />} onClick={openChannel}/>
                </div>
            </div>
        </div>
    );
};

const MenuItem = ({ title, icon, to, onClick, tgUrl }) => (
    <button to={to} onClick={onClick} style={styles.link}>
        <div style={styles.menuItem}>
            <span style={styles.icon}>{icon}</span>
            <p>{title}</p>
        </div>
    </>
);

const styles = {
    container: {
        display: 'flex',
        position: 'relative',
    },
    toggleButton: {
        position: 'absolute',
        left: '100%',
        top: '50%',
        transform: 'translateY(-50%)',
        padding: '10px 15px',
        backgroundColor: '#f96c25',
        color: '#fff',
        border: 'none',
        borderRadius: '100px',
        cursor: 'pointer',
        zIndex: 10,
        marginLeft: '-15px',
    },
    sidebar: {
        width: '205px',
        height: '100vh',
        backgroundColor: '#1a1a1a',
        padding: '20px',
        color: '#fff',
        position: 'absolute',
        left: '0',
        border: '1px solid white',
        zIndex: 5,
        transition: 'transform 0.3s ease',
    },
    userInfo: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    username: {
        fontWeight: 'bold',
        fontSize: '18px',
    },
    menu: {
        marginTop: '20px',
    },
    menuItem: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px 0',
        cursor: 'pointer',
    },
    icon: {
        marginRight: '10px',
        fontSize: '20px',
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
    },
    '@media (max-width: 768px)': {
        sidebar: {
            width: '70%',
        },
    },
};

export default SidebarMenu;
