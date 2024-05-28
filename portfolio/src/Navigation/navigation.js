import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BootScreen from '../screens/BootScreen.js';
import WindowsSimulation from '../screens/WindowsSimulation.js';
import MacOSSimulation from '../screens/MacOSSimulation.js';
import AndroidSimulation from '../screens/AndroidSimulation.js';
// eslint-disable-next-line no-unused-vars
import iOSSimulator from '../screens/iOSSimulation.js';
import WindowsLoadingScreen from '../screens/components/Windows/windowsBoot.js';
import MacOSBoot from '../screens/components/MacOS/macBoot.js';

const Navigation = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<BootScreen />} />
                <Route path="/windows" element={<WindowsSimulation />} />
                <Route path="/macos" element={<MacOSSimulation />} />
                <Route path="/android" element={<AndroidSimulation />} />
                <Route path="/ios" element={<iOSSimulator />} />
                <Route path="/windows-boot" element={<WindowsLoadingScreen />} />
                <Route path="/macos-boot" element={<MacOSBoot />} />
            </Routes>
        </Router>
    );
};

export default Navigation;