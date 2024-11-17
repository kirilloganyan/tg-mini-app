import {ButtonWithHover} from "../components/ButtonWithHover";

const InfoPage = () => {
    return (
        <div style={styles.container as any}>
            <h2 style={styles.title as any}>rizhiy xui</h2>
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
    "Наши инвестиционные решения смогут увеличить ваш пассивный доход и обрести денежную независимость.",
    "Мы предлагаем надежные и проверенные способы инвестирования, ориентированные на высокую доходность и минимальные риски.",
    "Сотрудничая с нами, вы получаете доступ к уникальным финансовым продуктам и профессиональным консультациям."
];

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#1a1a1a',
        color: '#fff',
        height: '100vh',
        padding: '20px',
    },
    title: {
        fontSize: '32px',
        fontWeight: 'bold',
        color: '#f96c25',
        marginBottom: '20px',
        textAlign: 'center',
    },
    infoBlock: {
        backgroundColor: '#333',
        borderRadius: '10px',
        padding: '20px',
        marginBottom: '20px',
        width: '90%',
        maxWidth: '500px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    },
    infoText: {
        fontSize: '16px',
        lineHeight: '1.5',
    },
    contactButton: {
        marginTop: '20px',
    },
    '@media (max-width: 768px)': {
        infoBlock: {
            width: '100%',
        },
    },
};


export default InfoPage;
