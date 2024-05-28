import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BootLogo from '../../../assets/macOS/appleBoot.svg';

const MacOSBoot = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Simulate a loading period
        const timer = setTimeout(() => {
            navigate('/macOS');
        }, 4000); 

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div style={styles.loadingScreen}>
            <div style={styles.logoContainer}>
                <img src={BootLogo} alt="Apple Logo" style={styles.logo} />
            </div>
            <div style={styles.loadingBar}>
                <div style={styles.loadingProgress}></div>
            </div>
        </div>
    );
};
const keyframesStyle = `
@keyframes loading {
    0% { width: 0%; }
    50% { width: 50%; }
    100% { width: 100%; }
}
`;



const styles = {
    loadingScreen: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#000',
        color: '#fff',
        textAlign: 'center',
    },
    logoContainer: {
        marginBottom: '50px',
    },
    logo: {
        width: '100px',
        height: '100px',
    },
    loadingBar: {
        width: '300px',
        height: '5px',
        backgroundColor: '#444',
        borderRadius: '5px',
        overflow: 'hidden',
    },
    loadingProgress: {
        width: '0%',
        height: '100%',
        backgroundColor: '#fff',
        borderRadius: '5px',
        animation: 'loading 4s infinite',
    },
};
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = keyframesStyle;
document.head.appendChild(styleSheet);
export default MacOSBoot;