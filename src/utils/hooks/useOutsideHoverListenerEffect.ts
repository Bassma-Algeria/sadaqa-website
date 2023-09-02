import { RefObject, useEffect } from 'react';

const useOutsideHoverListenerEffect = (ref: RefObject<HTMLElement>, effect: () => void) => {
    useEffect(() => {
        if (!ref.current) return;

        return addOutsideHoverListener(ref.current, effect);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

const addOutsideHoverListener = (element: HTMLElement, listener: () => void): (() => void) => {
    const handler = (e: MouseEvent) => {
        if (!element.contains(e.target as Node)) listener();
    };

    document.addEventListener('mouseover', handler);

    return () => {
        document.removeEventListener('mouseover', handler);
    };
};

export { useOutsideHoverListenerEffect };
