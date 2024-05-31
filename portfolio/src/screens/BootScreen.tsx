import React from 'react';
import { useNavigate } from 'react-router-dom';
import HDD from '../assets/bootscreen/HDD.svg';

const BootScreen: React.FC = () => {
    const navigate = useNavigate();

    const handleBoot = (path: string) => {
        navigate(path);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white font-courier">
            <h1 className="text-3xl mb-8">CHOOSE BOOT-UP DEVICE</h1>
            <div className="flex items-center">
                <div 
                    className="flex flex-col items-center mx-4 cursor-pointer"
                    onClick={() => handleBoot('/windows-boot')}
                >
                    <img src={HDD} alt="Mechanical Engineering" className="w-20 h-20 mb-2" />
                    <p className="text-center">Mechanical <br /> Engineering</p>
                </div>
                <div className="text-xl mx-4">|</div>
                <div 
                    className="flex flex-col items-center mx-4 cursor-pointer"
                    onClick={() => handleBoot('/macos-boot')}
                >
                    <img src={HDD} alt="Computer Science" className="w-20 h-20 mb-2" />
                    <p className="text-center">Computer <br /> Science</p>
                </div>
            </div>
        </div>
    );
};

export default BootScreen;
