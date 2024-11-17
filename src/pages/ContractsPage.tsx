import { useNavigate } from 'react-router-dom';
import ButtonWithHover from "../components/ButtonWithHover";

const ContractsPage = () => {
    const navigate = useNavigate();

    return (
        <div style={styles.container as any}>
            <h2 style={styles.title}>Наши Контракты</h2>
            <div style={styles.cardsContainer as any}>
                {contracts.map((contract) => (
                    <ContractCard key={contract.title} {...contract} onClick={() => navigate('/wallet')} />
                ))}
            </div>
        </div>
    );
};

const contracts = [
    { title: "На 6 месяцев", percent: "2.8% в день", limit: "до 1 000 000 ₽", description: "Реталмент - 48 часов", buttonText: "Выбрать" },
    { title: "На 4 месяца", percent: "3.4% в день", limit: "до 5 000 000 ₽", description: "Реталмент - 24 часа", buttonText: "Приобрести" },
    { title: "На 5 месяцев", percent: "3.8% в день", limit: "до 3 000 000 ₽", description: "Реталмент - 24 часа", buttonText: "Выбрать" },
    { title: "На 3 месяца", percent: "4.2% в день", limit: "до 5 000 000 ₽", description: "Личный менеджер", buttonText: "Приобрести" },
];

const ContractCard = ({ title, percent, limit, description, onClick }) => (
    <div style={styles.card}>
        <h3 style={styles.cardTitle}>{title}</h3>
        <p>{percent}</p>
        <p>{limit}</p>
        <p>{description}</p>
        <ButtonWithHover style={styles.button} onClick={onClick}>Вывести средства</ButtonWithHover>
    </div>
);

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
    cardsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    card: {
        backgroundColor: '#333',
        padding: '20px',
        borderRadius: '10px',
        width: '45%',
        marginBottom: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        transition: 'transform 0.3s ease',
    },
    cardTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#f96c25',
    },
    button: {
        backgroundColor: '#f96c25',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        marginTop: '10px',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: 'background 0.3s',
    },
    '@media (max-width: 768px)': {
        container: {
            padding: '10px',
        },
        title: {
            fontSize: '24px',
        },
        card: {
            width: '90%',
        },
    },
    '@media (min-width: 1024px)': {
        card: {
            width: '30%',
        },
    },
};

export default ContractsPage;
