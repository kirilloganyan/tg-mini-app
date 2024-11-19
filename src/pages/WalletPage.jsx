import {ButtonWithHover} from "../components/ButtonWithHover";
import {useTelegram} from "../hooks/useTelegram.js";

const WalletPage = () => {
    const {tg, user} = useTelegram();
    console.log(user.username);
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Ваш Кошелек</h2>
            <div style={styles.userInfo}>
                <h3 style={styles.cardTitle}>Информация о пользователе</h3>
                <p style={styles.infoText}>Имя: ${user.username}</p>
                <p style={styles.infoText}>Баланс: ₽10,000</p>
            </div>
            <ButtonWithHover style={styles.button}>Вывести средства</ButtonWithHover>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#1a1a1a',
        color: '#fff',
        height: '100vh',
    },
    title: {
        fontSize: '28px',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    userInfo: {
        backgroundColor: '#333',
        padding: '20px',
        borderRadius: '10px',
        width: '90%',
        maxWidth: '400px',
        margin: '0 auto 20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    },
    cardTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#f96c25',
    },
    infoText: {
        fontSize: '16px',
        lineHeight: '1.5',
    },
    button: {
        marginTop: '10px',
    },
    '@media (max-width: 768px)': {
        userInfo: {
            width: '95%',
        },
    },
};

export default WalletPage;
