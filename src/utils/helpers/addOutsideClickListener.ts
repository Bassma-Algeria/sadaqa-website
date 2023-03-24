const addOutsideClickListener = (element: HTMLElement, listener: () => void): (() => void) => {
    const handler = (e: MouseEvent) => {
        if (!element.contains(e.target as Node)) listener();
    };

    document.addEventListener('mousedown', handler);

    return () => {
        document.removeEventListener('mousedown', handler);
    };
};

export { addOutsideClickListener };
