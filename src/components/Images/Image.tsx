import React from 'react';
import NextImage, { StaticImageData } from 'next/image';

interface Props {
    src: string | StaticImageData;
    alt: string;
    priority?: boolean;
    containerClassName?: string;
    containerStyle?: React.CSSProperties;
    placeholder?: 'blur' | 'empty';
    objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
    width?: number;
    height?: number;
    objectPosition?:
        | 'center'
        | 'left'
        | 'right'
        | 'top'
        | 'bottom'
        | 'top left'
        | 'top right'
        | 'bottom left'
        | 'bottom right';
}

const Image: React.FC<Props> = props => {
    return (
        <div
            className={props.containerClassName}
            style={{ position: 'relative', width: props.width, height: props.height }}
        >
            <NextImage
                src={props.src}
                alt={props.alt}
                placeholder={props.placeholder}
                priority={props.priority}
                style={{ objectFit: props.objectFit, objectPosition: props.objectPosition }}
                fill
            />
        </div>
    );
};

export { Image };
