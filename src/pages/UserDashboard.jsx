import {ButtonWithHover} from "../components/ButtonWithHover";

const UserDashboard = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Панель пользователя</h2>
            <div style={styles.card}>
                <h3 style={styles.cardTitle}>Ваш баланс</h3>
                <p style={styles.balance}>₽10,000</p>
                <ButtonWithHover style={styles.button}>Пополнить баланс</ButtonWithHover>
            </div>
            <div style={styles.promoSection}>
                <p style={styles.promoText}>Специальное предложение!</p>
                <ButtonWithHover style={styles.button}>Узнать больше</ButtonWithHover>
            </div>
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
    card: {
        backgroundColor: '#333',
        padding: '20px',
        borderRadius: '10px',
        width: '90%',
        maxWidth: '400px',
        textAlign: 'center',
        margin: '0 auto 20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    },
    cardTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#f96c25',
    },
    balance: {
        fontSize: '24px',
        marginBottom: '10px',
    },
    promoSection: {
        textAlign: 'center',
        backgroundColor: '#222',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        width: '90%',
        maxWidth: '400px',
        margin: '0 auto',
    },
    promoText: {
        fontSize: '20px',
        fontWeight: 'bold',
    },
    button: {
        marginTop: '10px',
    },
    '@media (max-width: 768px)': {
        card: {
            width: '95%',
        },
    },
};

export default UserDashboard;
