import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BootScreen from '../screens/BootScreen';
import WindowsSimulation from '../screens/WindowsSimulation';
import MacOSSimulation from '../screens/MacOSSimulation';
import AndroidSimulation from '../screens/AndroidSimulation';
import WindowsLoadingScreen from '../components/Windows/windowsBoot';
import MacOSBoot from '../components/MacOS/macBoot';
import IosSimulator from '../screens/iOSSimulation';
import DeviceRedirect from './DeviceRedirect';

const Navigation: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<BootScreen />} />
                <Route path="/windows" element={
                    <DeviceRedirect>
                        <WindowsSimulation />
                    </DeviceRedirect>
                } />
                <Route path="/macos" element={
                    <DeviceRedirect>
                        <MacOSSimulation />
                    </DeviceRedirect>
                } />
                <Route path="/android" element={<AndroidSimulation />} />
                <Route path="/ios" element={<IosSimulator />} />
                <Route path="/windows-boot" element={<WindowsLoadingScreen />} />
                <Route path="/macos-boot" element={<MacOSBoot />} />
            </Routes>
        </Router>
    );
};

export default Navigation;
