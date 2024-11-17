import { useState } from 'react';

export const ButtonWithHover = ({ style, children, onClick }: any) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            style={{
                ...style,
                ...styles.button,
                ...(isHovered ? styles.buttonHover : {}),
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

const styles = {
    button: {
        backgroundColor: '#f96c25',
        color: '#fff',
        padding: '12px 24px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '18px',
        fontWeight: 'bold',
        transition: 'transform 0.3s ease, background-color 0.3s',
    },
    buttonHover: {
        transform: 'scale(1.05)', // эффект увеличения при наведении
    },
};

export default ButtonWithHover;
