import { ButtonWithHover } from "../components/ButtonWithHover";

const InfoPage = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Наша Миссия</h2>
            {infoBlocks.map((block, index) => (
                <div key={index} style={styles.infoBlock}>
                    <p style={styles.infoText}>{block}</p>
                </div>
            ))}
            <ButtonWithHover style={styles.contactButton}>Связаться с нами</ButtonWithHover>
        </div>
    );
};

const infoBlocks = [
    "Мы предлагаем финансовые решения, которые помогут вам уверенно управлять своими сбережениями и достигать поставленных целей.",
    "Наша команда использует передовые подходы и многолетний опыт для создания стратегий с высокой доходностью и минимальными рисками.",
    "С нами вы получите персонализированные консультации и доступ к уникальным инвестиционным продуктам, разработанным для долгосрочного успеха."
];

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #1a1a1a, #333)',
        color: '#fff',
        height: '105vh',
        padding: '20px',
        justifyContent: 'center',
    },
    title: {
        fontSize: '32px',
        fontWeight: 'bold',
        color: '#f96c25',
        marginBottom: '20px',
        textAlign: 'center',
    },
    infoBlock: {
        backgroundColor: '#444',
        borderRadius: '15px',
        padding: '20px',
        marginBottom: '20px',
        width: '90%',
        maxWidth: '500px',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.5)',
        textAlign: 'center',
    },
    infoText: {
        fontSize: '18px',
        lineHeight: '1.8',
        color: '#fff',
    },
    contactButton: {
        marginTop: '20px',
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
        infoBlock: {
            width: '100%',
        },
    },
};

export default InfoPage;
