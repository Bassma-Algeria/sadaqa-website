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

type BreackPoints = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

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
    breackPoints,
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
        'sm:text-p-xsmall': breackPoints?.sm === 'p-xsmall',
        'md:text-p-xsmall': breackPoints?.md === 'p-xsmall',
        'lg:text-p-xsmall': breackPoints?.lg === 'p-xsmall',
        'xl:text-p-xsmall': breackPoints?.xl === 'p-xsmall',
        '2xl:text-p-xsmall': breackPoints?.['2xl'] === 'p-xsmall',

        'text-p-small': variant === 'p-small',
        'sm:text-p-small': breackPoints?.sm === 'p-small',
        'md:text-p-small': breackPoints?.md === 'p-small',
        'lg:text-p-small': breackPoints?.lg === 'p-small',
        'xl:text-p-small': breackPoints?.xl === 'p-small',
        '2xl:text-p-small': breackPoints?.['2xl'] === 'p-small',

        'text-p-regular': variant === 'p-regular',
        'sm:text-p-regular': breackPoints?.sm === 'p-regular',
        'md:text-p-regular': breackPoints?.md === 'p-regular',
        'lg:text-p-regular': breackPoints?.lg === 'p-regular',
        'xl:text-p-regular': breackPoints?.xl === 'p-regular',
        '2xl:text-p-regular': breackPoints?.['2xl'] === 'p-regular',

        'text-p-large': variant === 'p-large',
        'sm:text-p-large': breackPoints?.sm === 'p-large',
        'md:text-p-large': breackPoints?.md === 'p-large',
        'lg:text-p-large': breackPoints?.lg === 'p-large',
        'xl:text-p-large': breackPoints?.xl === 'p-large',
        '2xl:text-p-large': breackPoints?.['2xl'] === 'p-large',

        'text-h1': variant === 'h1',
        'sm:text-h1': breackPoints?.sm === 'h1',
        'md:text-h1': breackPoints?.md === 'h1',
        'lg:text-h1': breackPoints?.lg === 'h1',
        'xl:text-h1': breackPoints?.xl === 'h1',
        '2xl:text-h1': breackPoints?.['2xl'] === 'h1',

        'text-h2': variant === 'h2',
        'sm:text-h2': breackPoints?.sm === 'h2',
        'md:text-h2': breackPoints?.md === 'h2',
        'lg:text-h2': breackPoints?.lg === 'h2',
        'xl:text-h2': breackPoints?.xl === 'h2',
        '2xl:text-h2': breackPoints?.['2xl'] === 'h2',

        'text-h3': variant === 'h3',
        'sm:text-h3': breackPoints?.sm === 'h3',
        'md:text-h3': breackPoints?.md === 'h3',
        'lg:text-h3': breackPoints?.lg === 'h3',
        'xl:text-h3': breackPoints?.xl === 'h3',
        '2xl:text-h3': breackPoints?.['2xl'] === 'h3',

        'text-h4': variant === 'h4',
        'sm:text-h4': breackPoints?.sm === 'h4',
        'md:text-h4': breackPoints?.md === 'h4',
        'lg:text-h4': breackPoints?.lg === 'h4',
        'xl:text-h4': breackPoints?.xl === 'h4',
        '2xl:text-h4': breackPoints?.['2xl'] === 'h4',

        'text-h5': variant === 'h5',
        'sm:text-h5': breackPoints?.sm === 'h5',
        'md:text-h5': breackPoints?.md === 'h5',
        'lg:text-h5': breackPoints?.lg === 'h5',
        'xl:text-h5': breackPoints?.xl === 'h5',
        '2xl:text-h5': breackPoints?.['2xl'] === 'h5',

        'text-h6': variant === 'h6',
        'sm:text-h6': breackPoints?.sm === 'h6',
        'md:text-h6': breackPoints?.md === 'h6',
        'lg:text-h6': breackPoints?.lg === 'h6',
        'xl:text-h6': breackPoints?.xl === 'h6',
        '2xl:text-h6': breackPoints?.['2xl'] === 'h6',

        'text-display-large': variant === 'display-large',
        'sm:text-display-large': breackPoints?.sm === 'display-large',
        'md:text-display-large': breackPoints?.md === 'display-large',
        'lg:text-display-large': breackPoints?.lg === 'display-large',
        'xl:text-display-large': breackPoints?.xl === 'display-large',
        '2xl:text-display-large': breackPoints?.['2xl'] === 'display-large',

        'text-display-small': variant === 'display-small',
        'sm:text-display-small': breackPoints?.sm === 'display-small',
        'md:text-display-small': breackPoints?.md === 'display-small',
        'lg:text-display-small': breackPoints?.lg === 'display-small',
        'xl:text-display-small': breackPoints?.xl === 'display-small',
        '2xl:text-display-small': breackPoints?.['2xl'] === 'display-small',

        'text-overline-large': variant === 'overline-large',
        'sm:text-overline-large': breackPoints?.sm === 'overline-large',
        'md:text-overline-large': breackPoints?.md === 'overline-large',
        'lg:text-overline-large': breackPoints?.lg === 'overline-large',
        'xl:text-overline-large': breackPoints?.xl === 'overline-large',
        '2xl:text-overline-large': breackPoints?.['2xl'] === 'overline-large',

        'text-overline-small': variant === 'overline-small',
        'sm:text-overline-small': breackPoints?.sm === 'overline-small',
        'md:text-overline-small': breackPoints?.md === 'overline-small',
        'lg:text-overline-small': breackPoints?.lg === 'overline-small',
        'xl:text-overline-small': breackPoints?.xl === 'overline-small',
        '2xl:text-overline-small': breackPoints?.['2xl'] === 'overline-small',
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
