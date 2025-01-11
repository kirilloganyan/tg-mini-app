import { ButtonWithHover } from "../components/ButtonWithHover";
import {useEffect, useState} from "react";
import {getUserByTgId} from "../shared/api/users/index.js";
import {useTelegram} from "../hooks/useTelegram.js";
import {useNavigate} from "react-router-dom";

const UserDashboard = () => {
    const { tg, user } = useTelegram();
    const [tgUser, setTgUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const tgId = user?.id;
                if (tgId) {
                    const data = await getUserByTgId(tgId); // Передаём ID в запрос
                    setTgUser(data);
                } else {
                    console.warn('ID пользователя отсутствует');
                }
            } catch (err) {
                console.error('Ошибка при загрузке данных:', err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [user?.id]);

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Панель пользователя</h2>
            <div style={styles.card}>
                <h3 style={styles.cardTitle}>Ваш баланс</h3>
                <p style={styles.balance}>{tgUser?.money ? `${tgUser.money }₽` : '0₽'}
                </p>
                <ButtonWithHover style={styles.button} onClick={() => navigate('/wallet')}>Пополнить баланс</ButtonWithHover>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #1a1a1a, #333)',
        color: '#fff',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: '28px',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#f96c25',
    },
    card: {
        backgroundColor: '#444',
        padding: '20px',
        borderRadius: '15px',
        width: '90%',
        maxWidth: '400px',
        textAlign: 'center',
        margin: '0 auto 20px',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.5)',
    },
    cardTitle: {
        fontSize: '22px',
        fontWeight: 'bold',
        marginBottom: '15px',
        color: '#ffcc70',
    },
    balance: {
        fontSize: '26px',
        marginBottom: '20px',
        color: '#fff',
    },
    promoSection: {
        backgroundColor: '#555',
        padding: '20px',
        borderRadius: '15px',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.5)',
        width: '90%',
        maxWidth: '400px',
        margin: '0 auto',
        textAlign: 'center',
    },
    promoText: {
        fontSize: '22px',
        fontWeight: 'bold',
        marginBottom: '15px',
        color: '#ffcc70',
    },
    button: {
        marginTop: '15px',
        padding: '10px 20px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#f96c25',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        transition: 'all 0.3s ease',
    },
    '@media (max-width: 768px)': {
        card: {
            width: '95%',
        },
        promoSection: {
            width: '95%',
        },
    },
};

export default UserDashboard;
