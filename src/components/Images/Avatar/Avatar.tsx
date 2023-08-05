import React from 'react';
import { StaticImageData } from 'next/image';

import styles from './Avatar.module.scss';

import { Image } from '../Image';

interface Props {
    src: string | StaticImageData;
    alt: string;
    size?: number;
    containerClassName?: string;
}

const Avatar: React.FC<Props> = props => {
    return (
        <div className={props.containerClassName}>
            <Image
                alt={props.alt}
                src={props.src}
                objectFit="cover"
                objectPosition="center"
                width={props.size ?? 60}
                height={props.size ?? 60}
                containerClassName={styles.container}
            />
        </div>
    );
};

export { Avatar };
