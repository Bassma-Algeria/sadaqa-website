import React from 'react';
import NextHead from 'next/head';

interface Props {
    title: string;
    description: string;
}

const Head: React.FC<Props> = props => {
    return (
        <NextHead>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </NextHead>
    );
};

export { Head };
