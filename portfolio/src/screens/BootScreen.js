import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BootScreen.css'
import HDD from '../assets/bootscreen/HDD.svg';

const BootScreen = () => {
    const navigate = useNavigate();

    const handleBoot = (path) => {
        navigate(path);
    };

    return (
        <div className="boot-screen">
            <h1 className="boot-title">CHOOSE BOOT-UP DEVICE</h1>
            <div className="boot-options">
                <div className="boot-option" onClick={() => handleBoot('/windows-boot')}>
                    <img src={HDD} alt="Mechanical Engineering" />
                    <p>Mechanical <br></br> Engineering</p>
                </div>
                <div className="separator">|</div>
                <div className="boot-option" onClick={() => handleBoot('/macos-boot')}>
                    <img src={HDD} alt="Computer Science" />
                    <p>Computer <br></br>Science</p>
                </div>
            </div>
        </div>
    );
};

export default BootScreen;
