import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BootLogo from '../../assets/windows/bootLogo.svg';

const WindowsLoadingScreen: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Simulate a loading period
        const timer = setTimeout(() => {
            navigate('/windows');
        }, 4000); // 4 seconds

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-center">
            <div className="mb-12">
                <img src={BootLogo} alt="Windows Logo" className="w-24 h-24" />
            </div>
            <div className="w-5 h-5 border-4 border-t-white border-black rounded-full animate-spin"></div>
        </div>
    );
};

// Adding custom keyframes for spin animation using Tailwind CSS
const keyframesStyle = `
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = keyframesStyle;
document.head.appendChild(styleSheet);

export default WindowsLoadingScreen;
