import { useState } from 'react';
import { Link } from 'react-router-dom';

const SidebarMenu = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleSidebar = () => {
        setIsVisible(!isVisible);
    };
    const tg = window.Telegram.WebApp;
    const onClose = () => {
        tg.close();

    }

    return (
        <div style={styles.container}>
            <button onClick={onClose}>{tg.initDataUnsafe?.user?.username}</button>
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
                        <MenuItem key={item.title} {...item} onClick={() => setIsVisible(false)} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const menuItems = [
    { title: 'Главная', icon: '🏠', to: '/' },
    { title: 'Контракты', icon: '📄', to: '/contracts' },
    { title: 'Кошелек', icon: '💼', to: '/wallet' },
    { title: 'Информация', icon: 'ℹ️', to: '/info' },
    { title: 'Менеджер', icon: '👨‍💼', to: '/manager' },
    { title: 'Канал', icon: '📢', to: '/channel' },
    { title: 'Сообщество', icon: '👥', to: '/community' },
];

const MenuItem = ({ title, icon, to, onClick }) => (
    <Link to={to} onClick={onClick} style={styles.link}>
        <div style={styles.menuItem}>
            <span style={styles.icon}>{icon}</span>
            <p>{title}</p>
        </div>
    </Link>
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
        marginLeft: '-15px'
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
