import { ButtonWithHover } from "../components/ButtonWithHover";

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
