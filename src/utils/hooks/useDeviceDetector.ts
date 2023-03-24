import { isMobile } from 'react-device-detect';

type Device = 'mobile' | 'desktop';

const useDeviceDetector = (): Device => {
    return isMobile ? 'mobile' : 'desktop';
};

export { useDeviceDetector };
