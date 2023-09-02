import React from 'react';

import { cl } from '../../utils/helpers/conditionalClassnames';

type Variant =
    | 'p-xsmall'
    | 'p-small'
    | 'p-regular'
    | 'p-large'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'display-large'
    | 'display-small'
    | 'overline-large'
    | 'overline-small';

type BreackPoints = '';

interface Props {
    variant: Variant;
    breackPoints?: { [Key in BreackPoints]?: Variant };
    className?: string;
    weight?: 'bold' | 'light' | 'regular' | 'semi-bold';
    decoration?: 'underline' | 'line-through';
    transform?: 'uppercase' | 'lowercase' | 'capitalize';
    responsive?: boolean;
    children: string | number;
}

const Text: React.FC<Props> = ({
    className,
    variant,
    decoration,
    transform,
    weight = 'regular',
    responsive = true,
    children,
}) => {
    className = cl('color-text', className, {
        'font-bold': weight === 'bold',
        'font-semibold': weight === 'semi-bold',
        'font-light': weight === 'light',
        'font-normal': weight === 'regular',

        underline: decoration === 'underline',
        'line-through': decoration === 'line-through',

        uppercase: transform === 'uppercase',
        capitalize: transform === 'capitalize',
        lowercase: transform === 'lowercase',

        'text-p-xsmall': variant === 'p-xsmall',
        'text-p-small': variant === 'p-small',
        'text-p-regular': variant === 'p-regular',
        'text-p-large': variant === 'p-large',
        'text-h1': variant === 'h1',
        'text-h2': variant === 'h2',
        'text-h3': variant === 'h3',
        'text-h4': variant === 'h4',
        'text-h5': variant === 'h5',
        'text-h6': variant === 'h6',
        'text-display-large': variant === 'display-large',
        'text-display-small': variant === 'display-small',
        'text-overline-large': variant === 'overline-large',
        'text-overline-small': variant === 'overline-small',
    });

    if (variant === 'h1') return <h1 className={cl(className)}>{children}</h1>;
    if (variant === 'h2') return <h2 className={cl(className)}>{children}</h2>;
    if (variant === 'h3') return <h3 className={cl(className)}>{children}</h3>;
    if (variant === 'h4') return <h4 className={cl(className)}>{children}</h4>;
    if (variant === 'h5') return <h5 className={cl(className)}>{children}</h5>;
    if (variant === 'h6') return <h6 className={cl(className)}>{children}</h6>;

    return <p className={cl(className)}>{children}</p>;
};

export { Text };
