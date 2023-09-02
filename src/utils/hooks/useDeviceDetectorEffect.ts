import { useEffect } from 'react';
import { isMobile } from 'react-device-detect';

type Device = 'mobile' | 'desktop';

const useDeviceDetectorEffect = (cb: (device: Device) => void) => {
    useEffect(() => {
        cb(detectDevice());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

const detectDevice = (): Device => {
    return isMobile ? 'mobile' : 'desktop';
};

export { useDeviceDetectorEffect };
