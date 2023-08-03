const addOutsideHoverListener = (element: HTMLElement, listener: () => void): (() => void) => {
    const handler = (e: MouseEvent) => {
        if (!element.contains(e.target as Node)) listener();
    };

    document.addEventListener('mouseover', handler);

    return () => {
        document.removeEventListener('mouseover', handler);
    };
};

export { addOutsideHoverListener };
