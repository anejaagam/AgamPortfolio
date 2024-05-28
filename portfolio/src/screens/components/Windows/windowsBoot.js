import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BootLogo from '../../../assets/windows/bootLogo.svg';

const WindowsLoadingScreen = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Simulate a loading period
        const timer = setTimeout(() => {
            navigate('/windows');
        }, 4000); // 3 seconds

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div style={styles.loadingScreen}>
            <div style={styles.logoContainer}>
                <img src={BootLogo} alt="Windows Logo" style={styles.logo} />
            </div>
            <div style={styles.spinner}></div>
        </div>
    );
};
const keyframesStyle = `
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}`;



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
    spinner: {
        width: '20px',
        height: '20px',
        border: '5px solid #000',
        borderTop: '5px solid #fff',
        borderRadius: '50%',
        animation: 'spin 2s linear infinite',
    },
};
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = keyframesStyle;
document.head.appendChild(styleSheet);
export default WindowsLoadingScreen;
