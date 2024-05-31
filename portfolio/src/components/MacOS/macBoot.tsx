import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BootLogo from '../../assets/macOS/appleBoot.svg';

const MacOSBoot: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Simulate a loading period
        const timer = setTimeout(() => {
            navigate('/macOS');
        }, 4000); 

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-center">
            <div className="mb-12">
                <img src={BootLogo} alt="Apple Logo" className="w-24 h-24" />
            </div>
            <div className="w-72 h-1.5 bg-gray-600 rounded overflow-hidden">
                <div className="h-full bg-white rounded animate-loading"></div>
            </div>
        </div>
    );
};

// Adding custom keyframes for loading animation using Tailwind CSS
const keyframesStyle = `
@keyframes loading {
    0% { width: 0%; }
    50% { width: 50%; }
    100% { width: 100%; }
}`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = keyframesStyle;
document.head.appendChild(styleSheet);

export default MacOSBoot;
