import { ButtonWithHover } from "../components/ButtonWithHover";
import { useTelegram } from "../hooks/useTelegram.js";

const WalletPage = () => {
    const { tg, user } = useTelegram();
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Ваш Кошелек</h2>
            <div style={styles.card}>
                <h3 style={styles.cardTitle}>Информация о пользователе</h3>
                <p style={styles.infoText}>
                    <strong>Имя:</strong> {user?.username || "Неизвестно"}
                </p>
                <p style={styles.infoText}>
                    <strong>Баланс:</strong> ₽10,000
                </p>
            </div>
            <ButtonWithHover style={styles.button}>Пополнить кошелёк</ButtonWithHover>
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
        border: "2px solid #f96c25"
    },
    cardTitle: {
        fontSize: '22px',
        fontWeight: 'bold',
        marginBottom: '15px',
        color: '#ffcc70',
    },
    infoText: {
        fontSize: '18px',
        lineHeight: '1.5',
        color: '#fff',
        margin: '10px 0',
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
    },
};

export default WalletPage;
