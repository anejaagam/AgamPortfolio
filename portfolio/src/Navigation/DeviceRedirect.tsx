import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface DeviceRedirectProps {
    children: React.ReactNode;
}

const DeviceRedirect: React.FC<DeviceRedirectProps> = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                if (location.pathname === '/windows') {
                    navigate('/android');
                } else if (location.pathname === '/macOS') {
                    navigate('/ios');
                }
            }
        };

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Check on component mount
        handleResize();

        // Clean up event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, [navigate, location.pathname]);

    return <>{window.innerWidth >= 768 ? children : null}</>;
};

export default DeviceRedirect;
