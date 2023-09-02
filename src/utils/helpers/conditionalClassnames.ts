import clsx from 'clsx';

const cl = (...args: Array<string | undefined | Record<string, boolean>>): string => {
    return clsx(...args);
};

export { cl };
