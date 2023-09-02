import { RefObject, useEffect } from 'react';

const useOutsideClickListenerEffect = (
    ref: RefObject<HTMLElement>,
    effect: () => void,
    deps?: any[],
) => {
    useEffect(() => {
        if (!ref.current) return;

        return addOutsideClickListener(ref.current, effect);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
};

const addOutsideClickListener = (element: HTMLElement, listener: () => void): (() => void) => {
    const handler = (e: MouseEvent) => {
        if (!element.contains(e.target as Node)) listener();
    };

    document.addEventListener('mousedown', handler);

    return () => {
        document.removeEventListener('mousedown', handler);
    };
};

export { useOutsideClickListenerEffect };
