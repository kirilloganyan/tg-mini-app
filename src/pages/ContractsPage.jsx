import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonWithHover from "../components/ButtonWithHover";

const ContractsPage = () => {
    const [currentContractIndex, setCurrentContractIndex] = useState(0);
    const [animationDirection, setAnimationDirection] = useState("none"); // "left" или "right"
    const navigate = useNavigate();

    const handleNext = () => {
        setAnimationDirection("right");
        setTimeout(() => {
            setCurrentContractIndex((prevIndex) => (prevIndex + 1) % contracts.length);
        }, 300); // Длительность анимации
    };

    const handlePrev = () => {
        setAnimationDirection("left");
        setTimeout(() => {
            setCurrentContractIndex((prevIndex) =>
                prevIndex === 0 ? contracts.length - 1 : prevIndex - 1
            );
        }, 300);
    };

    const currentContract = contracts[currentContractIndex];

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Наши Контракты</h2>
            <div style={styles.mainContract}>
                <div
                    style={{
                        ...styles.cardWrapper,
                        animation: animationDirection === "none" ? "none" : `${animationDirection} 0.3s ease`,
                    }}
                >
                    <ContractCard
                        {...currentContract}
                        onClick={() => navigate("/wallet")}
                        isMain
                    />
                </div>
                <div style={styles.navigation}>
                    <button style={styles.arrowButton} onClick={handlePrev}>
                        &lt;
                    </button>
                    <button style={styles.arrowButton} onClick={handleNext}>
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

const contracts = [
    { title: "На 6 месяцев", percent: "2.8% в день", limit: "до 1 000 000 ₽", description: "Реталмент - 48 часов" },
    { title: "На 4 месяца", percent: "3.4% в день", limit: "до 5 000 000 ₽", description: "Реталмент - 24 часа" },
    { title: "На 5 месяцев", percent: "3.8% в день", limit: "до 3 000 000 ₽", description: "Реталмент - 24 часа" },
    { title: "На 3 месяца", percent: "4.2% в день", limit: "до 5 000 000 ₽", description: "Личный менеджер" },
];

const ContractCard = ({ title, percent, limit, description, onClick, isMain }) => (
    <div style={{ ...styles.card, ...(isMain ? styles.mainCard : {}) }}>
        <h3 style={styles.cardTitle}>{title}</h3>
        <p>{percent}</p>
        <p>{limit}</p>
        <p>{description}</p>
        <ButtonWithHover style={styles.button} onClick={onClick}>
            Вывести средства
        </ButtonWithHover>
    </div>
);

const styles = {
    container: {
        padding: "20px",
        textAlign: "center",
        background: "linear-gradient(135deg, #1a1a1a, #333)",
        color: "#fff",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: "28px",
        fontWeight: "bold",
        marginBottom: "20px",
        color: "#f96c25",
    },
    mainContract: {
        position: "relative",
        width: "90%",
        maxWidth: "500px",
    },
    cardWrapper: {
        position: "relative",
        width: "100%",
    },
    navigation: {
        display: "flex",
        justifyContent: "space-between",
        position: "absolute",
        top: "50%",
        width: "100%",
        transform: "translateY(-50%)",
    },
    arrowButton: {
        background: "rgba(0, 0, 0, 0.5)",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        padding: "10px 15px",
        cursor: "pointer",
        fontSize: "18px",
    },
    card: {
        backgroundColor: "#333",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
        boxShadow: "0 8px 15px rgba(0, 0, 0, 0.5)",
    },
    mainCard: {
        transform: "scale(1.1)",
        border: "2px solid #f96c25",
    },
    cardTitle: {
        fontSize: "20px",
        fontWeight: "bold",
        marginBottom: "10px",
        color: "#ffcc70",
    },
    button: {
        backgroundColor: "#f96c25",
        color: "#fff",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        marginTop: "10px",
        cursor: "pointer",
        fontWeight: "bold",
    },

    "@keyframes left": {
        from: { transform: "translateX(100%)" },
        to: { transform: "translateX(0)" },
    },
    "@keyframes right": {
        from: { transform: "translateX(-100%)" },
        to: { transform: "translateX(0)" },
    },
};

export default ContractsPage;
